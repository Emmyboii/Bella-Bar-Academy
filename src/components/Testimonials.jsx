import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial1 from '../Images/Testimonial1.png';
import Testimonial2 from '../Images/Testimonial2.png';
import Testimonial3 from '../Images/Testimonial3.png';
import Testimonial4 from '../Images/Testimonial4.png';

const testimonials = [
  {
    // name: 'Aisha K.',
    // text: 'Before the Academy, I was stuck in analysis paralysis. Now, I’ve launched my online brand and earned my first 6-figure month!',
    image: Testimonial1,
  },
  {
    // name: 'David M.',
    // text: 'Bella’s coaching helped me refine my pitch and land high-ticket clients. She doesn’t just teach business—she builds leaders.',
    image: Testimonial2,
  },
  {
    // name: 'Tolu A.',
    // text: 'I’ve taken a few courses, but this one changed everything. The mindset shift alone was worth the entire program.',
    image: Testimonial3,
  },
  {
    // name: 'Kemi D.',
    // text: 'From clueless to confident! I now run a profitable brand and have a clear growth strategy. Thank you, Bella!',
    image: Testimonial4
  },
  // {
  //   // name: 'James B.',
  //   // text: 'This Academy is the blueprint every entrepreneur needs. Bella’s mentorship is direct, compassionate, and powerful.',
  //   image: 'https://randomuser.me/api/portraits/men/52.jpg',
  // },
  // {
  //   // name: 'Chinwe O.',
  //   // text: 'I joined with doubt but left with direction. I launched a business within 4 weeks of joining. Best decision I made.',
  //   image: 'https://randomuser.me/api/portraits/women/72.jpg',
  // },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
      {testimonials.map((t, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto rounded-lg mb-4 object-cover"
          />
          {/* <p className="text-gray-600 italic text-sm md:text-base">"{t.text}"</p> */}
          {/* <h4 className="mt-4 font-semibold text-indigo-700 text-sm md:text-base">– {t.name}</h4> */}
        </div>
      ))}
    </div>
  );
}
