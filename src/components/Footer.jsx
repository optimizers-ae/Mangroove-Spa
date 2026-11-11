import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, Sparkles, Check } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-[#061411] text-[#E8DDCE] border-t border-[#C6A66B]/20 pt-16 pb-12 overflow-hidden font-sans">
      {/* Subtle Moroccan background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A66B_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#C6A66B]/15">
          {/* Column 1 & 2: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo size="lg" />
            <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/75 max-w-md leading-relaxed font-normal">
              A serene luxury sanctuary where Modern Minimalist Luxury meets timeless Moroccan Royal Architecture. Experience an elevated haven of private hydrotherapy suites, heated botanical stones, and sacred hammam bathing rituals.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#174D3A] border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#C6A66B] font-display text-xs tracking-widest uppercase font-semibold transition-all shadow-md cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve A Private Suite</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-bold mb-5">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DDCE]/80 font-sans">
              <li>
                <Link to="/" className="hover:text-[#C6A66B] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C6A66B] transition-colors">
                  About Our Philosophy
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#C6A66B] transition-colors">
                  Treatment Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C6A66B] transition-colors">
                  Atmospheric Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C6A66B] transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Signature Treatments */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-bold mb-5">
              Rituals
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DDCE]/80 font-sans">
              <li>
                <Link to="/treatments" className="hover:text-[#C6A66B] transition-colors">
                  Hot Oil Massage
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#C6A66B] transition-colors">
                  Jacuzzi Experience
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#C6A66B] transition-colors">
                  Hot Stone Massage
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#C6A66B] transition-colors">
                  Moroccan Bath (Hammam)
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#C6A66B] transition-colors">
                  Classical Massage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Concierge & Location Placeholders */}
          <div>
            <h4 className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-bold mb-5">
              Concierge
            </h4>
            <ul className="space-y-3 text-xs text-[#E8DDCE]/80 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  1st Floor, Mangrove Hotel, Al Qawasim Corniche Road, Ras Al Khaimah, UAE
                  <span className="block text-[10px] text-[#C6A66B]/60 font-mono mt-0.5">[Editable Address]</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
                <span>
                  Daily: 10:00 AM – 02:00 AM
                  <span className="block text-[10px] text-[#C6A66B]/60 font-mono">[Editable Hours]</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
                <span>+971 7 233 4400 <span className="text-[10px] text-[#C6A66B]/60 font-mono">[Placeholder]</span></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
                <span>concierge@mangroovespa.com <span className="text-[10px] text-[#C6A66B]/60 font-mono">[Placeholder]</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Newsletter Box */}
          <div className="w-full md:w-auto">
            <span className="block font-display text-[11px] tracking-widest uppercase text-[#C6A66B] mb-2 font-semibold">
              Privileged Inquiries & Seasonal Retreats
            </span>
            <form onSubmit={handleNewsletter} className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your private email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0A1E19] border border-[#C6A66B]/30 rounded-l-lg text-xs text-[#F5F0E8] placeholder-[#E8DDCE]/40 focus:outline-none focus:border-[#C6A66B]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] text-xs font-semibold uppercase tracking-wider rounded-r-lg transition-colors cursor-pointer flex-shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-950" /> : 'Subscribe'}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#C6A66B] mt-1.5 font-sans">
                You have been entered into our privileged guest circle.
              </p>
            )}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-[11px] text-[#E8DDCE]/50 space-y-1">
            <p>© {new Date().getFullYear()} MANGROOVE SPA. All rights reserved.</p>
            <p className="font-mono text-[10px] text-[#C6A66B]/60">
              Modern Minimalist Luxury · Moroccan Royal Architecture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
