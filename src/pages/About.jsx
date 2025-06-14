import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../Images/Img12.jpg';
import Bella from '../Images/img7_1.png';
import Logo from '../Images/Logo.jpg'; // Update the path to your logo image
import FAQ from '../components/FAQ';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative text-center overflow-hidden" data-aos="fade">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-transparent z-10 opacity-90"></div>
        <div className="w-full absolute py-8 sm:py-16 z-20 top-1/2 -translate-y-1/2 px-4 flex flex-col items-center justify-center">
          <img
            src={Logo}
            alt="Bella Bar Lawal Logo"
            className="w-[180px] sm:w-[240px] mb-4"
            data-aos="fade-down"
          />
          <p className="text-white text-[21px] font-semibold sm:text-[35px]">
            Your Guide to Business Success
          </p>
        </div>
        <img
          src={Hero}
          alt="Bella Bar Lawal"
          className="w-full h-[60vh] object-cover rounded"
        />
      </div>

      {/* About Content Section */}
      <div className="py-20 px-4 sm:px-8 bg-gray-900 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="font-bold text-2xl sm:text-3xl text-center text-[#f9a825] mb-4">ABOUT</h1>
            {[
              "From humble beginnings to building thriving businesses, my journey proves that with the right mindset, strategies, and relentless action, anyone can build the life and brand they’ve always dreamed of.",
              "I’m Bella Bar Lawal — entrepreneur, business strategist, and mentor. I built multiple successful businesses from scratch after starting with nothing but grit, vision, and a decision to change my life.",
              "Raised by a single mom in a lower-income home, I learned early that success doesn’t wait — you build it. Over 14 years, I mastered sales, branding, and digital marketing, turning failure into fuel and strategy into freedom.",
              "Today, I run a premium event and flower business, manage high-performing Airbnb properties, and help ambitious individuals turn passion into profit, break through fear, and build businesses that create real wealth and impact.",
              "If you’re ready to stop dreaming and start building — I’m here to guide you.",
            ].map((text, i) => (
              <p key={i} className="text-base sm:text-lg mb-4 leading-relaxed">{text}</p>
            ))}
          </div>
          <img
            src={Bella}
            className="w-full md:w-[500px] h-auto rounded-lg object-cover shadow-lg"
            alt="Bella Bar Lawal"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-br from-[#111] via-black to-[#1a1a1a]" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#f9a825] mb-12">Why I Do This</h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">
          <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-md hover:shadow-lg transition" data-aos="zoom-in-up">
            <h3 className="text-2xl font-semibold text-[#f9a825] mb-4">🚀 Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower aspiring and established entrepreneurs with the strategy, clarity, and mentorship needed to build profitable, purpose-driven businesses—transforming dreams into action, and ideas into income.
              <br /><br />
              We guide individuals step-by-step to launch or scale their business through hands-on coaching, practical tools, and proven systems—while helping them overcome fear, gain confidence, and achieve sustainable success.
            </p>
          </div>

          <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-md hover:shadow-lg transition" data-aos="zoom-in-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-[#f9a825] mb-4">🌟 Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To create a world where driven individuals—regardless of background—can unlock their full potential, achieve financial freedom, and build impactful businesses that change their lives and communities.
              <br /><br />
              We envision a generation of entrepreneurs who stop settling for “someday” and start building a life of freedom, influence, and fulfillment today—with clarity, purpose, and bold action.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="px-4 py-16 bg-[#1a1a1a] text-white rounded-xl">
        <h2 className="text-[28px] md:text-[35px] text-center font-bold mb-4" data-aos="zoom-in">Why Work With Me?</h2>
        <p data-aos="fade-up" className="text-[18px] md:text-[23px] text-center mb-8">
          Many entrepreneurs focus only on their product—but without marketing, sales, <br className="hidden md:block" /> and structure, even the best ideas fail. That’s where I come in.
        </p>
        <div className="grid gap-6 md:grid-cols-2 max-w-[950px] mx-auto">
          {["Master the art of sales", "Build a standout brand", "Leverage social media for visibility and income", "Turn passion into profit with proven systems"].map((item, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 200} key={index} className="flex items-center gap-4 p-4 bg-[#2a2a2a] shadow rounded-2xl text-[#f9a825]">
              <span className="text-2xl">✔️</span>
              <p className="text-[#f9a825] text-base md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-8 py-16 bg-black" data-aos="fade-up">
        <FAQ />
      </section>
    </section>
  );
}
