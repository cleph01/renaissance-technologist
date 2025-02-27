"use client"

import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from 'next/link';

// Responsive Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-neutral-900 text-gray-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/"> 
              <img src="/logo.jpg" alt="Renaissance Technologist" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden font-sans md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="/three-pillars" className="hover:text-yellow-500 transition">
              Three Pillars
            </Link>
            <Link href="/projects" className="hover:text-yellow-500 transition">
              Projects
            </Link>
            <Link href="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
            <Link href="/contact" className="bg-yellow-500 text-neutral-900 px-4 py-2 rounded-xl hover:bg-yellow-400 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-100 hover:text-yellow-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800">
          <Link href="/" className="block px-4 py-2 hover:bg-neutral-700 transition">
            Home
          </Link>
          <Link href="/three-pillars" className="block px-4 py-2 hover:bg-neutral-700 transition">
            Three Pillars
          </Link>
          <Link href="/projects" className="block px-4 py-2 hover:bg-neutral-700 transition">
            Projects
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-neutral-700 transition">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 bg-yellow-500 text-neutral-900 rounded-b-xl hover:bg-yellow-400 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
