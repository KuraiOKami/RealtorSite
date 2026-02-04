"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function HomeValuePage() {
  const [submitted, setSubmitted] = useState(false);

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
          <Link
            href="/#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light"
          >
            Contact Me
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
              For Sellers
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              What&rsquo;s Your Home{" "}
              <span className="text-gold">Really Worth?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Get a professional Comparative Market Analysis (CMA) &mdash; the
              same tool real estate professionals use to price homes accurately.
              Free, no obligation, delivered within 24 hours.
            </p>
            <a
              href="#get-cma"
              className="mt-8 inline-block rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-gold-light"
            >
              Get My Free CMA
            </a>
          </div>
        </section>

        {/* What is a CMA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                Why It Matters
              </p>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                What is a CMA?
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-lg leading-relaxed text-white/70">
                  A <strong className="text-white">Comparative Market Analysis</strong> (CMA)
                  is a detailed report that estimates your home&rsquo;s value based on
                  recently sold properties in your area that are similar to yours.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Unlike automated online estimates (like Zillow&rsquo;s Zestimate),
                  a CMA is prepared by a local real estate professional who knows
                  your neighborhood, understands market trends, and can account for
                  unique features that algorithms miss.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border border-white/10 bg-navy-light/50 p-6">
                  <h3 className="mb-2 font-heading text-lg font-bold text-gold">
                    Accurate Pricing
                  </h3>
                  <p className="text-sm text-white/60">
                    Homes priced right sell faster and for more money. Overpriced
                    homes sit on the market; underpriced homes leave money on the table.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-navy-light/50 p-6">
                  <h3 className="mb-2 font-heading text-lg font-bold text-gold">
                    Negotiation Power
                  </h3>
                  <p className="text-sm text-white/60">
                    A CMA gives you data-backed confidence when negotiating with
                    buyers, showing exactly how your price compares to the market.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-navy-light/50 p-6">
                  <h3 className="mb-2 font-heading text-lg font-bold text-gold">
                    Market Insight
                  </h3>
                  <p className="text-sm text-white/60">
                    Understand whether it&rsquo;s a buyer&rsquo;s or seller&rsquo;s
                    market in your specific neighborhood, and time your sale accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                Simple Process
              </p>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                How It Works
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-2xl font-bold text-gold">
                  1
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">
                  Share Your Info
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Fill out the form below with your property address and basic
                  details. Takes less than 2 minutes.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-2xl font-bold text-gold">
                  2
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">
                  I Analyze the Market
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  I research recent sales, active listings, and market conditions
                  in your area to build your personalized CMA.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-2xl font-bold text-gold">
                  3
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">
                  Get Your Report
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Within 24 hours, you&rsquo;ll receive a detailed report with
                  your estimated home value and comparable sales data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CMA Form */}
        <section id="get-cma" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Copy */}
              <div className="flex flex-col justify-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                  Free &amp; No Obligation
                </p>
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  Request Your CMA
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  Ready to find out what your home is worth? Fill out the form
                  and I&rsquo;ll send you a comprehensive market analysis within
                  24 hours.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">100% free, no strings attached</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">No home visit required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">Delivered within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold">&#10003;</span>
                    <span className="text-white/70">Based on real MLS data</span>
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
                        Request Received!
                      </h3>
                      <p className="mt-2 text-white/60">
                        I&rsquo;ll send your CMA within 24 hours.
                      </p>
                      <Link
                        href="/"
                        className="mt-6 inline-block text-sm text-gold underline underline-offset-4 transition hover:text-gold-light"
                      >
                        Back to Home
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h3 className="mb-1 font-heading text-xl font-bold">
                        Get Your Free CMA
                      </h3>
                      <p className="mb-6 text-sm text-white/50">
                        Tell me about your property.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="hidden" name="form-name" value="home-value" />
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Full name"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                        />
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Email address"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                        />
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Phone number"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                        />
                        <input
                          name="address"
                          type="text"
                          required
                          placeholder="Property address"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            name="bedrooms"
                            type="number"
                            min="0"
                            placeholder="Bedrooms"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                          />
                          <input
                            name="bathrooms"
                            type="number"
                            min="0"
                            step="0.5"
                            placeholder="Bathrooms"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                          />
                        </div>
                        <textarea
                          name="notes"
                          rows={3}
                          placeholder="Any recent updates or special features? (optional)"
                          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold"
                        />
                        <button
                          type="submit"
                          className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
                        >
                          Get My Free CMA
                        </button>
                      </form>
                    </>
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
            &copy; {new Date().getFullYear()} imrealtor.homes &mdash; All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
