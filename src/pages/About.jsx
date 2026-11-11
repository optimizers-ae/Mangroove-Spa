import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, ShieldCheck, HeartHandshake, Compass, Leaf, ArrowRight, Sun, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const About = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-[#F5F0E8] text-[#252823] font-sans">
      {/* 1. Cinematic Page Hero with Background Image */}
      <PageHero
        badge="THE STORY OF MANGROOVE SPA"
        title="A Sanctuary Built on Stillness &"
        highlightTitle="Moroccan Royal Grandeur."
        description="Conceived as an antidote to modern sensory overload, Mangroove Spa invites you into an architectural haven where ancient bathing rituals and modern minimalist luxury exist in quiet harmony."
        bgImage="/images/hero-about-bg.jpg"
        icon={Sparkles}
        actionButton={
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-full bg-[#C6A66B] hover:bg-[#E0C79B] text-[#0A1E19] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-[#C6A66B]/20 cursor-pointer"
          >
            Reserve Your Visit
          </button>
        }
      />

      {/* 2. Brand Introduction & Philosophy */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-semibold block">
              OUR ESSENCE & PURPOSE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#102F27] font-semibold tracking-tight leading-tight">
              Honoring the Ritual of Deep Physical & Mental Renewal.
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A66B]" />
            <p className="font-sans text-sm sm:text-base text-[#252823]/80 leading-relaxed font-normal">
              At Mangroove Spa, wellness is not viewed as a brief luxury; it is treated as an essential, restorative art. Our space was designed around the quiet resilience of the mangrove tree—grounded, nurturing, and intimately connected to life-giving waters.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#252823]/80 leading-relaxed font-normal">
              Every curve of our Moroccan arches, the resonance of gentle water features, and the amber glow of ambient lighting have been curated to guide your breath into deeper rhythm from the moment you arrive.
            </p>

            {/* Three Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#C6A66B]/20">
              <div>
                <span className="font-display text-xs tracking-widest uppercase text-[#102F27] font-semibold block mb-1">
                  I. Elemental Water
                </span>
                <p className="font-sans text-xs text-[#252823]/70 leading-relaxed">
                  Hydrotherapy in mineral jacuzzis and eucalyptus steam that decompresses joints and lifts fatigue.
                </p>
              </div>
              <div>
                <span className="font-display text-xs tracking-widest uppercase text-[#102F27] font-semibold block mb-1">
                  II. Botanical Oils
                </span>
                <p className="font-sans text-xs text-[#252823]/70 leading-relaxed">
                  Pure organic cold-pressed argan, eucalyptus, and warm carrier oils formulated for maximum cellular hydration.
                </p>
              </div>
              <div>
                <span className="font-display text-xs tracking-widest uppercase text-[#102F27] font-semibold block mb-1">
                  III. Sacred Touch
                </span>
                <p className="font-sans text-xs text-[#252823]/70 leading-relaxed">
                  Attentive, intuitive therapeutic techniques tailored precisely to your comfort and individual anatomy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Composition (Unique Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-[#C6A66B]/40 bg-[#E8DDCE] p-2">
              <div className="overflow-hidden rounded-t-[130px] rounded-b-xl aspect-[4/5]">
                <img
                  src="/images/about-story.jpg"
                  alt="Mangroove Spa Philosophy Environment"
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Commitment to Customer Comfort (All cards with unique distinct photos) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#E8DDCE] text-[#252823]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-[#102F27] mb-2 block font-semibold">
              UNCOMPROMISING HOSPITALITY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#102F27] font-semibold tracking-tight">
              Our Commitment to Your Comfort
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A66B] mx-auto mt-4 mb-4" />
            <p className="font-sans text-xs sm:text-sm text-[#252823]/75 max-w-xl mx-auto">
              From acoustic silence to temperature personalization, our environment is tailored to ensure you feel respected, serene, and entirely cared for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[#F5F0E8] border border-[#C6A66B]/40 shadow-md overflow-hidden flex flex-col justify-between group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about-comfort-privacy.jpg"
                  alt="Private Sanctuaries"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl text-[#102F27] font-semibold">Private Sanctuaries</h3>
                <p className="font-sans text-xs sm:text-sm text-[#252823]/70 leading-relaxed font-normal">
                  All treatments take place in dedicated suites equipped with private changing quarters and personal showers for total discretion.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F0E8] border border-[#C6A66B]/40 shadow-md overflow-hidden flex flex-col justify-between group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about-comfort-oils.jpg"
                  alt="Customized Pressure & Oils"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center shadow-lg">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl text-[#102F27] font-semibold">Customized Pressure & Oils</h3>
                <p className="font-sans text-xs sm:text-sm text-[#252823]/70 leading-relaxed font-normal">
                  Prior to every ritual, therapists consult with you on pressure preferences, focal muscle areas, and aromatherapy scents.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F0E8] border border-[#C6A66B]/40 shadow-md overflow-hidden flex flex-col justify-between group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about-comfort-acoustic.jpg"
                  alt="Acoustic & Thermal Harmony"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#102F27] text-[#C6A66B] flex items-center justify-center shadow-lg">
                  <Sun className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl text-[#102F27] font-semibold">Acoustic & Thermal Harmony</h3>
                <p className="font-sans text-xs sm:text-sm text-[#252823]/70 leading-relaxed font-normal">
                  Carefully sound-insulated architecture, soothing Moroccan ambient soundscapes, and individually heated massage tables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Architectural Spa Environment (Each with unique distinct photos) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#102F27] text-[#F5F0E8]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-[#C6A66B] mb-2 block font-semibold">
              DESIGN DIRECTION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#F5F0E8] font-semibold tracking-tight">
              Architecture as an Instrument of Healing
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A66B] mx-auto mt-4 mb-4" />
            <p className="font-sans text-xs sm:text-sm text-[#E8DDCE]/75 max-w-xl mx-auto">
              A curated harmony of natural limestone, warm alabaster illumination, Moroccan horseshoe arches, and living greenery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#C6A66B]/30">
                <img
                  src="/images/about-arch.jpg"
                  alt="Moroccan Arches"
                  className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-xl text-[#F5F0E8] font-semibold">The Royal Moroccan Arch</h3>
              <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed font-normal">
                Sculpted arches frame pathways and treatment thresholds, serving as symbolic portals from the outside world into inward stillness.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#C6A66B]/30">
                <img
                  src="/images/about-jacuzzi.jpg"
                  alt="Hydrotherapy Jacuzzi"
                  className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-xl text-[#F5F0E8] font-semibold">Heated Water Features</h3>
              <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed font-normal">
                Custom jacuzzi pools with soft aquatic reflections and ambient candlelight designed to quieten neural chatter.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#C6A66B]/30">
                <img
                  src="/images/about-marble.jpg"
                  alt="Hammam Marble"
                  className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-xl text-[#F5F0E8] font-semibold">Heated Marble Chambers</h3>
              <p className="font-sans text-xs text-[#E8DDCE]/70 leading-relaxed font-normal">
                Smooth natural stone slabs that radiate gentle heat during our traditional Moroccan bath and body exfoliation rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A Day at Mangroove Spa: The Guest Journey */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#F5F0E8] text-[#252823]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-display text-xs tracking-[0.25em] text-[#C6A66B] uppercase font-semibold block mb-2">
              THE GUEST EXPERIENCE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#102F27] font-semibold tracking-tight">
              Your Journey Through the Sanctuary
            </h2>
            <div className="w-16 h-[2px] bg-[#C6A66B] mx-auto mt-4 mb-4" />
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-[1px] before:bg-[#C6A66B]/30">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/2 md:text-right md:pr-10">
                <span className="font-display text-xs text-[#C6A66B] tracking-widest uppercase block mb-1 font-semibold">Phase 01</span>
                <h4 className="font-display text-2xl text-[#102F27] font-semibold">Arrival & Herbal Welcoming</h4>
                <p className="font-sans text-xs text-[#252823]/70 mt-1 font-normal">
                  Step through our arches into acoustic stillness, greeted with warm botanical oshibori towels and fresh Moroccan mint infusion.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#102F27] text-[#C6A66B] border-2 border-[#C6A66B] flex items-center justify-center font-mono text-sm z-10 flex-shrink-0 font-bold">
                01
              </div>
              <div className="md:w-1/2 md:pl-10" />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/2 md:text-right md:pr-10 md:hidden" />
              <div className="w-12 h-12 rounded-full bg-[#102F27] text-[#C6A66B] border-2 border-[#C6A66B] flex items-center justify-center font-mono text-sm z-10 flex-shrink-0 md:order-2 font-bold">
                02
              </div>
              <div className="md:w-1/2 md:pl-10 md:order-3">
                <span className="font-display text-xs text-[#C6A66B] tracking-widest uppercase block mb-1 font-semibold">Phase 02</span>
                <h4 className="font-display text-2xl text-[#102F27] font-semibold">The Thermal Transition</h4>
                <p className="font-sans text-xs text-[#252823]/70 mt-1 font-normal">
                  Enjoy time in the heated jacuzzi or eucalyptus steam chamber to prepare your muscular tissue and open your respiratory pathways.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-10 hidden md:block md:order-1" />
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/2 md:text-right md:pr-10">
                <span className="font-display text-xs text-[#C6A66B] tracking-widest uppercase block mb-1 font-semibold">Phase 03</span>
                <h4 className="font-display text-2xl text-[#102F27] font-semibold">The Signature Ritual</h4>
                <p className="font-sans text-xs text-[#252823]/70 mt-1 font-normal">
                  Your certified therapist carries out your chosen treatment—whether hot volcanic stones, warm botanical oil strokes, or authentic Moroccan bath scrub.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#102F27] text-[#C6A66B] border-2 border-[#C6A66B] flex items-center justify-center font-mono text-sm z-10 flex-shrink-0 font-bold">
                03
              </div>
              <div className="md:w-1/2 md:pl-10" />
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="md:w-1/2 md:text-right md:pr-10 md:hidden" />
              <div className="w-12 h-12 rounded-full bg-[#102F27] text-[#C6A66B] border-2 border-[#C6A66B] flex items-center justify-center font-mono text-sm z-10 flex-shrink-0 md:order-2 font-bold">
                04
              </div>
              <div className="md:w-1/2 md:pl-10 md:order-3">
                <span className="font-display text-xs text-[#C6A66B] tracking-widest uppercase block mb-1 font-semibold">Phase 04</span>
                <h4 className="font-display text-2xl text-[#102F27] font-semibold">Quiet Awakening & Refreshment</h4>
                <p className="font-sans text-xs text-[#252823]/70 mt-1 font-normal">
                  Conclude your visit in our silent relaxation lounge with dates, dried figs, and mineral refreshments before returning to the world renewed.
                </p>
              </div>
              <div className="md:w-1/2 md:pr-10 hidden md:block md:order-1" />
            </div>
          </div>

          <div className="text-center pt-16">
            <button
              onClick={() => onOpenBooking()}
              className="px-10 py-4 rounded-full bg-[#102F27] hover:bg-[#174D3A] text-[#F5F0E8] font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-xl cursor-pointer"
            >
              Reserve Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
