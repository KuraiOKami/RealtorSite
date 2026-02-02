import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivan Martinez | Florida Realtor | IMRealtor.homes",
  description:
    "Ivan Martinez — La Rosa Realty. Helping you buy and sell homes across Florida. Serving Polk County and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Hidden form for Netlify deploy bot detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message" />
        </form>
        {children}
      </body>
    </html>
  );
}
