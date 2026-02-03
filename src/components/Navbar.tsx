"use client";

export default function Navbar({ onContact }: { onContact: () => void }) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-gold">IM</span>
          <span className="hidden text-sm font-medium text-white/90 sm:inline">
            Ivan Martinez{" "}
            <span className="text-white/50">| La Rosa Realty</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="hidden text-sm text-white/70 transition hover:text-white md:inline"
          >
            About
          </a>
          <a
            href="#services"
            className="hidden text-sm text-white/70 transition hover:text-white md:inline"
          >
            Services
          </a>
          <a
            href="#home-value"
            className="hidden text-sm text-white/70 transition hover:text-white md:inline"
          >
            Home Value
          </a>
          <button
            onClick={onContact}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-light"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
