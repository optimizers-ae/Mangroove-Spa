import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, Camera, Eye, ArrowRight } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import GalleryLightbox from '../components/GalleryLightbox';
import PageHero from '../components/PageHero';

const Gallery = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = ['All', 'Architecture & Arches', 'Jacuzzi & Baths', 'Treatment Sanctuaries', 'Rituals & Details'];

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="w-full bg-[#F5F0E8] text-[#252823] font-sans">
      {/* 1. Cinematic Page Hero with Background Image */}
      <PageHero
        badge="VISUAL TOUR OF MANGROOVE SPA"
        title="Atmospheric"
        highlightTitle="Visual Gallery."
        description="Immerse yourself in our Moroccan architectural details, candlelit jacuzzi environments, heated volcanic stones, and private treatment sanctuaries."
        bgImage="/images/hero-gallery-bg.jpg"
        icon={Camera}
        actionButton={
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-full bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-[#C6A66B]/20 cursor-pointer"
          >
            Experience The Sanctuary
          </button>
        }
      />

      {/* 2. Gallery Filter & Dynamic Editorial Grid (12 Distinct Images) */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#102F27] text-[#C6A66B] font-semibold shadow-md border border-[#C6A66B]'
                  : 'bg-[#E8DDCE] text-[#252823]/80 hover:text-[#102F27] hover:bg-[#D4C4AE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDCE] border border-[#C6A66B]/30 hover:border-[#C6A66B] shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061411]/90 via-[#061411]/40 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-[#F5F0E8]">
                {/* Top Category Badge & Expand Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#102F27]/90 text-[#C6A66B] font-display text-[10px] tracking-widest uppercase border border-[#C6A66B]/30 backdrop-blur-sm font-semibold">
                    {img.category}
                  </span>
                  <div className="p-2 rounded-full bg-[#102F27]/80 text-[#C6A66B] border border-[#C6A66B]/30">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Title & Description (Clean Sans-Serif) */}
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold text-[#F5F0E8] group-hover:text-[#C6A66B] transition-colors">
                    {img.title}
                  </h3>
                  <p className="font-sans text-xs text-[#E8DDCE]/75 line-clamp-2 font-normal">
                    {img.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 text-center bg-[#E8DDCE] border border-[#C6A66B]/40 rounded-3xl p-10 sm:p-14 space-y-6">
          <Sparkles className="w-8 h-8 text-[#174D3A] mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#102F27] font-semibold tracking-tight">
            Experience These Sanctuaries in Person
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#252823]/80 max-w-lg mx-auto leading-relaxed font-normal">
            Reserve your private treatment suite, heated jacuzzi bath, or authentic Moroccan hammam session today.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-9 py-3.5 rounded-full bg-[#102F27] hover:bg-[#174D3A] text-[#F5F0E8] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-lg cursor-pointer"
          >
            Book Your Visit
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        images={filteredImages}
        activeIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
};

export default Gallery;
