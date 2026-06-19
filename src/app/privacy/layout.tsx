import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description: "Πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σου δεδομένα — σύμφωνα με τον GDPR.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
