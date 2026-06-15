"use client";

import Link from "next/link";
import { useLang, useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";
import { BRAND, hero, stats, why, process, services, pricingOneoff, pricingMonthly, included, faq, cta, aiReceptionist } from "@/lib/content";

export default function Home() {
  const t = useT();
  const { lang } = useLang();
  const FROM = lang === "el" ? "από" : "from";
  const PERMO = lang === "el" ? "/μήνα" : "/mo";
  const VAT = lang === "el" ? "+ΦΠΑ" : "+VAT";

  return (
    <main className="overflow-hidden">
      <JsonLd data={faqLd()} />
      {/* HERO */}
      <section className="relative px-4 pt-32 pb-16 lg:px-6 lg:pt-44">
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ai-hero.jpg" alt="" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/25" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-accent2">{t(hero.kicker)}</span>
            <h1 className="display mt-6 text-5xl sm:text-7xl lg:text-[5rem]">
              {t({ el: hero.lines.el[0], en: hero.lines.en[0] })}<br />
              <span className="grad">{t({ el: hero.lines.el[1], en: hero.lines.en[1] })}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{t(hero.sub)}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="glow rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent2">{t(hero.cta1)}</Link>
              <a href="#pricing" className="rounded-full border border-line bg-bg/40 px-7 py-3.5 font-semibold text-ink backdrop-blur hover:border-accent/50">{t(hero.cta2)}</a>
            </div>
            <p className="mt-5 text-xs text-muted">✓ {t(hero.note)}</p>
          </div>

          {/* stats */}
          <div className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface/80 px-5 py-7 text-center backdrop-blur">
                <div className="display text-3xl text-accent2 sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI RECEPTIONIST SPOTLIGHT */}
      <section id="ai-receptionist" className="relative scroll-mt-20 px-4 py-20 lg:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-lime">{t(aiReceptionist.kicker)}</span>
            <h2 className="display mt-3 text-3xl sm:text-5xl">{t(aiReceptionist.title)}</h2>
            <p className="mt-4 max-w-lg text-muted">{t(aiReceptionist.sub)}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {aiReceptionist.bullets.map((bn, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-ink/90"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime/20 text-xs text-lime">✓</span>{t(bn)}</li>
              ))}
            </ul>
            <Link href="/contact" className="glow mt-8 inline-block rounded-full bg-accent px-7 py-3.5 font-semibold text-white hover:bg-accent2">{t(aiReceptionist.cta)}</Link>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-[90px]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ai-receptionist.jpg" alt={t(aiReceptionist.title)} className="w-full rounded-3xl border border-line" />
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <Section id="why" eyebrow={lang === "el" ? "ΓΙΑΤΙ ΕΜΕΙΣ" : "WHY US"} title={t(why.title)} sub={t(why.sub)}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className="card p-6">
              <div className="eyebrow text-lime">{it.tag}</div>
              <h3 className="mt-3 text-lg font-bold">{t(it.title)}</h3>
              <p className="mt-2 text-sm text-muted">{t(it.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" eyebrow={lang === "el" ? "ΠΩΣ ΔΟΥΛΕΥΟΥΜΕ" : "PROCESS"} title={t(process.title)} sub={t(process.sub)}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.05} className="card relative p-6">
              <div className="display text-5xl text-line">{s.n}</div>
              <h3 className="mt-3 text-lg font-bold">{t(s.title)}</h3>
              <p className="mt-2 text-sm text-muted">{t(s.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow={lang === "el" ? "ΥΠΗΡΕΣΙΕΣ" : "SERVICES"} title={t(services.title)} sub={t(services.sub)}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.04} className="card p-6 transition-colors hover:border-accent/40">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-xl text-accent2">{it.icon}</div>
              <h3 className="mt-4 text-lg font-bold">{t(it.title)}</h3>
              <p className="mt-2 text-sm text-muted">{t(it.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PRICING — one-off */}
      <Section id="pricing" eyebrow={lang === "el" ? "ΤΙΜΟΚΑΤΑΛΟΓΟΣ" : "PRICING"} title={t(pricingOneoff.title)} sub={t(pricingOneoff.sub)} bgImage="/ai-bg.jpg">
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingOneoff.tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 0.05} className={`card relative flex flex-col p-7 ${tier.badge ? "border-accent/60 glow" : ""}`}>
              {tier.badge && <span className="eyebrow absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-white">{t(tier.badge)}</span>}
              <h3 className="text-xl font-bold">{t(tier.name)}</h3>
              <p className="mt-1 text-sm text-muted">{t(tier.desc)}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-xs text-muted">{FROM}</span>
                <span className="display text-4xl">{tier.price}</span>
                <span className="mb-1 text-xs text-muted">{VAT}</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {tier.features.map((f, k) => (
                  <li key={k} className="flex gap-2 text-ink/85"><span className="text-lime">✓</span>{t(f)}</li>
                ))}
              </ul>
              <Link href="/contact" className={`mt-6 rounded-full py-3 text-center font-semibold ${tier.badge ? "bg-accent text-white hover:bg-accent2" : "border border-line text-ink hover:border-accent/50"}`}>{t(hero.cta1)}</Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted">{t(pricingOneoff.vatNote)}</p>

        {/* monthly */}
        <div className="mt-16">
          <Reveal className="text-center">
            <h3 className="display text-3xl sm:text-4xl">{t(pricingMonthly.title)}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">{t(pricingMonthly.sub)}</p>
          </Reveal>
          {pricingMonthly.groups.map((g, gi) => (
            <div key={gi} className="mt-10">
              <div className="eyebrow mb-4 text-accent2">{t(g.name)}</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {g.plans.map((p, pi) => (
                  <Reveal key={pi} delay={pi * 0.04} className={`card flex flex-col p-6 ${p.badge ? "border-accent/50" : ""}`}>
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">{t(p.name)}</h4>
                      {p.badge && <span className="eyebrow rounded-full bg-accent/20 px-2 py-0.5 text-accent2">{t(p.badge)}</span>}
                    </div>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="display text-3xl">{p.price}</span>
                      <span className="mb-1 text-xs text-muted">{PERMO} {VAT}</span>
                    </div>
                    <ul className="mt-4 flex-1 space-y-2 text-[13px]">
                      {p.features.map((f, k) => (
                        <li key={k} className="flex gap-2 text-ink/80"><span className="text-lime">✓</span>{t(f)}</li>
                      ))}
                    </ul>
                    {p.note && <p className="mt-3 text-[11px] text-muted">{t(p.note)}</p>}
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INCLUDED */}
      <Section id="included" eyebrow={lang === "el" ? "ΠΕΡΙΛΑΜΒΑΝΟΝΤΑΙ" : "INCLUDED"} title={t(included.title)}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {included.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.03} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime/20 text-sm text-lime">✓</span>
              <span className="text-sm text-ink/90">{t(it)}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title={lang === "el" ? "Συχνές ερωτήσεις" : "Frequently asked"}>
        <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line">
          {faq.map((f, i) => (
            <details key={i} className="group bg-surface">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-medium marker:content-none">
                {t(f.q)}<span className="text-accent2 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-muted">{t(f.a)}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="px-4 py-20 lg:px-6">
        <Reveal className="glow relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-surface2 to-surface px-6 py-16 text-center">
          <div aria-hidden className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ai-bg.jpg" alt="" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-br from-surface2/85 to-surface/90" />
          </div>
          <h2 className="display relative mx-auto max-w-2xl text-3xl sm:text-5xl">{t(cta.title)}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">{t(cta.sub)}</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-accent px-7 py-3.5 font-semibold text-white hover:bg-accent2">{t(cta.button)}</Link>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-7 py-3.5 font-semibold text-ink hover:border-accent/50">WhatsApp</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function Section({ id, eyebrow, title, sub, children, bgImage }: { id: string; eyebrow: string; title: string; sub?: string; children: React.ReactNode; bgImage?: string }) {
  return (
    <section id={id} className="relative scroll-mt-20 overflow-hidden px-4 py-16 lg:px-6">
      {bgImage && (
        <div aria-hidden className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bgImage} alt="" className="h-full w-full object-cover opacity-[0.13]" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
        </div>
      )}
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 max-w-3xl">
          <div className="eyebrow text-accent2">{eyebrow}</div>
          <h2 className="display mt-3 text-3xl sm:text-5xl">{title}</h2>
          {sub && <p className="mt-3 text-muted">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
