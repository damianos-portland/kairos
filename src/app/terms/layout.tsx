import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Όροι Χρήσης",
  description: "Οι όροι που διέπουν τη χρήση του ιστότοπου και τη συνεργασία μας.",
  alternates: { canonical: "/terms" },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
