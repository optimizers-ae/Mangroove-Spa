import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Sparkles, Check, ArrowRight, ShieldCheck, Droplets, Leaf } from 'lucide-react';

const TreatmentDetailModal = ({ treatment, isOpen, onClose, onBookTreatment }) => {
  if (!isOpen || !treatment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#061411]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#102F27] border border-[#C6A66B]/40 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden text-[#F5F0E8] my-8 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 p-2 rounded-full bg-[#061411]/70 hover:bg-[#C6A66B] hover:text-[#0A1E19] text-[#F5F0E8] transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image Header */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102F27] via-[#102F27]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 sm:left-8 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#174D3A]/90 border border-[#C6A66B]/40 text-[#C6A66B] font-display text-[11px] tracking-widest uppercase mb-2 font-semibold">
                {treatment.category || 'Signature Wellness Ritual'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#F5F0E8] font-bold tracking-tight">
                {treatment.title}
              </h2>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-sans text-sm sm:text-base text-[#E8DDCE]/85 leading-relaxed font-normal">
              {treatment.longDescription || treatment.description}
            </p>

            {/* Ritual Steps */}
            <div>
              <h3 className="font-display text-base font-semibold text-[#C6A66B] flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#C6A66B]" />
                <span>The Ritual Experience</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {(treatment.ritualSteps || [
                  'Welcome consultation and botanical scent selection',
                  'Gentle foot cleansing ritual with rose-infused warm water',
                  'Core therapeutic treatment performed by certified therapists',
                  'Post-treatment rest with Moroccan mint tea and dates'
                ]).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A1E19]/60 border border-[#C6A66B]/20">
                    <span className="w-5 h-5 rounded-full bg-[#C6A66B]/20 text-[#C6A66B] text-[11px] font-mono flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[#E8DDCE]/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Wellness Benefits */}
            <div>
              <h3 className="font-display text-base font-semibold text-[#C6A66B] flex items-center gap-2 mb-3">
                <Leaf className="w-4 h-4 text-[#C6A66B]" />
                <span>Therapeutic Benefits</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {(treatment.benefits || [
                  'Deep Muscular Relaxation',
                  'Lymphatic Drainage',
                  'Stress & Anxiety Reset',
                  'Skin Nourishment',
                  'Improved Sleep Quality'
                ]).map((benefit, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#174D3A]/60 border border-[#C6A66B]/30 text-xs text-[#E8DDCE]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C6A66B]" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-[#0A1E19]/80 border border-[#C6A66B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C6A66B]" />
                <span className="text-[#E8DDCE]/75">
                  <strong className="text-[#F5F0E8]">Duration:</strong> {treatment.duration || '60 min / 90 min [Customizable Placeholder]'}
                </span>
              </div>
              <div className="text-[#C6A66B] font-display font-semibold text-sm">
                {treatment.price || '[Price Upon Request / Editable Placeholder]'}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookTreatment(treatment.title);
                }}
                className="flex-1 py-3.5 rounded-xl bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#E8DDCE] text-xs uppercase tracking-widest font-medium transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TreatmentDetailModal;
