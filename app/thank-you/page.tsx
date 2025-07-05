'use client';

import React from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-green-50 px-6">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Thanks!</h1>
      <p className="text-lg text-gray-700 mb-8">The form was submitted successfully.</p>
      <Link
        href="/"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
      >
        Go back to Homepage
      </Link>
    </section>
  );
}
