"use client";

import { useT } from "@/lib/i18n";
import type { LegalDoc } from "@/lib/content";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const t = useT();
  return (
    <main className="px-4 pt-32 pb-24 lg:px-6">
      <article className="mx-auto max-w-3xl">
        <span className="eyebrow text-accent2">{t({ el: "ΝΟΜΙΚΑ", en: "LEGAL" })}</span>
        <h1 className="display mt-3 text-4xl sm:text-5xl">{t(doc.title)}</h1>
        <p className="mt-3 text-sm text-muted">{t(doc.updated)}</p>
        <p className="mt-6 text-muted">{t(doc.intro)}</p>

        <div className="mt-10 space-y-8">
          {doc.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-ink">{t(s.h)}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                {s.body.map((p, k) => (
                  <p key={k}>{t(p)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
