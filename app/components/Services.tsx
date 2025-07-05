'use client';
import React from 'react';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Life can feel overwhelming but you don’t have to face it alone. With calm, practical techniques tailored just for you, we’ll work together to quiet your mind, ease anxiety, and bring balance back into your life. You deserve peace.',
    image: '/anxiety.jpg',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Every relationship has challenges —what matters is how we heal and grow through them. Whether you’re rebuilding trust or learning to communicate with more love, let’s create space for deeper connection and understanding.',
    image: '/relationship.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      'You are more than what happened to you. Healing is possible, and it begins with feeling safe and heard. Together, we’ll gently untangle past pain and build the resilience you need to thrive with strength and self-compassion.',
    image: '/trauma.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-indigo-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
