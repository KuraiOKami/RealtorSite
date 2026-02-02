const services = [
  {
    icon: "🏡",
    title: "Buy a Home",
    description:
      "From your first home to your forever home, I'll guide you through every step of the buying process across Florida.",
  },
  {
    icon: "💰",
    title: "Sell Your Home",
    description:
      "Strategic pricing, professional marketing, and skilled negotiation to get you the best return on your investment.",
  },
  {
    icon: "📊",
    title: "Market Analysis",
    description:
      "Data-driven insights on property values, market trends, and neighborhood comparisons to inform your decisions.",
  },
  {
    icon: "🚚",
    title: "Relocation Help",
    description:
      "Moving to Florida? I'll help you find the right community, school district, and home — no matter where in the state.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            What I Offer
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Services
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
