import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroImg2 from '../Images/Img13.jpeg';
import FAQ from '../components/FAQ';

export default function Academy() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="bg-black text-white">
      {/* Hero Section */}
      <section className="text-center relative">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="absolute z-20 w-full px-4 top-1/2 -translate-y-1/2 text-white">
          <h1
            className="text-[40px] md:text-[70px] font-bold text-[#f9a825] mb-4"
            data-aos="fade-down"
          >
            The Academy
          </h1>
          <h2 className="text-xl md:text-[28px] font-semibold mb-6" data-aos="fade-up">
            Why This Academy Exists
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" data-aos="fade-up">
            You’ve dreamed of starting or growing your business—but something always holds you back.
            This academy was created to help people like you turn your dream into reality, with the right plan, mindset, and support.
          </p>
        </div>
        <img
          src={HeroImg2}
          className="object-cover h-[60vh] md:h-[70vh] w-full"
          alt="Hero"
        />
      </section>

      {/* What You’ll Learn */}
      <div className="max-w-6xl mx-auto mb-16 p-6 md:p-16">
        <h3
          className="text-2xl md:text-3xl font-semibold text-center text-[#f9a825] mb-10"
          data-aos="zoom-in"
        >
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
              className="bg-[#1a1a1a] border border-[#333] p-6 rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h4 className="text-lg md:text-xl font-bold text-[#f9a825] mb-2">
                Session {i + 1}: {session.title}
              </h4>
              <p className="text-sm md:text-base text-gray-300">{session.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-[#0d0d0d] grid md:grid-cols-2 gap-8 mb-16 px-6 py-12 md:p-16">
        <div
          className="bg-[#1a1a1a] border-l-4 border-[#4caf50] p-6 rounded-lg shadow"
          data-aos="fade-right"
        >
          <h4 className="text-xl font-bold text-[#4caf50] mb-3">This Academy is for you if:</h4>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>You run a business and want more structure, visibility, and sales</li>
            <li>You have a dream but no idea how to start</li>
            <li>You’re ready to enter the digital business world with real tools</li>
            <li>You’re tired of watching from the sidelines</li>
          </ul>
        </div>
        <div
          className="bg-[#1a1a1a] border-l-4 border-[#ef5350] p-6 rounded-lg shadow"
          data-aos="fade-left"
        >
          <h4 className="text-xl font-bold text-[#ef5350] mb-3">It’s NOT for you if:</h4>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>You want instant results with no work</li>
            <li>You’re not ready to invest in your growth</li>
            <li>You prefer to stay in your comfort zone</li>
            <li>You settle for mediocrity</li>
          </ul>
        </div>
      </div>

      {/* What You Get */}
      <div
        className="max-w-4xl bg-[#1f1f1f] p-6 md:p-8 rounded-2xl shadow text-center mb-16 mx-auto mt-6 md:mt-16"
        data-aos="fade-up"
      >
        <h4 className="text-xl md:text-2xl font-bold text-[#f9a825] mb-6">What You Get</h4>
        <ul className="list-disc list-inside text-left text-gray-300 space-y-2 max-w-md mx-auto text-sm md:text-base">
          <li>7 transformational sessions</li>
          <li>Personal mentorship</li>
          <li>Business and marketing tools</li>
          <li>A supportive, driven community</li>
          <li>Action plans and accountability</li>
        </ul>
        <Link to="/signup">
          <button className="mt-8 bg-[#f9a825] text-black text-lg px-8 py-3 rounded-lg hover:bg-yellow-500 transition">
            I Want To Join The Academy
          </button>
        </Link>
      </div>

      {/* FAQ */}
      <hr className="h-[1.5px] bg-white/20 mx-6 md:mx-16" />
      <section className="px-6 py-12 md:p-16" data-aos="fade-up">
        <FAQ />
      </section>
    </section>
  );
}
