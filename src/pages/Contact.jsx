import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ShieldCheck,
  Calendar,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { treatmentsData } from '../data/treatmentsData';
import PageHero from '../components/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: treatmentsData[0].title,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.date) {
      newErrors.date = 'Preferred Appointment Date is required.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const ref = 'ENQ-' + Math.floor(1000 + Math.random() * 9000) + '-MNG';
        setEnquiryRef(ref);
        setIsSubmitted(true);

        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C6A66B', '#E0C79B', '#174D3A', '#F5F0E8']
        });
      }, 700);
    }
  };

  return (
    <div className="w-full bg-[#F5F0E8] text-[#252823] font-sans">
      {/* 1. Cinematic Page Hero with Background Image */}
      <PageHero
        badge="CONCIERGE & RESERVATIONS"
        title="Contact Our"
        highlightTitle="Wellness Concierge."
        description="Whether inquiring about our private jacuzzi suites, booking an authentic Moroccan bath, or planning a bespoke couples journey, our concierge is at your service."
        bgImage="/images/hero-contact-bg.jpg"
        icon={Sparkles}
      />

      {/* 2. Contact Details & Form Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-semibold block mb-2">
                SANCTUARY DETAILS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#102F27] font-semibold tracking-tight">
                Visit & Connect
              </h2>
              <div className="w-16 h-[2px] bg-[#C6A66B] mt-4 mb-6" />
              <p className="font-sans text-sm text-[#252823]/80 leading-relaxed font-normal">
                Located with serene views over the lagoon, our sanctuary features private VIP treatment suites, heated hydrotherapy pools, and dedicated Moroccan hammam quarters.
              </p>
            </div>

            {/* Information Cards with Clear Placeholders */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-[#E8DDCE]/80 border border-[#C6A66B]/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base text-[#102F27] font-semibold">Sanctuary Location</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#252823]/80 mt-1 font-normal">
                    1st Floor, Mangrove Hotel, Al Qawasim Corniche Road, Ras Al Khaimah, UAE
                  </p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#F5F0E8] text-[10px] text-[#102F27]/70 font-mono">
                    [Editable Address Placeholder]
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-[#E8DDCE]/80 border border-[#C6A66B]/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base text-[#102F27] font-semibold">Sanctuary Hours</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#252823]/80 mt-1 font-normal">
                    Daily: 10:00 AM – 02:00 AM (Late Evening Sessions Available)
                  </p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#F5F0E8] text-[10px] text-[#102F27]/70 font-mono">
                    [Editable Opening Hours Placeholder]
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[#E8DDCE]/80 border border-[#C6A66B]/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base text-[#102F27] font-semibold">Direct Telephone</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#252823]/80 mt-1 font-mono">
                    +971 7 233 4400
                  </p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#F5F0E8] text-[10px] text-[#102F27]/70 font-mono">
                    [Professional Placeholder Phone]
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#E8DDCE]/80 border border-[#C6A66B]/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base text-[#102F27] font-semibold">Electronic Inquiries</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#252823]/80 mt-1 font-mono">
                    concierge@mangroovespa.com
                  </p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#F5F0E8] text-[10px] text-[#102F27]/70 font-mono">
                    [Professional Placeholder Email]
                  </span>
                </div>
              </div>
            </div>

            {/* Note on Discretion */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#102F27] text-[#F5F0E8] text-xs">
              <ShieldCheck className="w-5 h-5 text-[#C6A66B] flex-shrink-0 mt-0.5" />
              <p className="text-[#E8DDCE]/85 leading-relaxed font-normal">
                Guest Discretion: We respect private requests. Advance reservations ensure exclusive preparation of your jacuzzi or hammam suite.
              </p>
            </div>
          </div>

          {/* Right: Appointment Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#102F27] text-[#F5F0E8] border border-[#C6A66B]/35 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9E7D42] via-[#E0C79B] to-[#9E7D42] rounded-t-3xl" />

              {!isSubmitted ? (
                <div>
                  <div className="mb-8">
                    <span className="font-display text-xs tracking-widest text-[#C6A66B] uppercase block mb-1 font-semibold">
                      DIRECT APPOINTMENT ENQUIRY
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5F0E8] tracking-tight">
                      Request a Reservation
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/75 mt-1 font-normal">
                      Complete the enquiry form below. Our spa concierge will confirm your suite within 15 minutes.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A66B]/70" />
                        <input
                          type="text"
                          placeholder="e.g. Lady Vivienne Kensington"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A66B]/70" />
                          <input
                            type="tel"
                            placeholder="+971 50 000 0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A66B]/70" />
                          <input
                            type="email"
                            placeholder="vivienne@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Treatment & Preferred Date Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Treatment */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                          Preferred Treatment <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C6A66B] transition-colors cursor-pointer"
                        >
                          {treatmentsData.map((t) => (
                            <option key={t.id} value={t.title} className="bg-[#102F27]">
                              {t.title}
                            </option>
                          ))}
                          <option value="Bespoke Custom Journey" className="bg-[#102F27]">
                            Bespoke Custom Journey
                          </option>
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                          Preferred Date <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl text-[#F5F0E8] text-sm focus:outline-none focus:border-[#C6A66B] transition-colors"
                          />
                        </div>
                        {errors.date && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.date}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#C6A66B] mb-1.5 font-medium">
                        Additional Message / Special Requests
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please inform us of any preferences, sensitivities, or if you are celebrating a special occasion..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1E19]/80 border border-[#C6A66B]/30 rounded-xl text-[#F5F0E8] placeholder-[#E8DDCE]/30 text-sm focus:outline-none focus:border-[#C6A66B] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C6A66B] via-[#E0C79B] to-[#C6A66B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase hover:brightness-105 active:scale-[0.99] transition-all shadow-xl shadow-[#C6A66B]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#0A1E19] border-t-transparent rounded-full animate-spin" />
                            <span>Sending Your Appointment Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Appointment Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="py-10 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#174D3A] border-2 border-[#C6A66B] text-[#C6A66B] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <span className="font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] block font-semibold">
                    APPOINTMENT ENQUIRY RECEIVED
                  </span>

                  <h3 className="font-display text-3xl sm:text-4xl text-[#F5F0E8] font-semibold tracking-tight">
                    Thank You, {formData.fullName}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/80 max-w-md mx-auto leading-relaxed font-normal">
                    Your appointment request has been recorded under reference{' '}
                    <strong className="text-[#C6A66B] font-mono">{enquiryRef}</strong>. Our spa concierge will contact you by telephone or email shortly to confirm your private suite.
                  </p>

                  <div className="p-4 rounded-xl bg-[#0A1E19] border border-[#C6A66B]/30 max-w-sm mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#E8DDCE]/60">Treatment:</span>
                      <span className="text-[#F5F0E8] font-medium">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#E8DDCE]/60">Requested Date:</span>
                      <span className="text-[#F5F0E8] font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#E8DDCE]/60">Contact Phone:</span>
                      <span className="text-[#F5F0E8] font-mono">{formData.phone}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        treatment: treatmentsData[0].title,
                        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                        message: ''
                      });
                    }}
                    className="px-8 py-3 rounded-xl bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-md cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location Map Section */}
      <section className="py-20 px-6 sm:px-8 bg-[#E8DDCE] border-t border-[#C6A66B]/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-display text-xs tracking-widest uppercase text-[#102F27] font-semibold block mb-1">
                LOCATION MAP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#102F27] font-semibold tracking-tight">
                How to Reach Mangroove Spa
              </h2>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#102F27] text-[#C6A66B] text-xs font-sans tracking-widest uppercase font-semibold hover:bg-[#174D3A] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C6A66B]/40 bg-[#0A1E19] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0A1E19] opacity-90">
              <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C6A66B" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
                <path
                  d="M0 280 Q 300 220 600 260 T 1200 200 T 1600 250"
                  fill="none"
                  stroke="#174D3A"
                  strokeWidth="80"
                  opacity="0.5"
                />
                <path
                  d="M0 280 Q 300 220 600 260 T 1200 200 T 1600 250"
                  fill="none"
                  stroke="#C6A66B"
                  strokeWidth="2"
                  opacity="0.8"
                />
              </svg>
            </div>

            <div className="relative z-10 max-w-md mx-4 p-6 sm:p-8 rounded-2xl bg-[#102F27]/95 border border-[#C6A66B] shadow-2xl text-center text-[#F5F0E8] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#174D3A] border-2 border-[#C6A66B] text-[#C6A66B] flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-[10px] tracking-[0.25em] text-[#C6A66B] uppercase block font-semibold">
                  SANCTUARY DESTINATION
                </span>
                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] tracking-tight">
                  Mangroove Spa & Wellness
                </h3>
                <p className="font-sans text-xs text-[#E8DDCE]/80 mt-1 font-normal">
                  1st Floor, Mangrove Hotel, Al Qawasim Corniche Road, Ras Al Khaimah, United Arab Emirates
                </p>
                <p className="font-mono text-[10px] text-[#C6A66B]/60 mt-1">
                  [Location Map Placeholder · Connected to Mangrove Corniche]
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0A1E19] text-[11px] text-[#E8DDCE]/80 border border-[#C6A66B]/30">
                  Complimentary Valet Parking
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0A1E19] text-[11px] text-[#E8DDCE]/80 border border-[#C6A66B]/30">
                  Private Elevator Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
