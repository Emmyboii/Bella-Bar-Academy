import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Bella from '../Images/Img4.jpg';
import Bella2 from '../Images/Img1_1.jpg';
import HeroImg2 from '../Images/Img7_3.png';
import Academy from '../Images/Img10.png';
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreed: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const jotformURL = 'https://submit.jotform.com/submit/251640780961561/';

    const form = new FormData();
    form.append('q3_fullName3[first]', formData.name);
    form.append('q6_email6', formData.email);
    form.append('q5_phoneNumber5[full]', formData.phone);

    try {
      await fetch(jotformURL, {
        method: 'POST',
        body: form,
        mode: 'no-cors',
      });

      toast.success('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', agreed: false });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="pb- mx-auto bg-black text-white">
      <section className="relative min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#222] to-[#ffc107] z-0"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto text-white pt-[110px]" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Roadmap to a <br /> 6‑Figure Income
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Turn your quiet dream into a bold reality—and wake up every day excited about your life.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-[#f9a825] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            I’m Ready to Start
          </Link>
        </div>

        <div className="relative mx-auto pl-14 z-20 max-w-[450px] md:max-w-[600px]">
          <img src={HeroImg2} alt="Hero" className="w-full h-auto" />
        </div>
      </section>

      {/* About Snippet */}
      <section className="px-4 md:px-20 py-16 bg-gray-900">
        <h1 className='font-bold text-[28px] md:text-[35px] text-center' data-aos="fade-up">ABOUT BELLA BAR LAWAL</h1>
        <div className='flex flex-col md:flex-row gap-12 mt-7'>
          <div className='w-full mt-6 md:mt-20 text-[18px] md:text-[22px]'>
            <p className="text-gray-300" data-aos="fade-right">
              From humble beginnings to thriving businesses, Bella’s journey proves that with the right mindset and strategy, anything is possible. She turned failure into fuel and built multiple successful brands from scratch.
              I’m Bella Bar Lawal — entrepreneur, business strategist, and mentor. I built multiple successful businesses from scratch after starting with nothing but grit, vision, and a decision to change my life.
              Today, I run a premium event and flower business, manage high-performing Airbnb properties, and help ambitious individuals turn passion into profit, break through fear, and build businesses that create real wealth and impact.
            </p>
            <Link data-aos="fade-right" to='/about' onClick={() => window.scrollTo(0, 0)}>
              <p data-aos="fade-right" data-aos-delay='200' className='flex items-center gap-2 mt-4 text-[16px] md:text-[18px] text-[#f9a825]'>
                Learn More
                <FaArrowRight className='mt-1' />
              </p>
            </Link>
          </div>

          <img src={Bella} className='w-full md:w-[700px] h-auto md:h-[500px] rounded-lg object-cover' alt="" />
        </div>
      </section>

      {/* Why Work With Me */}
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



      {/* Truth About Staying Stuck */}
      <section className="px-4 py-16 bg-[#121212] text-gray-300 rounded-2xl" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#f9a825] mb-8">The Truth About Staying Stuck</h2>
        <div className="text-white text-base md:text-lg space-y-6 max-w-3xl mx-auto text-center">
          <p>How long have you been dreaming about your business? Another year goes by—same job, same routine, same frustrations.</p>
          <p>You see others thriving online and wonder, <span className="italic">“Why not me?”</span></p>
          <p className="font-semibold text-white/70">The answer: Clarity, strategy, and support.</p>
          <p>What if it actually works? What if you finally create the income, freedom, and lifestyle you’ve wanted for years?</p>
          <p className="text-xl font-medium text-[#f9a825]">If nothing changes today, nothing changes tomorrow.</p>
          <p>You don’t need another dream. <span className="font-semibold">You need a plan</span> — and a mentor who’s walked the path.</p>
        </div>
      </section>

      {/* Academy Preview */}
      <section className="py-16 px-4 md:px-20 bg-[#1a1a1a] text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#cb891f] mb-2">THE ACADEMY</h2>
            <h3 className="text-lg md:text-2xl font-medium text-[#f9a825] mb-4">Why This Academy Exists</h3>
            <p className="text-gray-200 text-base md:text-lg mb-4">You’ve dreamed of starting or growing your business—but something always holds you back. This academy was created to help people like you turn your dream into reality, with the right plan, mindset, and support.</p>
            <p className="text-gray-300 text-sm md:text-base mb-6">A 7-session transformational experience for driven individuals ready to build profitable, purpose-driven businesses.</p>
            <Link to="/academy" onClick={() => window.scrollTo(0, 0)} className="mt-2 text-[#f9a825] flex items-center gap-2 font-semibold text-[16px] md:text-[18px] hover:text-indigo-800 transition">
              Learn more about the Academy
              <FaArrowRight className='mt-1' />
            </Link>
          </div>
          <div className="w-full">
            <img src={Academy} alt="Business coaching academy" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <section className="rounded-2xl shadow-md">
        <Testimonials />
      </section>

      {/* FAQ Component */}
      <section className="px-4 py-16" data-aos="fade-up">
        <FAQ />
      </section>

      <section data-aos="fade-up" className="px-4 py-16 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img src={Bella2} alt="Bella Bar Lawal" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#f9a825] mb-4">Meet Your Coach</h2>
          <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">Hi, I’m <strong>Bella Bar Lawal</strong>. I know what it’s like to feel stuck—scrolling social media, working minimum-wage jobs, and starting businesses that didn’t work… until they did.</p>
          <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">Through every failure, I gained insight. Today, I run multiple successful businesses and mentor entrepreneurs across the globe. I built everything from the ground up—and I’m here to help you do the same.</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">No fluff. Just clarity, strategy, and step-by-step support to help you build the life and business you deserve.</p>
        </div>
      </section>

      {/* Quick Signup Form */}
      <section className="px-4 mt-16 py-16 bg-[#cb891f]">
        <h2 className="text-[24px] md:text-[32px] text-center font-bold text-white mb-4" data-aos="zoom-in">Ready to take your business to the next level?</h2>
        <h2 className="text-[20px] md:text-[25px] text-center font-semibold text-white mb-4">Join the Academy</h2>
        <p className="mb-4 text-center text-white">Fill in your details for a free compatibility check.</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
          <div>
            <label className="block mb-1 font-medium text-sm text-white">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm text-white">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none bg-white text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm text-white">Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 11);
                handleChange({ target: { name: 'phone', value } });
              }}
              maxLength={11}
              className="w-full p-3 border rounded-lg outline-none bg-white text-black"
              required
            />
          </div>
          <label className="block text-sm text-white cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              checked={formData.agreed}
              onChange={handleCheckboxChange}
            />
            I agree to be contacted by Bella Bar Lawal and receive updates.
          </label>
          <button
            type="submit"
            disabled={isSubmitting || !formData.agreed}
            className={`w-full text-lg py-2 rounded-lg transition ${isSubmitting || !formData.agreed ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#121212] text-white hover:bg-yellow-600'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Join Now'}
          </button>
        </form>
        <ToastContainer />
      </section>
    </div>

  );
}
