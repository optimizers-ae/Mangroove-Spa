import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#061411] overflow-hidden font-sans"
        >
          {/* Subtle Moroccan background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

          {/* Golden Center Medallion Reveal */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Royal Arch SVG Outline */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-1 rounded-full bg-gradient-to-tr from-[#9E7D42] via-[#E0C79B] to-[#C6A66B] shadow-2xl shadow-[#C6A66B]/20 mb-6"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#102F27] flex items-center justify-center p-1">
                <img
                  src="/mangroove-logo.png"
                  alt="Mangroove Spa Emblem"
                  className="w-full h-full object-cover rounded-full filter contrast-105"
                />
              </div>
            </motion.div>

            {/* Typography (Pure Clean Sans-Serif) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="font-display tracking-[0.25em] text-xl sm:text-2xl text-[#F5F0E8] font-bold">
                MANGROOVE SPA
              </h1>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="h-[1px] w-6 bg-[#C6A66B]/60" />
                <span className="font-sans text-[11px] sm:text-xs text-[#C6A66B] tracking-[0.3em] uppercase font-semibold">
                  Luxury Wellness Sanctuary
                </span>
                <span className="h-[1px] w-6 bg-[#C6A66B]/60" />
              </div>
            </motion.div>

            {/* Subtle loading pulse bar */}
            <div className="w-36 h-[2px] bg-[#102F27] rounded-full overflow-hidden mt-8 relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
