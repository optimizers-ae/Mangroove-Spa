import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const treatmentsList = [
  'Hot Oil Massage (Warm Botanical Oils & Tension Relief)',
  'Jacuzzi Experience (Indulgent Hydrotherapy & Mineral Bath)',
  'Hot Stone Massage (Heated Volcanic Basalt Deep Therapy)',
  'Moroccan Bath (Traditional Royal Hammam & Cleansing)',
  'Classical Massage (Timeless Swedish Relaxation & Rest)',
  'Bespoke Sanctuary Package (Custom Multitreatment Journey)'
];

const timeSlots = [
  '10:00 AM - 11:30 AM',
  '12:00 PM - 01:30 PM',
  '02:30 PM - 04:00 PM',
  '04:30 PM - 06:00 PM',
  '06:30 PM - 08:00 PM',
  '08:30 PM - 10:00 PM',
  '10:30 PM - 12:00 AM',
  '12:30 AM - 02:00 AM'
];

const BookingModal = ({ isOpen, onClose, defaultTreatment = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: treatmentsList[0],
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: timeSlots[2],
    guests: '1 Guest',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (defaultTreatment) {
      const match = treatmentsList.find(t => t.toLowerCase().includes(defaultTreatment.toLowerCase()));
      if (match) {
        setFormData(prev => ({ ...prev, treatment: match }));
      }
    }
  }, [defaultTreatment, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.date) errs.date = 'Please select a preferred date.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const ref = 'MNG-' + Math.floor(1000 + Math.random() * 9000) + '-RAK';
        setBookingRef(ref);
        setIsSuccess(true);

        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C6A66B', '#E0C79B', '#174D3A', '#F5F0E8']
        });
      }, 700);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#061411]/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#102F27] border border-[#C6A66B]/40 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden text-[#F5F0E8] my-8 z-10"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-[#9E7D42] via-[#E0C79B] to-[#9E7D42]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-[#E8DDCE]/70 hover:text-[#C6A66B] hover:bg-[#174D3A] transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-6 sm:p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#174D3A]/80 border border-[#C6A66B]/30 text-[#C6A66B] font-display text-[10px] tracking-widest uppercase mb-3 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Private Sanctuary Reservation</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#F5F0E8] font-bold tracking-tight">
                  Reserve Your Experience
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/75 mt-2 max-w-md mx-auto">
                  Reserve your private wellness ritual. Our concierge will curate every sensory detail for your arrival.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A66B]/70" />
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A66B]/70" />
                      <input
                        type="tel"
                        placeholder="e.g. +971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A66B]/70" />
                      <input
                        type="email"
                        placeholder="e.g. eleanor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Treatment Selection */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                    Preferred Treatment <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C6A66B] transition-colors cursor-pointer"
                  >
                    {treatmentsList.map((t, idx) => (
                      <option key={idx} value={t} className="bg-[#102F27] text-[#F5F0E8]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                      Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                    />
                    {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                      Preferred Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C6A66B] transition-colors cursor-pointer"
                    >
                      {timeSlots.map((ts, idx) => (
                        <option key={idx} value={ts} className="bg-[#102F27] text-[#F5F0E8]">
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C6A66B] transition-colors cursor-pointer"
                    >
                      <option value="1 Guest" className="bg-[#102F27]">1 Guest</option>
                      <option value="2 Guests (Couples Ritual)" className="bg-[#102F27]">2 Guests (Couples Ritual)</option>
                      <option value="3+ Guests (VIP Suite)" className="bg-[#102F27]">3+ Guests (VIP Suite)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                    Special Requests or Therapist Preferences (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Focus on shoulder tension relief, gentle aromatherapy oils..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-lg text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#E8DDCE]/60 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
                  <span>Absolute privacy guaranteed. No payment is required until arrival at the sanctuary.</span>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C6A66B] via-[#E0C79B] to-[#C6A66B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase hover:brightness-105 active:scale-[0.99] transition-all shadow-xl shadow-[#C6A66B]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0A1E19] border-t-transparent rounded-full animate-spin" />
                        <span>Confirming Sanctuary Availability...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Confirm Appointment Reservation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-8 sm:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#174D3A] border-2 border-[#C6A66B] text-[#C6A66B] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#C6A66B]/20">
                <CheckCircle2 className="w-9 h-9 text-[#C6A66B]" />
              </div>

              <span className="font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] block mb-2 font-semibold">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F5F0E8] font-bold mb-3 tracking-tight">
                We Await Your Presence
              </h3>
              <p className="font-sans text-sm text-[#E8DDCE]/80 max-w-md mx-auto mb-6">
                Thank you, <span className="text-[#C6A66B] font-semibold">{formData.fullName}</span>. Your private wellness experience has been scheduled.
              </p>

              <div className="bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto mb-8">
                <div className="flex justify-between border-b border-[#C6A66B]/15 pb-2">
                  <span className="text-[#E8DDCE]/60">Booking Reference:</span>
                  <span className="font-mono font-semibold text-[#C6A66B] tracking-wider">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-[#C6A66B]/15 pb-2">
                  <span className="text-[#E8DDCE]/60">Treatment:</span>
                  <span className="font-medium text-[#F5F0E8] text-right truncate max-w-[200px]">{formData.treatment.split('(')[0]}</span>
                </div>
                <div className="flex justify-between border-b border-[#C6A66B]/15 pb-2">
                  <span className="text-[#E8DDCE]/60">Date & Time:</span>
                  <span className="text-[#F5F0E8]">{formData.date} · {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#E8DDCE]/60">Party Size:</span>
                  <span className="text-[#F5F0E8]">{formData.guests}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-lg cursor-pointer"
              >
                Return to Sanctuary
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
