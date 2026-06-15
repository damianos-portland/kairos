"use client";

import Link from "next/link";
import { useLang, useT } from "@/lib/i18n";
import { BRAND, nav, hero } from "@/lib/content";

export default function Nav() {
  const t = useT();
  const { lang, setLang } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center" aria-label={BRAND.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="kAIros" className="h-9 w-auto sm:h-11" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-ink">{t(n.label)}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === "el" ? "en" : "el")} className="rounded-full border border-line px-2.5 py-1 text-xs font-bold text-muted hover:text-ink" aria-label="language">
            {lang === "el" ? "EN" : "ΕΛ"}
          </button>
          <Link href="/contact" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent2">
            {t(hero.cta1)}
          </Link>
        </div>
      </div>
    </header>
  );
}
