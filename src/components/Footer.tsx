export default function Footer() {
  return (
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
  );
}
