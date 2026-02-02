export default function About() {
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
            About Me
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ivan Martinez
          </h2>
          <p className="mt-1 text-white/50">Realtor&reg; &middot; La Rosa Realty</p>
          <p className="mt-6 leading-relaxed text-white/70">
            I&rsquo;m a Florida-based realtor with deep roots in Polk County and
            a reach that extends across the entire state. My approach is
            simple: listen first, then deliver results. Whether you&rsquo;re a
            first-time buyer navigating the market or a seller looking for top
            dollar, I bring the local knowledge and statewide connections to
            make your real estate goals a reality.
          </p>
          <p className="mt-4 leading-relaxed text-white/70">
            I believe everyone deserves a place to call home &mdash; and I work
            tirelessly to make that happen for every client I serve.
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-heading text-3xl font-bold text-gold">FL</p>
              <p className="text-sm text-white/50">Statewide</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gold">Polk</p>
              <p className="text-sm text-white/50">Home County</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gold">100%</p>
              <p className="text-sm text-white/50">Client-First</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
