"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function FirstTimeBuyerPage() {
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
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-gold">IM</span>
            <span className="hidden text-sm font-medium text-white/90 sm:inline">
              Ivan Martinez{" "}
              <span className="text-white/50">| La Rosa Realty</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="/"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
              {t("ftb.tagline")}
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t("ftb.title")}{" "}
              <span className="text-gold">{t("ftb.titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {t("ftb.subtitle")}
            </p>
            <a
              href="#eligibility-form"
              className="mt-8 inline-block rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-gold-light"
            >
              {t("ftb.cta")}
            </a>
          </div>
        </section>

        {/* What are these programs */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                {t("ftb.whatLabel")}
              </p>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                {t("ftb.whatTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                {t("ftb.whatDesc")}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("ftb.program1Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("ftb.program1Desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("ftb.program2Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("ftb.program2Desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("ftb.program3Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("ftb.program3Desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("ftb.program4Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("ftb.program4Desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                  {t("ftb.eligLabel")}
                </p>
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  {t("ftb.eligTitle")}
                </h2>
                <p className="mt-4 text-white/60">
                  {t("ftb.eligDesc")}
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    t("ftb.elig1"),
                    t("ftb.elig2"),
                    t("ftb.elig3"),
                    t("ftb.elig4"),
                    t("ftb.elig5"),
                    t("ftb.elig6"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-gold">&#10003;</span>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-4 text-sm text-white/70">
                  {t("ftb.eligNote")}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                  {t("ftb.howLabel")}
                </p>
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  {t("ftb.howTitle")}
                </h2>
                <div className="mt-8 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-lg font-bold text-gold">
                      1
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold">
                        {t("ftb.step1Title")}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {t("ftb.step1Desc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-lg font-bold text-gold">
                      2
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold">
                        {t("ftb.step2Title")}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {t("ftb.step2Desc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-lg font-bold text-gold">
                      3
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold">
                        {t("ftb.step3Title")}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {t("ftb.step3Desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="eligibility-form" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col justify-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                  {t("ftb.formLabel")}
                </p>
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  {t("ftb.formTitle")}
                </h2>
                <p className="mt-4 text-white/60">
                  {t("ftb.formSubtitle")}
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">100% free consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">No obligation to proceed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">Connected to trusted lenders</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-navy-light/80 p-8 backdrop-blur">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mb-4 text-5xl text-gold">&#10003;</div>
                      <h3 className="font-heading text-2xl font-bold text-gold">
                        {t("ftb.thanks")}
                      </h3>
                      <p className="mt-2 text-white/60">
                        {t("ftb.thanksMsg")}
                      </p>
                      <Link
                        href="/"
                        className="mt-6 inline-block text-sm text-gold underline underline-offset-4 transition hover:text-gold-light"
                      >
                        Back to Home
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="form-name" value="first-time-buyer" />
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
                        name="income"
                        type="text"
                        required
                        placeholder={t("ftb.income")}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                      />
                      <select
                        name="credit"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-navy-light">
                          {t("ftb.credit")}
                        </option>
                        <option value="740+" className="bg-navy-light">{t("ftb.credit1")}</option>
                        <option value="700-739" className="bg-navy-light">{t("ftb.credit2")}</option>
                        <option value="640-699" className="bg-navy-light">{t("ftb.credit3")}</option>
                        <option value="below-640" className="bg-navy-light">{t("ftb.credit4")}</option>
                        <option value="not-sure" className="bg-navy-light">{t("ftb.credit5")}</option>
                      </select>
                      <select
                        name="employment"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-navy-light">
                          {t("ftb.employment")}
                        </option>
                        <option value="w2" className="bg-navy-light">{t("ftb.emp1")}</option>
                        <option value="self-employed" className="bg-navy-light">{t("ftb.emp2")}</option>
                        <option value="1099" className="bg-navy-light">{t("ftb.emp3")}</option>
                        <option value="other" className="bg-navy-light">{t("ftb.emp4")}</option>
                      </select>
                      <input
                        name="county"
                        type="text"
                        required
                        placeholder={t("ftb.county")}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                      />
                      <textarea
                        name="notes"
                        rows={2}
                        placeholder={t("ftb.notes")}
                        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                      />
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
                      >
                        {t("ftb.submit")}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-lg font-bold text-gold">
            Ivan Martinez
          </p>
          <p className="text-sm text-white/50">
            La Rosa Realty &middot; Polk County &amp; All of Florida
          </p>
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} imrealtor.homes &mdash; {t("footer.rights")}
          </p>
        </div>
      </footer>
    </>
  );
}
