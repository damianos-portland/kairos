// Kairos AI Receptionist — server-side config, system prompt, tools and lead handling.
// Runs only on the server (imported by src/app/api/chat/route.ts). No secrets reach the browser.

import { BRAND } from "./content";
import type { Lang } from "./i18n";

// ── Config (all via env; sensible fallbacks so it runs before keys are added) ──────────────
export const LEAD_EMAIL = process.env.LEAD_EMAIL || BRAND.email;            // where leads land
export const LEAD_FROM = process.env.LEAD_FROM || "Kairos <onboarding@resend.dev>"; // verified sender
// Your Cal.com booking link, e.g. https://cal.com/kairos/15min — generates the Google Meet + invites.
export const CALCOM_LINK = process.env.CALCOM_LINK || "";

// ── System prompt (the receptionist's brain) ──────────────────────────────────────────────
// Grounded in the REAL pricing from content.ts so it can never invent a number.
export function systemPrompt(lang: Lang): string {
  const langName = lang === "el" ? "Greek (Ελληνικά)" : "English";
  const canBook = CALCOM_LINK ? "yes" : "no";
  return `You are the AI receptionist for **Kairos** (styled "kAIros"), a Greek AI web & automation agency.
Kairos builds custom websites, e-shops, custom CMS/booking panels, runs SEO, social media and ads, and sets up AI receptionists & automations. Tagline: "Καιρός να εκσυγχρονίσεις την επιχείρησή σου" / "Time to modernize your business."

# Your job
Greet visitors warmly, understand what they need, answer questions, and convert them into a lead — either by booking a short intro call or by capturing their details for the team to follow up. You ARE a live demo of the product Kairos sells, so be sharp, friendly and genuinely helpful.

# Language
Reply in ${langName} by default, but ALWAYS mirror the language the visitor writes in. Keep messages short and conversational (1–3 sentences). One question at a time. Warm, confident, never robotic or pushy. Light emoji ok, sparingly.

# Real pricing (NEVER invent numbers — these are the only prices you may quote, all excl. 24% VAT)
One-off builds:
- Marketing site — €399 (custom design, mobile-first, SEO basics, contact form, live in 3–7 days)
- Custom CMS site — €799 (everything in Marketing + your own admin panel: bookings/inventory/CRM, no WordPress) — most popular
- E-shop — €999 (full store: VAT, shipping, payments, legal pages, product import)
Monthly: Maintenance €12, Growth €49, Ads €99, Growth Pro €199. Social: Starter €150, Pro €450, Elite €879. Meta Ads: Starter €149, Pro €299.
AI receptionist & automations are scoped per project — for those, capture the lead and let the team quote.
Delivery is typically 3–7 days. The site & code are 100% the client's, no lock-in. Custom, never templates.

# Conversation flow
1. Greet + ask what they want to build (website / e-shop / AI receptionist / automation / not sure).
2. Briefly qualify: type of business, rough timeline. Don't interrogate — 1–2 light questions max.
3. Capture their name + a phone OR email. You need this before finishing.
4. Then offer the choice:
   ${canBook === "yes"
      ? "- a quick 15-min Google Meet call (use the request_booking tool to give them a booking link), OR\n   - just send the request and the team contacts them (use the send_lead tool)."
      : "- send the request so the team contacts them (use the send_lead tool). (Booking is not configured yet — do not promise a call link.)"}
5. Confirm clearly and warmly. Tell them the team replies within ~2 hours.

# Rules
- Quote ONLY the prices above. If asked about something not priced (AI receptionist, automation, custom scope), say it's scoped per project and capture the lead for a quote.
- Never promise a delivery date or price the tools didn't give you.
- Once you have a name + contact AND they've chosen call-or-callback, CALL THE TOOL. Do not just say you'll pass it on without calling the tool.
- If they ask to talk to a human, immediately call send_lead with their details and a note that they want a human.
- Stay on Kairos topics. If asked something unrelated, gently steer back.
- Contact details for direct reach if they ask: ${BRAND.phone}, ${BRAND.email}, WhatsApp ${BRAND.whatsapp}.`;
}

// ── Tool definitions (Anthropic tool-use schema) ──────────────────────────────────────────
export const TOOLS = [
  {
    name: "send_lead",
    description:
      "Record a lead and notify the Kairos team by email. Call this once you have the visitor's name and a phone or email, and they've chosen to be contacted (or asked for a human). The team follows up.",
    input_schema: {
      type: "object" as const,
      properties: {
        name: { type: "string", description: "Visitor's name" },
        email: { type: "string", description: "Visitor's email (if given)" },
        phone: { type: "string", description: "Visitor's phone (if given)" },
        service: {
          type: "string",
          description: "What they're interested in (e.g. e-shop, AI receptionist, not sure)",
        },
        details: {
          type: "string",
          description: "Short summary of their need, business type, timeline, budget — anything useful for the team.",
        },
        wants_human: { type: "boolean", description: "True if they explicitly asked to talk to a person." },
      },
      required: ["name", "service", "details"],
    },
  },
  {
    name: "request_booking",
    description:
      "Give the visitor a link to book a short Google Meet intro call, and notify the team. Call this when they want a call and you have their name + email. Returns a booking URL to share with them.",
    input_schema: {
      type: "object" as const,
      properties: {
        name: { type: "string", description: "Visitor's name" },
        email: { type: "string", description: "Visitor's email (needed for the calendar invite)" },
        service: { type: "string", description: "What they're interested in" },
        details: { type: "string", description: "Short summary of their need for the team." },
      },
      required: ["name", "email"],
    },
  },
];

// ── Lead notification (Resend email; logs to console if no key, so it still 'works') ───────
type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  details?: string;
  wants_human?: boolean;
  channel: "callback" | "booking" | "human";
};

export async function notifyLead(lead: Lead): Promise<void> {
  const subject =
    (lead.wants_human ? "🔴 HUMAN REQUESTED — " : lead.channel === "booking" ? "📅 Booking — " : "✨ New lead — ") +
    (lead.name || "Website visitor");
  const lines = [
    `Name:    ${lead.name || "—"}`,
    `Email:   ${lead.email || "—"}`,
    `Phone:   ${lead.phone || "—"}`,
    `Service: ${lead.service || "—"}`,
    `Channel: ${lead.channel}`,
    ``,
    `Details:`,
    lead.details || "—",
    ``,
    `— Sent by the Kairos AI receptionist`,
  ];
  const text = lines.join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // No email provider configured yet — don't lose the lead, surface it in the server logs.
    console.log(`[receptionist] LEAD (no RESEND_API_KEY set)\nTo: ${LEAD_EMAIL}\n${subject}\n${text}`);
    return;
  }
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(key);
    await resend.emails.send({
      from: LEAD_FROM,
      to: LEAD_EMAIL,
      replyTo: lead.email || undefined,
      subject,
      text,
    });
  } catch (e) {
    console.error("[receptionist] failed to send lead email:", e);
  }
}

// Build a Cal.com booking link prefilled with the visitor's details.
export function bookingUrl(name?: string, email?: string): string {
  if (!CALCOM_LINK) return "";
  const u = new URL(CALCOM_LINK);
  if (name) u.searchParams.set("name", name);
  if (email) u.searchParams.set("email", email);
  return u.toString();
}
