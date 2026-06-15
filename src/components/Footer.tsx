"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { BRAND, footer, services } from "@/lib/content";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-6">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="kAIros" className="h-7 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-muted">{t(footer.tagline)}</p>
        </div>
        <FooterCol title={t(footer.servicesTitle)} links={services.items.map((s) => ({ href: "#services", label: t(s.title) }))} />
        <FooterCol title={t(footer.companyTitle)} links={footer.company.map((c) => ({ href: c.href, label: t(c.label) }))} />
        <FooterCol title={t(footer.legalTitle)} links={footer.legal.map((c) => ({ href: c.href, label: t(c.label) }))} />
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted sm:flex-row lg:px-6">
          <span>© {new Date().getFullYear()} {BRAND.legal} · {BRAND.email}</span>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-ink">WhatsApp ↗</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="eyebrow mb-3 text-muted">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l, i) => (
          <li key={i}><Link href={l.href} className="text-ink/80 hover:text-accent2">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
