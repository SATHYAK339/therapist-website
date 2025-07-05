'use client';

import React from 'react';

export default function Contact() {
  const handleRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 100); 
  };

  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-10">
          Ready to begin your healing journey? Send a message and we’ll get back to you within 24 hours.
        </p>

        <form
          action="https://formspree.io/f/myzjaejq"
          method="POST"
          onSubmit={handleRedirect}
          className="grid gap-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
