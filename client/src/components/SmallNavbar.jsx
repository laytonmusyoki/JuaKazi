import React from 'react';
import { FaTimes, FaHome, FaInfoCircle, FaPhone, FaTools, FaUserCircle } from 'react-icons/fa';

function SmallNavbar({ toggleNavbar, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 w-[80%] max-w-xs h-full bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ${
        toggleNavbar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-extrabold text-primary tracking-wide">
          <span className="bg-primary text-white px-2 py-1 rounded-l-xl">Jua</span>
          <span className="bg-black text-white px-2 py-1 rounded-r-xl">Kazi</span>
        </h1>
        <button onClick={toggleSidebar} className="text-3xl text-gray-600 hover:text-primary transition">
          <FaTimes />
        </button>
      </div>

      {/* Links */}
      <ul className="space-y-6 text-gray-700 font-semibold uppercase text-lg">
        <li className="flex items-center gap-3 hover:text-primary transition">
          <FaHome />
          <a href="/">Home</a>
        </li>
        <li className="flex items-center gap-3 hover:text-primary transition">
          <FaInfoCircle />
          <a href="/about">About</a>
        </li>
        <li className="flex items-center gap-3 hover:text-primary transition">
          <FaPhone />
          <a href="/contact">Contact</a>
        </li>
        <li className="flex items-center gap-3 hover:text-primary transition">
          <FaTools />
          <a href="/services">Services</a>
        </li>
      </ul>

      {/* Optional User Section */}
      <div className="mt-12 flex items-center gap-3 text-gray-600 hover:text-primary cursor-pointer transition">
        <FaUserCircle className="text-2xl" />
        <span className="font-medium">Login / Register</span>
      </div>
    </div>
  );
}

export default SmallNavbar;
