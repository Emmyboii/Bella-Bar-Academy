import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqs = [
  {
    question: 'Do I need to already have a business?',
    answer: 'No, you can be starting from scratch or scaling an existing business.',
  },
  {
    question: 'Is this only for women?',
    answer: 'No. The Academy is open to all, but it’s especially supportive for those ready to take full control of their future.',
  },
  {
    question: 'What if I’m scared or unsure?',
    answer: 'That’s exactly what we help with—breaking through fear and taking action with clarity.',
  },
  {
    question: 'Is this virtual or in person?',
    answer: '7 powerful in-person sessions.',
  },
  {
    question: 'What if I can’t make all the sessions?',
    answer: 'Let us know—we may have hybrid or makeup options.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 md:px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-800" data-aos="fade-up">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="border border-gray-200 rounded-xl shadow-sm bg-white transition"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none"
            >
              <span className="text-base md:text-lg font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-indigo-600 text-xl md:text-2xl" />
              ) : (
                <FiChevronDown className="text-indigo-600 text-xl md:text-2xl" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
