'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Set up GSAP hover animations for nav links
    navLinksRef.current.forEach((link) => {
      if (link) {
        const handleMouseEnter = () => {
          gsap.to(link, {
            y: -3,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(link, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          link.removeEventListener('mouseenter', handleMouseEnter);
          link.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-md shadow-purple-500/20">
      <div className="max-w-7xl mx-auto w-full px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-lg xs:text-xl sm:text-2xl font-bold">
              <span className="bg-linear-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                Agency
              </span>
              <span className="text-white">Pro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => (navLinksRef.current[index] = el)}
                className="text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium relative"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-linear-to-r from-purple-600 to-purple-800 text-white px-4 lg:px-6 py-2 text-sm lg:text-base rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-200 font-medium shadow-lg shadow-purple-500/30 hover:scale-105">
              Get a quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-purple-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-purple-900/50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-purple-500 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-linear-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-200 font-medium mt-2 shadow-lg shadow-purple-500/30">
              Get a quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
