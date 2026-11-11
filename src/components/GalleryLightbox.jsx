import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryLightbox = ({ images, activeIndex, isOpen, onClose, onNavigate }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  if (!isOpen || activeIndex === null || !images[activeIndex]) return null;

  const current = images[activeIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#061411]/95 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between py-3 px-2 text-[#E8DDCE]">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs tracking-widest text-[#C6A66B] uppercase font-semibold">
                {current.category}
              </span>
              <span className="text-[#C6A66B]/50">·</span>
              <span className="text-xs text-[#E8DDCE]/70 font-mono">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close lightbox"
              className="p-2 rounded-full bg-[#102F27] border border-[#C6A66B]/30 hover:border-[#C6A66B] text-[#F5F0E8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl border border-[#C6A66B]/30 bg-[#0A1E19] shadow-2xl">
            <motion.img
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              src={current.src}
              alt={current.title}
              className="max-h-[75vh] w-auto max-w-full object-contain"
            />

            {/* Navigation arrows */}
            <button
              onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#061411]/70 hover:bg-[#C6A66B] text-[#F5F0E8] hover:text-[#0A1E19] border border-[#C6A66B]/30 transition-all cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => onNavigate((activeIndex + 1) % images.length)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#061411]/70 hover:bg-[#C6A66B] text-[#F5F0E8] hover:text-[#0A1E19] border border-[#C6A66B]/30 transition-all cursor-pointer backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="w-full text-center mt-4 space-y-1">
            <h3 className="font-display text-xl sm:text-2xl text-[#F5F0E8] font-semibold">{current.title}</h3>
            <p className="font-sans text-xs text-[#E8DDCE]/70 max-w-xl mx-auto font-normal">{current.description}</p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;
