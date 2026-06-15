import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd, websiteLd, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin", "greek"], variable: "--font-inter", display: "swap" });

const TITLE = "Kairos — Ιστοσελίδες, AI Receptionist & Automations";
const DESC =
  "Custom ιστοσελίδες & e-shops, AI receptionist που απαντά 24/7 και αυτοματισμοί για την επιχείρησή σου. Παράδοση σε 3–7 μέρες. Marketing site από €399, Custom CMS από €799, E-shop από €999.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${TITLE} | Καιρός να εκσυγχρονίσεις την επιχείρησή σου`, template: "%s · Kairos" },
  description: DESC,
  applicationName: "Kairos",
  alternates: { canonical: "/" },
  keywords: ["κατασκευή ιστοσελίδων", "e-shop", "AI receptionist", "AI τηλεφωνητής", "αυτοματισμοί επιχειρήσεων", "web design Ελλάδα", "Kairos"],
  openGraph: { type: "website", siteName: "Kairos", locale: "el_GR", url: SITE_URL, title: TITLE, description: DESC },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={inter.variable}>
      <body>
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
        <LangProvider>
          <Nav />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
