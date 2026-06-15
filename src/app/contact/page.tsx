"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n";
import { contactPage as C, BRAND } from "@/lib/content";

export default function Contact() {
  const t = useT();
  const [interest, setInterest] = useState<string>("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Service: ${interest || "—"}\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-accent/60";

  return (
    <main className="px-4 pt-32 pb-24 lg:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="eyebrow text-accent2">{t({ el: "ΕΠΙΚΟΙΝΩΝΙΑ", en: "CONTACT" })}</span>
          <h1 className="display mt-3 text-4xl sm:text-6xl">{t(C.title)}</h1>
          <p className="mt-4 max-w-md text-muted">{t(C.sub)}</p>

          {sent ? (
            <div className="mt-8 rounded-2xl border border-lime/40 bg-lime/10 p-6 text-ink">{t(C.sent)}</div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div>
                <div className="eyebrow mb-2 text-muted">{t(C.interest)}</div>
                <div className="flex flex-wrap gap-2">
                  {C.options.map((o, i) => {
                    const label = t(o);
                    const active = interest === label;
                    return (
                      <button type="button" key={i} onClick={() => setInterest(active ? "" : label)}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${active ? "border-accent bg-accent text-white" : "border-line text-muted hover:text-ink"}`}>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder={t(C.fields.name)} className={field} />
                <input name="phone" required placeholder={t(C.fields.phone)} className={field} />
              </div>
              <input name="email" type="email" required placeholder={t(C.fields.email)} className={field} />
              <textarea name="message" rows={4} placeholder={t(C.fields.message)} className={field} />
              <button type="submit" className="glow w-full rounded-full bg-accent py-3.5 font-semibold text-white hover:bg-accent2 sm:w-auto sm:px-10">{t(C.submit)}</button>
            </form>
          )}
        </div>

        <aside className="h-fit space-y-3 lg:mt-16">
          <div className="eyebrow text-muted">{t(C.direct)}</div>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="card flex items-center justify-between p-5 hover:border-accent/40">
            <div><div className="font-bold">WhatsApp</div><div className="text-sm text-muted">{t({ el: "Άμεση απάντηση", en: "Instant reply" })}</div></div>
            <span className="text-accent2">↗</span>
          </a>
          <a href={`mailto:${BRAND.email}`} className="card flex items-center justify-between p-5 hover:border-accent/40">
            <div><div className="font-bold">Email</div><div className="text-sm text-muted">{BRAND.email}</div></div>
            <span className="text-accent2">↗</span>
          </a>
          <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="card flex items-center justify-between p-5 hover:border-accent/40">
            <div><div className="font-bold">{t({ el: "Τηλέφωνο", en: "Phone" })}</div><div className="text-sm text-muted">{BRAND.phone}</div></div>
            <span className="text-accent2">↗</span>
          </a>
        </aside>
      </div>
    </main>
  );
}
