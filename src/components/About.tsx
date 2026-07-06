import React, { useState } from 'react';
import { ABOUT_CONTENT } from '../data';
import { Check, Sparkles, X, Heart, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface AboutProps {
  onLearnMoreClick: () => void;
}

export default function About({ onLearnMoreClick }: AboutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden bg-[#1A0F1E] mandala-bg">
      {/* Absolute Ambient Lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-theme/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual frame (Image side) */}
          <div className="lg:col-span-5 relative">
            {/* Elegant Cultural Frame borders */}
            <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-gold-theme/20 pointer-events-none" />
            <div className="absolute -inset-2 rounded-[2.25rem] border border-rose-500/10 pointer-events-none" />
            
            {/* The Image container with golden glow & shadow */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-theme/50 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={ABOUT_CONTENT.image}
                alt="Navratri celebration dance circles"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Warm lighting gradient overlay inside the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1E]/80 via-transparent to-[#1A0F1E]/20" />
              
              {/* Float Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl immersive-glass shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-theme/15 flex items-center justify-center border border-gold-theme/30 shrink-0">
                  <Sparkles className="text-gold-theme" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-gold-theme">Elite Choreography</h4>
                  <p className="text-xs text-gray-300 font-light">Master traditional & fusion styling</p>
                </div>
              </div>
            </div>

            {/* Traditional Mandala overlay ornament on bottom right corner of frame */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 text-amber-500/30 animate-[spin_60s_linear_infinite] pointer-events-none hidden sm:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" />
                <path d="M50 0 L50 100 M0 50 L100 50" />
              </svg>
            </div>
          </div>

          {/* Right Column: Copy & lists (Text side) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-500" /> Our Divine Heritage
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              {ABOUT_CONTENT.title}
            </h2>

            {/* Description */}
            <p className="font-sans text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-light">
              {ABOUT_CONTENT.description}
            </p>

            {/* Custom bullet list representing high conversion focus */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_CONTENT.bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Check className="text-amber-400" size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-300 font-normal leading-snug">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* "Know More" CTA Button */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-purple-950 font-semibold text-sm tracking-wide border border-amber-500/30 hover:border-amber-500 shadow-md transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                {ABOUT_CONTENT.ctaText}
                <Sparkles size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Detailed Modal Sheet for "Know More" */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#1A0F1E] border border-gold-theme/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-theme/50 max-h-[90vh] overflow-y-auto">
            
            {/* Header image decorative */}
            <div className="relative h-44 sm:h-52">
              <img
                src={ABOUT_CONTENT.image}
                alt="Rang Taali celebration close up"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1E] to-purple-theme/40" />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-purple-950 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
              
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Heritage & Authenticity</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">Our Devotional Legacy</h3>
              </div>
            </div>

            {/* Details body */}
            <div className="p-6 sm:p-8 space-y-6 text-gray-300">
              <p className="text-sm sm:text-base leading-relaxed font-light">
                Rang Taali Raas was founded with a singular, noble vision: to revive and protect the authentic roots of Gujarati folk dance and religious devotion during the auspicious nights of Navratri, while matching modern comfort standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 p-4 rounded-xl bg-purple-950/40 border border-purple-900/30">
                  <Heart className="text-amber-400 shrink-0" size={20} />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-amber-300">Absolute Safety</h4>
                    <p className="text-xs text-gray-400 mt-1">Rigid security, emergency medical desks, and continuous CCTV surveillance.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-xl bg-purple-950/40 border border-purple-900/30">
                  <Clock className="text-amber-400 shrink-0" size={20} />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-amber-300">Authentic Timings</h4>
                    <p className="text-xs text-gray-400 mt-1">Traditional midnight Maha-Aarti followed by high energy circles till the lawful limits.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-xl bg-purple-950/40 border border-purple-900/30">
                  <ShieldCheck className="text-amber-400 shrink-0" size={20} />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-amber-300">Academy ID Cards</h4>
                    <p className="text-xs text-gray-400 mt-1">Receive a physical barcoded ID card upon registration for seamless studio entry.</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-xl bg-purple-950/40 border border-purple-900/30">
                  <MapPin className="text-amber-400 shrink-0" size={20} />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-amber-300">Premium Location</h4>
                    <p className="text-xs text-gray-400 mt-1">Prime high-capacity central ground with ample safe parking space.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-purple-950 font-semibold text-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  I'm Interested!
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
