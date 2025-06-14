import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroImg2 from '../Images/Img13.jpeg';
import FAQ from '../components/FAQ';

export default function Academy() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center relative">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute z-20 w-full px-4 top-1/2 -translate-y-1/2 text-white">
          <h1 className="text-[40px] md:text-[70px] font-bold text-indigo-500 mb-4" data-aos="fade-down">The Academy</h1>
          <h2 className="text-xl md:text-[28px] font-semibold mb-6" data-aos="fade-up">Why This Academy Exists</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" data-aos="fade-up">
            You’ve dreamed of starting or growing your business—but something always holds you back.
            This academy was created to help people like you turn your dream into reality, with the right plan, mindset, and support.
          </p>
        </div>
        <img src={HeroImg2} className="object-cover h-[60vh] md:h-[70vh] w-full" alt="Hero" />
      </section>

      {/* What You’ll Learn */}
      <div className="max-w-6xl mx-auto mb-16 p-6 md:p-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-indigo-600 mb-10" data-aos="zoom-in">
          What You’ll Learn Inside the Academy
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Mindset Reset', desc: 'Overcome fear and build the mindset of successful entrepreneurs.' },
            { title: 'Idea to Income', desc: 'Refine your business idea and discover how to turn it into real money.' },
            { title: 'Digital Strategy', desc: 'Build your online presence, pricing models, funnels, and audience targeting.' },
            { title: 'Social Media That Sells', desc: 'Learn influencer-level content, storytelling, and conversion techniques.' },
            { title: 'Mastering Sales', desc: 'Sell without being pushy. Use sales psychology to close high-quality clients.' },
            { title: 'Systems & Scale', desc: 'Structure your business to run with clarity and consistency—without burnout.' },
            { title: 'Bonus: Abundance Activation', desc: 'Cultivate an unstoppable mindset that attracts success.' },
          ].map((session, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h4 className="text-lg md:text-xl font-bold text-indigo-700 mb-2">
                Session {i + 1}: {session.title}
              </h4>
              <p className="text-sm md:text-base text-gray-700">{session.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-gray-50 grid md:grid-cols-2 gap-8 mb-16 px-6 py-12 md:p-16">
        <div
          className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow"
          data-aos="fade-right"
        >
          <h4 className="text-xl font-bold text-green-600 mb-3">This Academy is for you if:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>You run a business and want more structure, visibility, and sales</li>
            <li>You have a dream but no idea how to start</li>
            <li>You’re ready to enter the digital business world with real tools</li>
            <li>You’re tired of watching from the sidelines</li>
          </ul>
        </div>
        <div
          className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow"
          data-aos="fade-left"
        >
          <h4 className="text-xl font-bold text-red-600 mb-3">It’s NOT for you if:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>You want instant results with no work</li>
            <li>You’re not ready to invest in your growth</li>
            <li>You prefer to stay in your comfort zone</li>
            <li>You settle for mediocrity</li>
          </ul>
        </div>
      </div>

      {/* What You Get */}
      <div
        className="max-w-4xl bg-indigo-50 p-6 md:p-8 rounded-2xl shadow text-center mb-16 mx-auto mt-6 md:mt-16"
        data-aos="fade-up"
      >
        <h4 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6">What You Get</h4>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2 max-w-md mx-auto text-sm md:text-base">
          <li>7 transformational sessions</li>
          <li>Personal mentorship</li>
          <li>Business and marketing tools</li>
          <li>A supportive, driven community</li>
          <li>Action plans and accountability</li>
        </ul>
        <Link to="/signup">
          <button className="mt-8 bg-indigo-600 text-white text-lg px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
            I Want To Join The Academy
          </button>
        </Link>
      </div>

      {/* FAQ */}
      <hr className='h-[1.5px] bg-black/40 mx-6 md:mx-16' />
      <section className="px-6 py-12 md:p-16" data-aos="fade-up">
        <FAQ />
      </section>
    </section>
  );
}
