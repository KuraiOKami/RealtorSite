"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function AboutPage() {
  const { t } = useLanguage();

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
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
              {t("aboutPage.tagline")}
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t("aboutPage.title")}{" "}
              <span className="text-gold">{t("aboutPage.titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              {t("aboutPage.intro")}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {t("aboutPage.story1")}
            </p>
            <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-gold/20 bg-gold/5 p-6 text-lg leading-relaxed text-white/80">
              {t("aboutPage.story2")}
            </p>
          </div>
        </section>

        {/* What I Believe */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                {t("aboutPage.believeLabel")}
              </p>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                {t("aboutPage.believeTitle")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F4B0;
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("aboutPage.believe1Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("aboutPage.believe1Desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F442;
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("aboutPage.believe2Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("aboutPage.believe2Desc")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-light/50 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F3E0;
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-gold">
                  {t("aboutPage.believe3Title")}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {t("aboutPage.believe3Desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Working With Me */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                {t("aboutPage.styleLabel")}
              </p>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                {t("aboutPage.styleTitle")}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-navy-light/50 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F45F;
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold">
                    {t("aboutPage.style1Title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t("aboutPage.style1Desc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-navy-light/50 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F5E3;
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold">
                    {t("aboutPage.style2Title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t("aboutPage.style2Desc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-navy-light/50 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F4F1;
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold">
                    {t("aboutPage.style3Title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t("aboutPage.style3Desc")}
                  </p>
                </div>
                </div>
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-navy-light/50 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                  &#x1F30E;
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold">
                    {t("aboutPage.style4Title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t("aboutPage.style4Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Real Estate */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-10 text-center md:p-16">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                {t("aboutPage.personalLabel")}
              </p>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                {t("aboutPage.personalTitle")}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                {t("aboutPage.personalDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {t("aboutPage.cta")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              {t("aboutPage.ctaDesc")}
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-gold-light"
            >
              {t("nav.contact")}
            </Link>
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
