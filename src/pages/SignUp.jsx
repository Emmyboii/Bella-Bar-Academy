import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignUpImg from '../Images/Img12.jpg';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

export default function SignUp() {
  useEffect(() => {
    AOS.init({ duration: 2000, once:false });
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Image Section */}
        <div className="hidd block" data-aos="fade-right">
          <img
            src={SignUpImg}
            alt="Join the Academy"
            className="rounded-xl shadow-lg w-full object-cover max-h-[600px]"
          />
        </div>

        {/* Form Section */}
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">Your Next Step</h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            This is more than a course — it’s your launchpad. Fill out the form for a free compatibility check. Spots are limited.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-2xl mb-10 shadow-md space-y-5"
          >
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">Phone Number</label>
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
                className="w-full p-3 border rounded-lg outline-none"
                required
              />
            </div>

            <label className="block text-sm text-gray-600 cursor-pointer">
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
              className={`w-full text-lg py-3 rounded-lg transition ${
                isSubmitting || !formData.agreed
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Join the Academy'}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-indigo-500 text-white" data-aos="fade-up">
        <h2 className="text-2xl md:text-[35px] font-bold text-center mb-6">What People Are Saying</h2>
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-12 md:p-16" data-aos="fade-up">
        <FAQ />
      </section>
    </section>
  );
}
