'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-[#F5F5DC] font-clash-display font-bold text-lg sm:text-xl md:text-2xl drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]">
              MOHDDISH
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F5DC] hover:text-yellow-400 focus:outline-none drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 nav-link drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]">
                Home
              </Link>
              <a href="#selected-works" className="text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 nav-link drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]">
                Work
              </a>
              <Link href="/contact" className="text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 nav-link px-2 py-1 drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]">
                Say Hello!
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm rounded-lg mt-2">
            <Link
              href="/"
              className="block px-3 py-2 text-base text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#selected-works"
              className="block px-3 py-2 text-base text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Say Hello!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 