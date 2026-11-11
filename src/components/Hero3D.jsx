import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Compass, ArrowDown, ShieldCheck, Droplets, Flame } from 'lucide-react';

const Hero3D = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0A1E19] text-[#F5F0E8] font-sans">
      {/* 1. Cinematic Luxury Spa Sanctuary Showcase (No 3D canvas, no white snow/particles) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/hero-spa-sanctuary.jpg"
          alt="Mangroove Spa Luxury Sanctuary"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center filter brightness-[0.58] contrast-[1.1] saturate-[1.12]"
        />
        {/* Soft Moroccan Royal Ambient Gradients for Perfect Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061411] via-[#0A1E19]/65 to-[#061411]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061411]/85 via-transparent to-[#061411]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(198,166,107,0.14),transparent_70%)]" />
      </div>

      {/* 2. Elegant Moroccan Royal Arch Silhouette Overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none opacity-25">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-60 900 V320 C-60 180 60 70 240 70 C400 70 500 180 500 320 V900"
            stroke="url(#archGold)"
            strokeWidth="1.2"
          />
          <path
            d="M940 900 V320 C940 180 1040 70 1200 70 C1380 70 1500 180 1500 320 V900"
            stroke="url(#archGold)"
            strokeWidth="1.2"
          />
          <path
            d="M480 900 V260 C480 100 590 30 720 30 C850 30 960 100 960 260 V900"
            stroke="url(#archGold)"
            strokeWidth="1.4"
          />
          <defs>
            <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0C79B" stopOpacity="0.8" />
              <stop offset="0.6" stopColor="#C6A66B" stopOpacity="0.3" />
              <stop offset="1" stopColor="#102F27" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Hero Content Container — Clear, Crisp, Focused on Brand Message */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#102F27]/85 backdrop-blur-md border border-[#C6A66B]/35 shadow-lg shadow-black/30 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span className="font-display tracking-[0.28em] text-[11px] sm:text-xs text-[#E8DDCE] uppercase font-semibold">
            MANGROOVE SPA · LUXURY WELLNESS EXPERIENCE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
        </motion.div>

        {/* Main Heading (Pure Modern Luxury Sans-Serif) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] leading-[1.08] tracking-tight mb-8"
        >
          Discover the Art of <br />
          <span className="font-light gold-gradient-text tracking-normal">Pure Relaxation.</span>
        </motion.h1>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-xl text-[#E8DDCE]/90 font-normal leading-relaxed mb-12 tracking-wide"
        >
          Escape the ordinary and experience a world of tranquillity, rejuvenation and timeless wellness.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-semibold font-sans text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#C6A66B]/25 hover:shadow-[#C6A66B]/45 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#0A1E19] group-hover:rotate-45 transition-transform duration-500" />
            <span>Explore Our Treatments</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#102F27]/80 hover:bg-[#174D3A] text-[#F5F0E8] font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase border border-[#C6A66B]/40 hover:border-[#C6A66B] transition-all duration-300 backdrop-blur-md shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C6A66B]" />
            <span>Book Your Experience</span>
          </button>
        </motion.div>

        {/* Signature Pillars Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-[#C6A66B]/20 pt-8"
        >
          <div className="flex flex-col items-center text-center p-3">
            <Droplets className="w-5 h-5 text-[#C6A66B] mb-2" />
            <span className="font-display font-medium text-base text-[#F5F0E8]">Hydrotherapy Suites</span>
            <span className="font-sans text-[11px] text-[#E8DDCE]/60 tracking-wider uppercase mt-0.5">Private Jacuzzis</span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <Flame className="w-5 h-5 text-[#C6A66B] mb-2" />
            <span className="font-display font-medium text-base text-[#F5F0E8]">Moroccan Hammam</span>
            <span className="font-sans text-[11px] text-[#E8DDCE]/60 tracking-wider uppercase mt-0.5">Royal Cleansing</span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <Sparkles className="w-5 h-5 text-[#C6A66B] mb-2" />
            <span className="font-display font-medium text-base text-[#F5F0E8]">Warm Botanical Oils</span>
            <span className="font-sans text-[11px] text-[#E8DDCE]/60 tracking-wider uppercase mt-0.5">Pure Organic Extracts</span>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <ShieldCheck className="w-5 h-5 text-[#C6A66B] mb-2" />
            <span className="font-display font-medium text-base text-[#F5F0E8]">Exclusivity & Privacy</span>
            <span className="font-sans text-[11px] text-[#E8DDCE]/60 tracking-wider uppercase mt-0.5">Discreet Hospitality</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C6A66B]">Scroll to enter</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C6A66B] animate-bounce" />
      </div>

      {/* 4. Ambient Luxury Moroccan Candle Lanterns (Flickering sanctuary flame & warm glow halo) */}
      <div
        className="hidden lg:flex absolute bottom-10 left-8 xl:left-14 z-10 pointer-events-none flex-col items-center opacity-90 select-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            scale: [1, 1.12, 0.96, 1.05, 1],
            opacity: [0.4, 0.55, 0.38, 0.52, 0.4]
          }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          className="absolute -top-8 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,185,90,0.45)_0%,rgba(198,166,107,0.18)_45%,transparent_70%)] pointer-events-none blur-sm"
        />
        <div className="relative w-16 h-28 rounded-t-2xl border border-[#C6A66B]/50 bg-[#102F27]/40 backdrop-blur-[2px] p-2 flex flex-col items-center justify-end shadow-2xl shadow-black/60">
          <div className="absolute -top-3 w-5 h-5 rounded-full border border-[#C6A66B] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#C6A66B]" />
          </div>
          <div className="absolute top-0 w-8 h-1 bg-[#C6A66B]" />
          <div className="relative flex flex-col items-center mb-1">
            <motion.div
              animate={{
                scaleY: [1, 1.22, 0.94, 1.15, 1],
                scaleX: [1, 0.9, 1.08, 0.95, 1],
                opacity: [0.92, 1, 0.85, 0.98, 0.92]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-2.5 h-5 rounded-full bg-gradient-to-t from-[#FF8C00] via-[#FFD700] to-white shadow-[0_0_14px_#FFA726] origin-bottom"
            />
            <div className="w-0.5 h-1.5 bg-[#4A3B2A] -mt-0.5" />
            <div className="w-5 h-8 rounded-t-sm bg-gradient-to-r from-[#EDE3D2] via-[#FFFDF8] to-[#D4C5AD] shadow-sm border-t border-[#C6A66B]/40" />
          </div>
          <div className="absolute inset-x-1.5 top-3 bottom-1.5 border border-[#C6A66B]/25 rounded-t-xl pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#9E7D42] via-[#E0C79B] to-[#9E7D42]" />
        </div>
        <div className="w-18 h-2 rounded-sm bg-gradient-to-r from-[#9E7D42] via-[#E0C79B] to-[#9E7D42] shadow-md border-t border-[#C6A66B]/60" />
        <span className="mt-2 text-[9px] font-sans tracking-[0.28em] text-[#C6A66B]/80 uppercase font-medium">
          Candlelit Haven
        </span>
      </div>

      <div
        className="hidden lg:flex absolute bottom-10 right-8 xl:right-14 z-10 pointer-events-none flex-col items-center opacity-90 select-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 0.95, 1.08, 1],
            opacity: [0.38, 0.52, 0.35, 0.5, 0.38]
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-8 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,185,90,0.45)_0%,rgba(198,166,107,0.18)_45%,transparent_70%)] pointer-events-none blur-sm"
        />
        <div className="relative w-16 h-28 rounded-t-2xl border border-[#C6A66B]/50 bg-[#102F27]/40 backdrop-blur-[2px] p-2 flex flex-col items-center justify-end shadow-2xl shadow-black/60">
          <div className="absolute -top-3 w-5 h-5 rounded-full border border-[#C6A66B] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#C6A66B]" />
          </div>
          <div className="absolute top-0 w-8 h-1 bg-[#C6A66B]" />
          <div className="relative flex flex-col items-center mb-1">
            <motion.div
              animate={{
                scaleY: [1, 1.18, 0.92, 1.12, 1],
                scaleX: [1, 0.93, 1.05, 0.96, 1],
                opacity: [0.9, 1, 0.88, 0.96, 0.9]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.4 }}
              className="w-2.5 h-5 rounded-full bg-gradient-to-t from-[#FF8C00] via-[#FFD700] to-white shadow-[0_0_14px_#FFA726] origin-bottom"
            />
            <div className="w-0.5 h-1.5 bg-[#4A3B2A] -mt-0.5" />
            <div className="w-5 h-8 rounded-t-sm bg-gradient-to-r from-[#EDE3D2] via-[#FFFDF8] to-[#D4C5AD] shadow-sm border-t border-[#C6A66B]/40" />
          </div>
          <div className="absolute inset-x-1.5 top-3 bottom-1.5 border border-[#C6A66B]/25 rounded-t-xl pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#9E7D42] via-[#E0C79B] to-[#9E7D42]" />
        </div>
        <div className="w-18 h-2 rounded-sm bg-gradient-to-r from-[#9E7D42] via-[#E0C79B] to-[#9E7D42] shadow-md border-t border-[#C6A66B]/60" />
        <span className="mt-2 text-[9px] font-sans tracking-[0.28em] text-[#C6A66B]/80 uppercase font-medium">
          Pure Serenity
        </span>
      </div>
    </section>
  );
};

export default Hero3D;
