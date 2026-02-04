"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Photo placeholder */}
        <div className="flex items-center justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-2xl border border-white/10 bg-navy-light text-6xl text-gold">
            IM
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            {t("about.label")}
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            {t("about.name")}
          </h2>
          <p className="mt-1 text-white/50">{t("about.title")}</p>
          <p className="mt-6 leading-relaxed text-white/70">
            {t("about.bio1")}
          </p>
          <p className="mt-4 leading-relaxed text-white/70">
            {t("about.bio2")}
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-heading text-3xl font-bold text-gold">FL</p>
              <p className="text-sm text-white/50">{t("about.statewide")}</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gold">Polk</p>
              <p className="text-sm text-white/50">{t("about.homeCounty")}</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gold">100%</p>
              <p className="text-sm text-white/50">{t("about.clientFirst")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
