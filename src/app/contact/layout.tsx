import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: "Πες μας τι χρειάζεσαι — δωρεάν εκτίμηση σε 48 ώρες, καμία δέσμευση. ☎ +30 697 250 4965 · vc@upsell.ai",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
