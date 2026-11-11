import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#102F27]/95 backdrop-blur-md border-b border-[#C6A66B]/25 py-3 shadow-xl shadow-black/30'
            : 'bg-gradient-to-b from-[#061411]/80 via-[#061411]/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-sans text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-[#C6A66B]'
                      : 'text-[#E8DDCE]/85 hover:text-[#C6A66B]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A66B] rounded-full animate-fadeIn" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C6A66B] via-[#E0C79B] to-[#C6A66B] text-[#0A1E19] font-sans font-medium text-xs tracking-widest uppercase shadow-lg shadow-[#C6A66B]/20 hover:shadow-[#C6A66B]/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0A1E19]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#C6A66B] text-[#0A1E19] font-sans font-medium text-[10px] tracking-wider uppercase flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#E8DDCE] hover:text-[#C6A66B] hover:bg-[#174D3A] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#061411]/80 backdrop-blur-md transition-opacity"
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#102F27] border-l border-[#C6A66B]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Logo & Close */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#C6A66B]/20">
              <BrandLogo size="sm" link={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#E8DDCE]/70 hover:text-[#C6A66B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-display text-sm uppercase tracking-widest py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#174D3A] text-[#C6A66B] font-semibold'
                        : 'text-[#E8DDCE]/90 hover:text-[#C6A66B] hover:bg-[#174D3A]/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom CTA & Info */}
          <div className="pt-6 border-t border-[#C6A66B]/20 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C6A66B] to-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-[#E8DDCE]/70">
              <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>+971 7 233 4400 [Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
