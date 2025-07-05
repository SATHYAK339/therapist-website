'use client';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-16 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-700">Dr. Serena Blake</h1>
      <ul className="flex gap-6 text-gray-700 font-medium text-sm">
        <li>
          <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </li> 
      </ul>
    </nav>
  );
}
