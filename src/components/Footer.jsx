import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-20">

        {/* Brand & Contact */}
        <div className='col-span-2'>
          <h3 className="text-[24px] font-bold text-indigo-800 mb-2">Bella Bar Lawal Academy</h3>
          <p className="text-[18px] mb-2">
            Empowering aspiring entrepreneurs to turn passion into profit through proven strategies, 
            powerful mindset shifts, and personalized mentorship—so you can build a business that 
            brings freedom, impact, and lasting success.
          </p>
          <p className="text-[17px] flex items-center gap-2">
            <FaEnvelope className="text-indigo-600" /> info@bellabarlawal.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xl mb-3 text-indigo-700">Quick Links</h4>
          <ul className="space-y-2 text-[18px]">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/academy" className="hover:underline">The Academy</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-xl mb-3 text-indigo-700">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-indigo-600" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-indigo-600" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Bella Bar Lawal Academy. All rights reserved.
      </div>
    </footer>
  );
}
