"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "🏡",
      title: t("services.buy"),
      description: t("services.buyDesc"),
    },
    {
      icon: "💰",
      title: t("services.sell"),
      description: t("services.sellDesc"),
    },
    {
      icon: "📊",
      title: t("services.market"),
      description: t("services.marketDesc"),
    },
    {
      icon: "🚚",
      title: t("services.relocation"),
      description: t("services.relocationDesc"),
    },
  ];

  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            {t("services.label")}
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-navy-light/50 p-8 transition hover:border-gold/30 hover:bg-navy-light"
            >
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h3 className="mb-2 font-heading text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
