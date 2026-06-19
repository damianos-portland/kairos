"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string; booking?: { url: string } };

const T = {
  open: { el: "Μίλα με τον AI βοηθό", en: "Chat with the AI assistant" },
  title: { el: "AI Receptionist", en: "AI Receptionist" },
  status: { el: "Online · απαντά άμεσα", en: "Online · replies instantly" },
  greeting: {
    el: "Γεια! 👋 Είμαι ο AI βοηθός της Kairos. Τι θες να φτιάξουμε — ιστοσελίδα, e-shop, AI receptionist ή κάτι άλλο;",
    en: "Hi! 👋 I'm the Kairos AI assistant. What would you like to build — a website, an e-shop, an AI receptionist, or something else?",
  },
  placeholder: { el: "Γράψε το μήνυμά σου…", en: "Type your message…" },
  send: { el: "Αποστολή", en: "Send" },
  book: { el: "📅 Διάλεξε ώρα για κλήση", en: "📅 Pick a time for a call" },
  error: { el: "Σφάλμα σύνδεσης. Δοκίμασε ξανά.", en: "Connection error. Try again." },
  close: { el: "Κλείσιμο", en: "Close" },
};

export default function Receptionist() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Seed greeting on first open
  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: "assistant", content: T.greeting[lang] }]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: data.reply || T.error[lang], booking: data.booking },
      ]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: T.error[lang] }]);
    } finally {
      setBusy(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={T.open[lang]}
        className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_40px_-8px_var(--color-accent)] transition hover:scale-105 active:scale-95 sm:h-16 sm:w-16"
      >
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-lime" />
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            className="fixed bottom-24 right-3 left-3 z-[100] flex max-h-[72vh] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:left-auto sm:right-5 sm:bottom-28 sm:w-[380px]"
            role="dialog"
            aria-label={T.title[lang]}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-line bg-surface2 px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-lg">🤖</div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold leading-tight">
                  k<span className="text-lime">AI</span>ros · {T.title[lang]}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" /> {T.status[lang]}
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label={T.close[lang]} className="rounded-md p-1.5 text-muted transition hover:bg-line hover:text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed " +
                      (m.role === "user"
                        ? "rounded-br-sm bg-accent text-white"
                        : "rounded-bl-sm bg-surface2 text-ink")
                    }
                  >
                    <p className="whitespace-pre-wrap">{m.content}</p>
                    {m.booking?.url && (
                      <a
                        href={m.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center justify-center rounded-lg bg-lime px-3 py-2 text-sm font-semibold text-bg transition hover:opacity-90"
                      >
                        {T.book[lang]}
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-surface2 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-line bg-surface2 px-3 py-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder={T.placeholder[lang]}
                className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-accent"
              />
              <button
                onClick={send}
                disabled={busy || !input.trim()}
                aria-label={T.send[lang]}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition hover:opacity-90 disabled:opacity-40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
