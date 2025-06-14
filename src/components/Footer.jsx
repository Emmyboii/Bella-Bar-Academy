import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* Brand */}
        <div className='col-span-2'>
          <h3 className="text-[24px] font-bold text-[#f9a825] mb-2">Bella Bar Lawal Academy</h3>
          <p className="text-[18px] mb-2">
            Empowering aspiring entrepreneurs to turn passion into profit...
          </p>
          <p className="text-[17px] flex items-center gap-2">
            <FaEnvelope className="text-[#f9a825]" /> info@bellabarlawal.com
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-xl mb-3 text-[#f9a825]">Quick Links</h4>
          <ul className="space-y-2 text-[18px]">
            <li><Link to="/" className="hover:text-[#f9a825]">Home</Link></li>
            <li><Link to="/academy" className="hover:text-[#f9a825]">The Academy</Link></li>
            <li><Link to="/about" className="hover:text-[#f9a825]">About</Link></li>
            <li><Link to="/signup" className="hover:text-[#f9a825]">Sign Up</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-xl mb-3 text-[#f9a825]">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#f9a825]" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-[#f9a825]" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-[#f9a825]" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Bella Bar Lawal Academy. All rights reserved.
      </div>
    </footer>

  );
}
