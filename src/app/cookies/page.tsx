"use client";

import LegalPage from "@/components/LegalPage";
import { legal } from "@/lib/content";

export default function Cookies() {
  return <LegalPage doc={legal.cookies} />;
}
