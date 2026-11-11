import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PageHero = ({
  badge = 'MANGROOVE SPA',
  title = '',
  highlightTitle = '',
  description = '',
  bgImage = '/images/hero-spa-sanctuary.jpg',
  icon: Icon = Sparkles,
  actionButton = null
}) => {
  return (
    <section className="relative min-h-[55vh] md:min-h-[62vh] flex items-center justify-center py-24 sm:py-32 px-6 sm:px-8 overflow-hidden bg-[#0A1E19] text-[#F5F0E8]">
      {/* Background Image with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.1] saturate-[1.15] scale-105 transition-transform duration-1000"
        />
        {/* Moroccan Forest Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102F27] via-[#102F27]/70 to-[#061411]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061411]/80 via-transparent to-[#061411]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(198,166,107,0.18),transparent_75%)]" />
      </div>

      {/* Moroccan Arch Geometry Overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none">
          <path
            d="M520 600 V220 C520 80 600 20 720 20 C840 20 920 80 920 220 V600"
            stroke="#C6A66B"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 pt-10">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102F27]/90 border border-[#C6A66B]/40 text-[#C6A66B] font-display text-[11px] sm:text-xs tracking-[0.25em] uppercase backdrop-blur-md shadow-lg"
        >
          {Icon && <Icon className="w-3.5 h-3.5 text-[#C6A66B]" />}
          <span>{badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
        </motion.div>

        {/* Main Title (Pure Luxury Sans-Serif) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-[#F5F0E8]"
        >
          {title} {highlightTitle && <span className="block mt-1 font-light gold-gradient-text">{highlightTitle}</span>}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm sm:text-base md:text-lg text-[#E8DDCE]/85 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide"
          >
            {description}
          </motion.p>
        )}

        {/* Optional Action Button */}
        {actionButton && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2"
          >
            {actionButton}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;

