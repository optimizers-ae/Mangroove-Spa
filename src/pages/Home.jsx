import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Flame,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  Quote,
  Eye
} from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { treatmentsData } from '../data/treatmentsData';
import { galleryData } from '../data/galleryData';
import TreatmentDetailModal from '../components/TreatmentDetailModal';

const Home = ({ onOpenBooking }) => {
  const navigate = useNavigate();
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleExplore = (treatment) => {
    setSelectedTreatment(treatment);
    setIsDetailOpen(true);
  };

  const handleBookTreatment = (title) => {
    onOpenBooking(title);
  };

  const galleryPreview = galleryData.slice(0, 6);

  // Realistic testimonials clearly marked for replacement
  const testimonials = [
    {
      id: 1,
      quote:
        'The Moroccan Bath and Jacuzzi suite were beyond anything I have experienced. The architectural calm and gentle steam made everyday stress simply vanish.',
      author: 'Sophia Al-Mansoor',
      title: 'Private Guest · Dubai',
      rating: 5,
      treatment: 'Moroccan Bath & Jacuzzi Suite',
      tag: '[Placeholder Guest Review · Replace with Verified Client Testimonial]'
    },
    {
      id: 2,
      quote:
        'From the warm botanical oils to the serene acoustic privacy, Mangroove Spa feels like a secluded Moroccan royal palace. Truly world-class hospitality.',
      author: 'Lord Julian Sterling',
      title: 'International Traveler · London',
      rating: 5,
      treatment: 'Hot Oil Massage & Hot Stones',
      tag: '[Placeholder Guest Review · Replace with Verified Client Testimonial]'
    },
    {
      id: 3,
      quote:
        'A masterclass in modern luxury and ancient bathing rituals. The attention to detail, privacy, and therapist touch is unparalleled in the region.',
      author: 'Fatima & Tariq K.',
      title: 'Couples Sanctuary Guests · Abu Dhabi',
      rating: 5,
      treatment: 'Couples Jacuzzi Experience',
      tag: '[Placeholder Guest Review · Replace with Verified Client Testimonial]'
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-[#F5F0E8] font-sans">
      {/* 1. Cinematic Interactive 3D Hero */}
      <Hero3D
        onBookClick={() => onOpenBooking()}
        onExploreClick={() => {
          const section = document.getElementById('treatments-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Short Introduction to Mangroove Spa */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#F5F0E8] text-[#252823] overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(198,166,107,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image in Moroccan Arch Frame (Unique Image) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="p-3 bg-[#E8DDCE] rounded-t-[140px] rounded-b-2xl shadow-xl shadow-[#102F27]/10 border border-[#C6A66B]/30">
                  <div className="overflow-hidden rounded-t-[130px] rounded-b-xl aspect-[3/4] relative">
                    <img
                      src="/images/home-intro-arch.jpg"
                      alt="Mangroove Spa Sanctuary"
                      className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102F27]/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating Seal Badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#102F27] text-[#F5F0E8] p-5 rounded-2xl border border-[#C6A66B] shadow-2xl max-w-[220px]">
                  <Sparkles className="w-5 h-5 text-[#C6A66B] mb-1.5" />
                  <p className="font-display text-xs font-medium leading-snug tracking-wide">
                    Where stillness meets Moroccan royal heritage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Text (Clean Modern Sans-Serif) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DDCE] border border-[#C6A66B]/40 text-[#102F27] text-xs font-display tracking-[0.2em] uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>The Mangroove Philosophy</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#102F27] font-semibold leading-[1.15] tracking-tight">
                A Harmonious Fusion of <br />
                <span className="font-light gold-gradient-text">Minimalist Luxury & Moroccan Heritage.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#252823]/80 leading-relaxed font-normal">
                Nestled in an atmosphere of complete quietude, <strong>Mangroove Spa</strong> was conceived as a sacred refuge from the rush of contemporary life. Here, the architectural serenity of minimalist stone lines blends naturally with the ancient grandeur of Moroccan royal bathing traditions.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#252823]/80 leading-relaxed font-normal">
                Every treatment is an intentional sensory sequence. From heated basalt stones and fragrant argan-infused warm oils to our signature candlelit jacuzzi suites, our therapists provide an immersive sanctuary of restoration, comfort, and uncompromising privacy.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#102F27] hover:text-[#C6A66B] transition-colors border-b-2 border-[#C6A66B] pb-1 group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3 rounded-full bg-[#102F27] hover:bg-[#174D3A] text-[#F5F0E8] font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
                >
                  Book Your Experience
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Signature Treatments (All with distinct unique images) */}
      <section id="treatments-section" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#102F27] text-[#F5F0E8] relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C6A66B_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] mb-3 font-semibold">
              CURATED WELLNESS MENU
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#F5F0E8] font-semibold tracking-tight leading-tight">
              Our Five Signature Rituals
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A66B] mx-auto mt-4 mb-4" />
            <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/80 max-w-xl mx-auto leading-relaxed">
              Explore our core therapeutic experiences, designed to revive muscular ease, purify the skin, and immerse the senses in timeless stillness.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentsData.map((treatment, idx) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-[#0A1E19]/85 border border-[#C6A66B]/25 rounded-2xl overflow-hidden shadow-xl hover:border-[#C6A66B] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Moroccan Arch Top Mask */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E19] via-[#0A1E19]/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#102F27]/90 backdrop-blur-md border border-[#C6A66B]/40 text-[#C6A66B] font-display text-[10px] tracking-widest uppercase font-semibold">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Quick View Button on Hover */}
                  <button
                    onClick={() => handleExplore(treatment)}
                    aria-label={`Explore ${treatment.title}`}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-[#102F27]/80 hover:bg-[#C6A66B] text-[#E8DDCE] hover:text-[#0A1E19] border border-[#C6A66B]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Body (Sans-Serif) */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="font-display text-2xl text-[#F5F0E8] font-medium tracking-tight group-hover:text-[#C6A66B] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/75 line-clamp-3 leading-relaxed">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  {/* Duration & Price Editable Placeholders */}
                  <div className="pt-3 border-t border-[#C6A66B]/15 flex items-center justify-between text-xs text-[#E8DDCE]/60">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>{treatment.duration.split('[')[0]}</span>
                    </div>
                    <span className="text-[#C6A66B] font-display font-medium text-xs">
                      {treatment.price.split('/')[0]}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => handleExplore(treatment)}
                      className="py-2.5 px-3 rounded-lg border border-[#C6A66B]/40 hover:border-[#C6A66B] hover:bg-[#174D3A] text-[#E8DDCE] text-[11px] font-sans font-medium tracking-wider uppercase transition-colors cursor-pointer text-center"
                    >
                      Explore Details
                    </button>
                    <button
                      onClick={() => handleBookTreatment(treatment.title)}
                      className="py-2.5 px-3 rounded-lg bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] text-[11px] font-sans font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer text-center"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 6th Card: Bespoke Journeys */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[#174D3A] to-[#0A1E19] border border-[#C6A66B]/40 rounded-2xl p-8 flex flex-col justify-between text-center shadow-xl"
            >
              <div className="my-auto space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#102F27] border border-[#C6A66B] text-[#C6A66B] flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles className="w-7 h-7 text-[#C6A66B]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F5F0E8] font-semibold tracking-tight">
                  Bespoke Sanctuary Journeys
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/80 max-w-sm mx-auto leading-relaxed">
                  Combine our Moroccan Bath with heated Jacuzzi hydrotherapy and signature hot oil bodywork for an unforgettable private wellness day.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <Link
                  to="/treatments"
                  className="w-full py-3.5 rounded-xl bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-md inline-block"
                >
                  View Complete Treatment Menu
                </Link>
                <button
                  onClick={() => onOpenBooking('Bespoke Sanctuary Package')}
                  className="w-full py-2.5 rounded-xl border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#E8DDCE] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                >
                  Inquire Bespoke Package
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Luxury Spa Experience Section (Unique Jacuzzi Feature Image) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#E8DDCE] text-[#252823] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F0E8] border border-[#C6A66B]/50 text-[#102F27] font-display text-xs tracking-widest uppercase font-semibold">
                <Droplets className="w-3.5 h-3.5 text-[#174D3A]" />
                <span>Private Hydrotherapy Haven</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl text-[#102F27] font-semibold tracking-tight leading-tight">
                The Jacuzzi & Bath Sanctuary
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#252823]/80 leading-relaxed font-normal">
                Step beyond the boundaries of standard wellness into our heated, mineral-charged hydrotherapy environments. Enclosed within Moroccan arched alcoves and illuminated by flickering candlelight, the jacuzzi experience dissolves physical weight and invites quiet reflection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#C6A66B]/30 shadow-sm">
                  <h4 className="font-display text-base font-semibold text-[#102F27] mb-1">Thermal Precision</h4>
                  <p className="font-sans text-xs text-[#252823]/70">
                    Water temperatures calibrated specifically to soothe muscle fibers and release lactic tension.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#C6A66B]/30 shadow-sm">
                  <h4 className="font-display text-base font-semibold text-[#102F27] mb-1">Total Acoustic Privacy</h4>
                  <p className="font-sans text-xs text-[#252823]/70">
                    Acoustically isolated suites ensuring private relaxation without external interruption.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Jacuzzi Experience')}
                  className="px-8 py-3.5 rounded-full bg-[#102F27] hover:bg-[#174D3A] text-[#F5F0E8] font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-lg cursor-pointer"
                >
                  Reserve Jacuzzi Suite
                </button>
              </div>
            </div>

            {/* Right Photo Composition (Unique Jacuzzi Feature Image) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C6A66B]/40 aspect-[4/3]">
                <img
                  src="/images/home-jacuzzi-feature.jpg"
                  alt="Luxury Jacuzzi Suite"
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102F27]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F5F0E8]">
                  <span className="font-display text-[10px] tracking-[0.25em] text-[#C6A66B] uppercase block font-semibold">
                    SANCTUARY AMBIANCE
                  </span>
                  <p className="font-display text-xl sm:text-2xl font-medium tracking-tight">
                    Warm Heated Waters & Moroccan Arch Solitude
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Mangroove Spa (Each with its own distinct visual image) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#102F27] text-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] mb-3 font-semibold">
              THE MANGROOVE STANDARD
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#F5F0E8] font-semibold tracking-tight">
              Why Discerning Guests Choose Us
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A66B] mx-auto mt-4 mb-4" />
            <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/75 max-w-xl mx-auto">
              We reject formulaic mass-market spa protocols in favor of bespoke royal rituals, authentic Moroccan craftsmanship, and genuine hospitality.
            </p>
          </div>

          {/* 4 Core Pillars Cards with Unique Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group rounded-2xl bg-[#0A1E19]/85 border border-[#C6A66B]/25 hover:border-[#C6A66B] transition-all overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/home-pillar-1.jpg"
                  alt="Moroccan Architectural Solitude"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E19] to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#102F27]/90 text-[#C6A66B] border border-[#C6A66B]/40 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-lg text-[#F5F0E8] font-semibold">Moroccan Architectural Solitude</h3>
                <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed">
                  Vaulted arches, natural stone textures, and ambient lighting crafted to lower physiological cortisol within moments.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl bg-[#0A1E19]/85 border border-[#C6A66B]/25 hover:border-[#C6A66B] transition-all overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/home-pillar-2.jpg"
                  alt="100% Organic Botanical Extracts"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E19] to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#102F27]/90 text-[#C6A66B] border border-[#C6A66B]/40 flex items-center justify-center">
                  <Droplets className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-lg text-[#F5F0E8] font-semibold">100% Organic Extracts</h3>
                <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed">
                  Cold-pressed argan oil, eucalyptus essential essences, authentic Moroccan black soap, and pure Atlas clay.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl bg-[#0A1E19]/85 border border-[#C6A66B]/25 hover:border-[#C6A66B] transition-all overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/home-pillar-3.jpg"
                  alt="Absolute Privacy & Discretion"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E19] to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#102F27]/90 text-[#C6A66B] border border-[#C6A66B]/40 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-lg text-[#F5F0E8] font-semibold">Absolute Privacy & Discretion</h3>
                <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed">
                  Dedicated private VIP treatment rooms and jacuzzi suites ensuring your wellness sanctuary remains confidential.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl bg-[#0A1E19]/85 border border-[#C6A66B]/25 hover:border-[#C6A66B] transition-all overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/home-pillar-4.jpg"
                  alt="Certified Master Therapists"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E19] to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#102F27]/90 text-[#C6A66B] border border-[#C6A66B]/40 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-lg text-[#F5F0E8] font-semibold">Certified Master Therapists</h3>
                <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed">
                  Skilled practitioners trained in traditional hammam cleansing, hot stone therapy, and restorative bodywork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Premium Gallery Preview */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#F5F0E8] text-[#252823]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] block mb-2 font-semibold">
                VISUAL SANCTUARY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#102F27] font-semibold tracking-tight">
                Glimpses of Serenity
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#102F27] hover:text-[#C6A66B] border-b-2 border-[#C6A66B] pb-1 transition-colors group"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid Preview (6 distinct images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDCE] border border-[#C6A66B]/30 shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102F27]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F5F0E8]">
                  <span className="font-display text-[10px] tracking-widest text-[#C6A66B] uppercase font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-display text-base font-medium">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0A1E19] text-[#F5F0E8] relative border-y border-[#C6A66B]/20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] block mb-2 font-semibold">
              GUEST REFLECTIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#F5F0E8] font-semibold tracking-tight">
              Words From Our Visitors
            </h2>
            <p className="font-mono text-[11px] text-[#C6A66B]/70 mt-3">
              [Notice: Realistic placeholder reviews below — replace with verified client quotes prior to marketing launch]
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#102F27]/90 border border-[#C6A66B]/30 rounded-2xl p-7 flex flex-col justify-between shadow-xl relative"
              >
                <Quote className="w-8 h-8 text-[#C6A66B]/30 mb-4" />
                <p className="font-sans text-sm sm:text-base text-[#E8DDCE] leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-[#C6A66B]/20 space-y-1.5">
                  <div className="flex items-center gap-1 text-[#C6A66B] mb-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C6A66B]" />
                    ))}
                  </div>
                  <h4 className="font-display text-base text-[#F5F0E8] font-semibold">{t.author}</h4>
                  <p className="font-sans text-xs text-[#E8DDCE]/60">{t.title}</p>
                  <p className="font-mono text-[10px] text-[#C6A66B]/50 pt-1">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Appointment Booking CTA Banner */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-r from-[#174D3A] via-[#102F27] to-[#0A1E19] text-[#F5F0E8] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102F27]/80 border border-[#C6A66B]/40 text-[#C6A66B] font-display text-xs tracking-widest uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Begin Your Journey to Rest</span>
          </span>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#F5F0E8] font-bold leading-tight tracking-tight">
            Reserve Your Private Sanctuary Today.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E8DDCE]/85 max-w-xl mx-auto leading-relaxed font-normal">
            Allow us to prepare your warm botanical oils, heated volcanic stones, and private jacuzzi suite. Advance booking recommended.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-10 py-4 rounded-full bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-[#C6A66B]/20 cursor-pointer"
            >
              Book Your Experience
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-[#C6A66B]/50 hover:border-[#C6A66B] text-[#E8DDCE] font-sans font-semibold text-xs uppercase tracking-widest transition-colors"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Details Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onBookTreatment={handleBookTreatment}
      />
    </div>
  );
};

export default Home;
