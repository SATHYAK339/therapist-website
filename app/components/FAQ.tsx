'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answers: [
      'No, Dr. Blake does not accept insurance directly.',
      'However, a superbill can be provided for self-submission to your provider.',
      'Many clients successfully receive partial reimbursement using this method.',
    ],
  },
  {
    question: 'Are online sessions available?',
    answers: [
      'Yes, online sessions are available via secure Zoom.',
      'Virtual therapy provides the same level of care as in-person.',
      'It offers more flexibility and comfort from your own space.',
    ],
  },
  {
    question: 'What is your cancellation policy?',
    answers: [
      'Appointments must be canceled at least 24 hours in advance.',
      'Late cancellations may be subject to a fee.',
      'Rescheduling is possible depending on availability.',
    ],
  },
  {
    question: 'How do I know if therapy is right for me?',
    answers: [
      'If you’re feeling overwhelmed, anxious, or stuck, therapy can help.',
      'A free consultation can clarify if this is the right fit for your goals.',
      'Therapy is for anyone looking to grow emotionally and mentally.',
    ],
  },
  {
    question: 'Is what I share in therapy confidential?',
    answers: [
      'Yes, confidentiality is a top priority.',
      'Everything discussed remains private, except in rare legal or safety exceptions.',
      'Your comfort and trust are always respected.',
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 focus:outline-none hover:bg-indigo-50"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaMinus className="text-indigo-600" /> : <FaPlus className="text-indigo-600" />}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600">
                  <ul className="list-disc ml-5 space-y-2">
                    {faq.answers.map((answer, i) => (
                      <li key={i}>{answer}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
