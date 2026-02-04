"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeValue() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as never).toString(),
    });
    setSubmitted(true);
  }

  return (
    <section id="home-value" className="relative overflow-hidden px-6 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              {t("homeValue.label")}
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
              {t("homeValue.title")}{" "}
              <span className="text-gold">{t("homeValue.titleHighlight")}</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              {t("homeValue.description")}
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <p className="font-heading text-2xl font-bold text-gold">{t("homeValue.free")}</p>
                <p className="text-sm text-white/50">{t("homeValue.noObligation")}</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-gold">{t("homeValue.response")}</p>
                <p className="text-sm text-white/50">{t("homeValue.responseTime")}</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-gold">{t("homeValue.cma")}</p>
                <p className="text-sm text-white/50">{t("homeValue.detailedReport")}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-navy-light/80 p-8 backdrop-blur">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mb-4 text-5xl text-gold">&#10003;</div>
                  <h3 className="font-heading text-2xl font-bold text-gold">
                    {t("homeValue.thanks")}
                  </h3>
                  <p className="mt-2 text-white/60">
                    {t("homeValue.thanksMsg")}
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-1 font-heading text-xl font-bold">
                    {t("homeValue.formTitle")}
                  </h3>
                  <p className="mb-6 text-sm text-white/50">
                    {t("homeValue.formSubtitle")}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="form-name" value="home-value" />
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t("contact.name")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t("contact.email")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder={t("contact.phone")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                    />
                    <input
                      name="address"
                      type="text"
                      required
                      placeholder={t("homeValue.address")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        name="bedrooms"
                        type="number"
                        min="0"
                        placeholder={t("homeValue.bedrooms")}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                      />
                      <input
                        name="bathrooms"
                        type="number"
                        min="0"
                        step="0.5"
                        placeholder={t("homeValue.bathrooms")}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                      />
                    </div>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder={t("homeValue.notes")}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
                    >
                      {t("homeValue.submit")}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
