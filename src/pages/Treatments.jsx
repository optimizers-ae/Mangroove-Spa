import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, Eye, Calendar, Check, Droplets, Flame, ShieldCheck } from 'lucide-react';
import { treatmentsData } from '../data/treatmentsData';
import TreatmentDetailModal from '../components/TreatmentDetailModal';
import PageHero from '../components/PageHero';

const Treatments = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const categories = ['All', 'Massage Therapy', 'Hydrotherapy & Baths', 'Royal Hammam Ritual'];

  const filteredTreatments = activeCategory === 'All'
    ? treatmentsData
    : treatmentsData.filter(t => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleExplore = (treatment) => {
    setSelectedTreatment(treatment);
    setIsDetailOpen(true);
  };

  const handleBook = (title) => {
    onOpenBooking(title);
  };

  return (
    <div className="w-full bg-[#F5F0E8] text-[#252823] font-sans">
      {/* 1. Cinematic Page Hero with Background Image */}
      <PageHero
        badge="THE TREATMENT MENU"
        title="Our Signature"
        highlightTitle="Wellness Rituals."
        description="Five distinguished experiences drawing upon warm botanical oils, heated volcanic stones, private hydrotherapy jacuzzi waters, and ancient Moroccan royal bath purification."
        bgImage="/images/hero-treatments-bg.jpg"
        icon={Sparkles}
        actionButton={
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-full bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-[#C6A66B]/20 cursor-pointer"
          >
            Reserve An Appointment
          </button>
        }
      />

      {/* 2. Filter Navigation & Treatments Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#102F27] text-[#C6A66B] font-semibold shadow-md border border-[#C6A66B]'
                  : 'bg-[#E8DDCE] text-[#252823]/80 hover:text-[#102F27] hover:bg-[#D4C4AE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5 Treatments List (Large Editorial Cards with Unique Images) */}
        <div className="space-y-16">
          {filteredTreatments.map((treatment, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className={`bg-[#E8DDCE]/70 border border-[#C6A66B]/30 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-10 ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Section (Unique Image) */}
                <div
                  className={`lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-[#C6A66B]/30 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] ${
                    isEven ? 'lg:col-start-8' : ''
                  }`}
                >
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#102F27]/90 text-[#C6A66B] font-display text-[10px] tracking-widest uppercase backdrop-blur-sm border border-[#C6A66B]/30 font-semibold">
                      {treatment.category}
                    </span>
                  </div>
                </div>

                {/* Content Section (Sans-Serif) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-semibold">
                      Ritual 0{idx + 1}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl text-[#102F27] font-semibold tracking-tight">
                      {treatment.title}
                    </h2>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#252823]/80 leading-relaxed font-normal">
                    {treatment.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#252823]/80">
                    {treatment.benefits.slice(0, 4).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#174D3A] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Placeholders Row */}
                  <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#C6A66B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-[#252823]/75">
                      <Clock className="w-4 h-4 text-[#174D3A]" />
                      <span>
                        <strong className="text-[#102F27]">Duration:</strong> {treatment.duration}
                      </span>
                    </div>
                    <div className="text-[#102F27] font-display font-semibold">
                      {treatment.price}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => handleExplore(treatment)}
                      className="px-6 py-3 rounded-full border border-[#102F27] hover:border-[#C6A66B] hover:text-[#C6A66B] hover:bg-[#102F27] text-[#102F27] text-xs font-sans tracking-widest uppercase font-medium transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore Treatment</span>
                    </button>

                    <button
                      onClick={() => handleBook(treatment.title)}
                      className="px-7 py-3 rounded-full bg-[#102F27] hover:bg-[#174D3A] text-[#F5F0E8] text-xs font-sans font-semibold tracking-widest uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bespoke Custom Ritual Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#102F27] to-[#174D3A] text-[#F5F0E8] border border-[#C6A66B]/40 shadow-2xl text-center space-y-6">
          <Sparkles className="w-8 h-8 text-[#C6A66B] mx-auto" />
          <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Seeking a Tailored Wellness Program?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/80 max-w-xl mx-auto leading-relaxed font-normal">
            Our wellness concierges can combine our private Jacuzzi experience with custom Moroccan bath exfoliation and targeted hot stone massage for private VIP and couples sessions.
          </p>
          <button
            onClick={() => onOpenBooking('Bespoke Sanctuary Package')}
            className="px-9 py-3.5 rounded-full bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-lg cursor-pointer"
          >
            Inquire Bespoke Package
          </button>
        </div>
      </section>

      {/* Treatment Detail Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onBookTreatment={handleBook}
      />
    </div>
  );
};

export default Treatments;
