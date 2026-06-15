# Kairos

Marketing site for **Kairos (kAIros)** — an AI web & automation agency: custom
websites & e-shops, an **AI receptionist** that answers 24/7, and business
automations. Bilingual (Ελληνικά / English), SEO-ready.

> **Καιρός να εκσυγχρονίσεις την επιχείρησή σου** — Time to modernize your business.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

No env vars are required to run locally.

---

## Configuration

| Env | Default | Purpose |
|-----|---------|---------|
| `SITE_URL` | `https://kairos.gr` | Your live domain — drives canonical URLs, `sitemap.xml`, `robots.txt`, OpenGraph and JSON-LD. Set it on your host once the domain is connected. |

---

## Editing content

Everything lives in **`src/lib/content.ts`** — all copy is bilingual (`{ el, en }`):

- **`BRAND`** — name + contact (email, phone, WhatsApp). *(currently: kairos4ai@gmail.com · +30 697 250 4965)*
- `hero`, `stats`, `why`, `process`, `services`, `aiReceptionist`
- `pricingOneoff` (Marketing €399 · Custom CMS €799 · E-shop €999, +VAT) and `pricingMonthly`
- `included`, `faq`, `cta`, `contactPage`, `footer`

Brand assets in **`public/`**: `logo.png` (kAIros wordmark), `ai-hero.jpg`,
`ai-receptionist.jpg`, `ai-bg.jpg`. Favicon: `src/app/icon.svg`. Social share
image: `src/app/opengraph-image.jpg` (+ `twitter-image.jpg`).

---

## Deploy (Vercel)

It's a static-friendly Next.js app — no database or persistent disk needed.

1. **vercel.com → Add New → Project →** import this repo. Framework auto-detects Next.js → **Deploy**.
2. **Settings → Domains** → add your domain and follow the DNS records.
3. **Settings → Environment Variables** → add `SITE_URL=https://yourdomain.gr` → **redeploy**.

(Render / Railway / Netlify work too — same build/start commands.)

---

## SEO

**On-site (done in the code):**
- `robots.txt` + `sitemap.xml` (Next metadata routes)
- JSON-LD: `ProfessionalService`, `WebSite`, and **`FAQPage`** (eligible for rich snippets)
- Per-page metadata, title template, **OpenGraph + Twitter cards**, canonical, `lang`, alt text

**Off-site (do these once live — the real ranking levers):**
1. **Google Business Profile** — create it (category "Σχεδιαστής ιστοσελίδων", service-area = your regions), verify, fill 100%, and collect **reviews**. Biggest local win.
2. **Google Search Console** — add the domain, **submit `sitemap.xml`**, Request Indexing. Repeat in Bing Webmaster Tools.
3. **Citations & links** — list in Greek directories (Vrisko, Χρυσός Οδηγός, 11888) + agency lists (Clutch/GoodFirms), create Instagram/Facebook/LinkedIn, and add a **"Site by kAIros ↗"** credit in every client site's footer (compounding backlinks).

---

## Project structure

```
src/
  app/
    layout.tsx              Root layout, metadata, global JSON-LD, fonts
    page.tsx                Home (hero, AI receptionist, why, process, services, pricing, FAQ, CTA)
    contact/page.tsx        Contact form (+ layout.tsx for metadata)
    robots.ts · sitemap.ts  SEO routes
    icon.svg · opengraph-image.jpg · twitter-image.jpg
  components/               Nav, Footer, Reveal, JsonLd
  lib/
    i18n.tsx                Bilingual provider + useT()/useLang() + EL/EN toggle
    content.ts              All bilingual content + brand/contact
    seo.ts                  SITE_URL + JSON-LD builders
```
