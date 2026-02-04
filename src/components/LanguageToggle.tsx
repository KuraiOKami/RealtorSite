"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/40 hover:text-white"
    >
      <span className={lang === "en" ? "text-gold" : ""}>EN</span>
      <span className="text-white/30">/</span>
      <span className={lang === "es" ? "text-gold" : ""}>ES</span>
    </button>
  );
}
