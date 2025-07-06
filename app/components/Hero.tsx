'use client';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
  
        <div className="flex justify-center">
          <Image
  src="/doctor.jpg"
  alt="Dr. Serena Blake"
  width={400}
  height={400}
  className="rounded-lg shadow-md object-cover"
  unoptimized 
/>
        </div>


        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Feel Better. Live Brighter.
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-600 mb-8">
            Supportive, compassionate therapy with Dr. Serena Blake.
          </h2>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Book a Free Consult
          </a>
        </div>
      </div>
    </section>
  );
}
