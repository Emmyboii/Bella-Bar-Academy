import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Images/Logo.jpg';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
  location.pathname === path
    ? 'text-[#f9a825] font-semibold'
    : 'text-gray-300 hover:text-[#f9a825]';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-gray-900 shadow-lg shadow-black p-4 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} className="w-16 rounded-lg" alt="Bella Bar Lawal Logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center text-sm md:text-base">
          <Link to="/" onClick={closeMenu} className={isActive('/')}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={isActive('/about')}>About</Link>
          <Link to="/academy" onClick={closeMenu} className={isActive('/academy')}>Academy</Link>
          <Link to="/signup" onClick={closeMenu} className="bg-[#f9a825] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#f9a825]">Join Now</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white transition-all duration-300" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-4 text-sm py-4 text-white bg-gray-900">
          <Link to="/" onClick={closeMenu} className={isActive('/')}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={isActive('/about')}>About</Link>
          <Link to="/academy" onClick={closeMenu} className={isActive('/academy')}>Academy</Link>
          <Link to="/signup" onClick={closeMenu} className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-[#f9a825]">Join Now</Link>
        </div>
      </div>
    </header>

  );
}
