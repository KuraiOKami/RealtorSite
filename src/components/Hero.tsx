"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero({
  showForm,
  setShowForm,
}: {
  showForm: boolean;
  setShowForm: (v: boolean) => void;
}) {
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
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
            {t("hero.tagline")}
          </p>

          {/* Big bold name */}
          <h1 className="font-heading text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight">
            {t("hero.firstName")}
            <br />
            <span className="text-gold">{t("hero.lastName")}</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50 sm:text-xl">
            {t("hero.subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-gold-light"
            >
              {t("hero.cta")}
            </button>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white/70 transition hover:border-white/40 hover:text-white"
            >
              {t("hero.learnMore")}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Contact form modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowForm(false);
          }}
        >
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-navy-light p-8">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-2xl text-white/40 transition hover:text-white"
            >
              &times;
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mb-4 text-5xl text-gold">&#10003;</div>
                <h3 className="font-heading text-2xl font-bold text-gold">
                  {t("contact.thanks")}
                </h3>
                <p className="mt-2 text-white/60">
                  {t("contact.thanksMsg")}
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-1 font-heading text-2xl font-bold">
                  {t("contact.title")}
                </h2>
                <p className="mb-6 text-sm text-white/50">
                  {t("contact.subtitle")}
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
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
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={t("contact.message")}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
                  >
                    {t("contact.submit")}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
