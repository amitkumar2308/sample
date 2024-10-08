import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bishop from '../assets/bishoppng.png'; // Corrected import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={bishop} alt="Bishop Cotton Logo" className="h-12" />
          <div>
            <h1 className="text-2xl font-bold">BISHOP COTTON BOYS' SCHOOL</h1>
            <p className="text-sm">Since 1865</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex items-center md:space-x-8`}
        >
          {/* Main Navigation Links */}
          <Link to="/about" className="hover:underline">THE SCHOOL</Link>
          <Link to="/events" className="hover:underline">LIFE AT COTTONS</Link>
          <Link to="/blog" className="hover:underline">BLOG</Link>
          <Link to="/gallery" className="hover:underline">GALLERY</Link>
          <Link to="/fees" className="hover:underline">FEES</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile View Styling */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-4 space-y-2">
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-200 rounded">THE SCHOOL</Link>
          <Link to="/events" className="block px-4 py-2 hover:bg-gray-200 rounded">LIFE AT COTTONS</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-gray-200 rounded">BLOG</Link>
          <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-200 rounded">GALLERY</Link>
          <Link to="/fees" className="block px-4 py-2 hover:bg-gray-200 rounded">FEES</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
