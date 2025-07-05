'use client';
import React from 'react';

export default function About() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Dr. Serena Blake</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in <span className="font-semibold text-indigo-600">Tamil Nadu, India</span>, with eight years of experience and over 500 client sessions. She is deeply committed to your mental well-being.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Blending cognitive-behavioral therapy, mindfulness, and compassionate care, she helps you overcome anxiety, rebuild relationships, and heal from trauma in a safe, empowering space — whether in person or online.
        </p>
      </div>
    </section>
  );
}
