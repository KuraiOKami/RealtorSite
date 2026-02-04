"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ onContact }: { onContact: () => void }) {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-gold">IM</span>
          <span className="hidden text-sm font-medium text-white/90 sm:inline">
            Ivan Martinez{" "}
            <span className="text-white/50">| La Rosa Realty</span>
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <LanguageToggle />
          <Link
            href="/about"
            className="hidden text-sm text-white/70 transition hover:text-white md:inline"
          >
            {t("nav.about")}
          </Link>
          <a
            href="#services"
            className="hidden text-sm text-white/70 transition hover:text-white md:inline"
          >
            {t("nav.services")}
          </a>
          <Link
            href="/home-value"
            className="hidden text-sm text-white/70 transition hover:text-white md:inline"
          >
            {t("nav.homeValue")}
          </Link>
          <Link
            href="/first-time-buyer"
            className="hidden text-sm text-white/70 transition hover:text-white lg:inline"
          >
            {t("nav.firstTime")}
          </Link>
          <button
            onClick={onContact}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light"
          >
            {t("nav.contact")}
          </button>
        </div>
      </div>
    </nav>
  );
}
