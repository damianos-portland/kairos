import { BRAND, pricingOneoff, faq, services } from "./content";

// Set SITE_URL to your real domain (env SITE_URL) once you have it.
export const SITE_URL = (process.env.SITE_URL || "https://kairos.gr").replace(/\/$/, "");
const phoneE164 = BRAND.phone.replace(/[^\d+]/g, "");

// Organization / local service — global, rendered on every page
export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#org`,
  name: BRAND.name,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  description: "Custom ιστοσελίδες & e-shops, AI receptionist που απαντά 24/7 και αυτοματισμοί για επιχειρήσεις. Παράδοση σε 3–7 μέρες.",
  telephone: phoneE164,
  email: BRAND.email,
  priceRange: "€€",
  areaServed: { "@type": "Country", name: "Greece" },
  address: { "@type": "PostalAddress", addressCountry: "GR" },
  knowsLanguage: ["el", "en"],
  makesOffer: pricingOneoff.tiers.map((t) => ({
    "@type": "Offer",
    priceCurrency: "EUR",
    price: t.price.replace(/[^\d]/g, ""),
    itemOffered: { "@type": "Service", name: t.name.en },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title.en } })),
  },
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BRAND.name,
  url: SITE_URL,
  inLanguage: "el",
  publisher: { "@id": `${SITE_URL}/#org` },
});

// FAQ rich-snippet schema (Greek = the default rendered content)
export const faqLd = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q.el,
    acceptedAnswer: { "@type": "Answer", text: f.a.el },
  })),
});
