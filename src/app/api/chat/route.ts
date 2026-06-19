import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import type { Lang } from "@/lib/i18n";
import {
  systemPrompt,
  TOOLS,
  notifyLead,
  bookingUrl,
} from "@/lib/receptionist";

export const runtime = "nodejs"; // the Anthropic SDK needs the Node runtime

type ChatMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { reply: "Ο AI βοηθός δεν είναι ακόμα ρυθμισμένος. / The AI assistant isn't configured yet." },
      { status: 200 },
    );
  }

  let body: { messages?: ChatMsg[]; lang?: Lang };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const lang: Lang = body.lang === "en" ? "en" : "el";
  const history = (body.messages || []).slice(-20); // cap context
  if (history.length === 0) {
    return NextResponse.json({ error: "no messages" }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });
  const messages: Anthropic.MessageParam[] = history.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  let booking: { url: string } | undefined;

  try {
    // Manual tool-use loop — a few iterations are plenty for a receptionist turn.
    for (let i = 0; i < 4; i++) {
      const res = await client.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 1024,
        thinking: { type: "adaptive" },
        output_config: { effort: "low" }, // snappy & cheap; raise to "medium" for richer replies
        system: systemPrompt(lang),
        tools: TOOLS,
        messages,
      });

      if (res.stop_reason === "tool_use") {
        messages.push({ role: "assistant", content: res.content });
        const results: Anthropic.ToolResultBlockParam[] = [];

        for (const block of res.content) {
          if (block.type !== "tool_use") continue;
          const input = block.input as Record<string, string | boolean>;

          if (block.name === "send_lead") {
            await notifyLead({
              name: input.name as string,
              email: input.email as string,
              phone: input.phone as string,
              service: input.service as string,
              details: input.details as string,
              wants_human: Boolean(input.wants_human),
              channel: input.wants_human ? "human" : "callback",
            });
            results.push({
              type: "tool_result",
              tool_use_id: block.id,
              content: "Lead recorded and the team was notified by email. The team replies within ~2 hours.",
            });
          } else if (block.name === "request_booking") {
            const url = bookingUrl(input.name as string, input.email as string);
            await notifyLead({
              name: input.name as string,
              email: input.email as string,
              service: input.service as string,
              details: (input.details as string) || "Wants to book a call.",
              channel: "booking",
            });
            if (url) booking = { url };
            results.push({
              type: "tool_result",
              tool_use_id: block.id,
              content: url
                ? `Booking link created: ${url} — share it so they can pick a slot (a Google Meet invite is sent automatically). The team was also notified.`
                : "Booking isn't configured yet — tell the visitor the team will reach out to arrange a time. Lead was recorded.",
            });
          } else {
            results.push({
              type: "tool_result",
              tool_use_id: block.id,
              content: "Unknown tool.",
              is_error: true,
            });
          }
        }

        messages.push({ role: "user", content: results });
        continue; // let the model phrase the confirmation
      }

      // end_turn (or anything else) — return the text
      const reply = res.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();
      return NextResponse.json({ reply, booking });
    }

    // Safety net if the loop somehow never returns text
    return NextResponse.json({
      reply: lang === "el"
        ? "Ευχαριστώ! Η ομάδα θα επικοινωνήσει σύντομα."
        : "Thanks! The team will reach out shortly.",
      booking,
    });
  } catch (e) {
    console.error("[chat] error:", e);
    return NextResponse.json(
      {
        reply:
          lang === "el"
            ? "Συγγνώμη, κάτι πήγε στραβά. Δοκίμασε ξανά ή γράψε μας στο " + (process.env.LEAD_EMAIL || "vc@upsell.ai") + "."
            : "Sorry, something went wrong. Try again or email us at " + (process.env.LEAD_EMAIL || "vc@upsell.ai") + ".",
      },
      { status: 200 },
    );
  }
}
