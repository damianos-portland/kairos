import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Cookies",
  description: "Πώς ο ιστότοπος χρησιμοποιεί cookies και τοπική αποθήκευση.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
