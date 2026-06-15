"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "el" | "en";
export type LS = { el: string; en: string };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "el", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("el");
  useEffect(() => {
    const s = localStorage.getItem("lang");
    if (s === "en" || s === "el") setLang(s);
  }, []);
  const set = (l: Lang) => { setLang(l); localStorage.setItem("lang", l); document.documentElement.lang = l; };
  return <Ctx.Provider value={{ lang, setLang: set }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export function useT() {
  const { lang } = useLang();
  return (s: LS) => s[lang];
}
