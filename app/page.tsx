'use client';

import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white font-sans">
      <Navbar />

      <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <Hero />
      </section>

      <section id="about" className="px-6 py-16 md:px-16 bg-indigo-50 dark:bg-gray-800">
        <About />
      </section>

      <section id="services" className="px-6 py-16 md:px-16 bg-white dark:bg-gray-900">
        <Services />
      </section>

      <section id="faq" className="px-6 py-16 md:px-16 bg-indigo-50 dark:bg-gray-800">
        <FAQ />
      </section>

      <section id="contact" className="px-6 py-16 md:px-16 bg-white dark:bg-gray-900">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
