'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-16 mt-10">
      <div className="max-w-6xl mx-auto flex justify-center items-center text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
