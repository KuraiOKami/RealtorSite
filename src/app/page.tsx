"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HomeValue from "@/components/HomeValue";
import Footer from "@/components/Footer";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar onContact={() => setShowForm(true)} />
      <main>
        <Hero showForm={showForm} setShowForm={setShowForm} />
        <About />
        <Services />
        <HomeValue />
      </main>
      <Footer />
    </>
  );
}
