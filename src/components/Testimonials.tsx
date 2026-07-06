import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-[#1A0F1E] mandala-bg border-t border-purple-theme/50">
      {/* Absolute Ambient lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-theme/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gold-theme/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 inline-flex items-center gap-2">
            <span className="w-4 h-1 bg-gold-theme rounded-full" /> 
            Event Feedback 
            <span className="w-4 h-1 bg-gold-theme rounded-full" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What People Say
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
            Read heartfelt words from local Garba enthusiasts, cultural fashion critics, and corporate business sponsors.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-3xl immersive-glass shadow-xl flex flex-col justify-between group hover:border-gold-theme/30 transition-all duration-300"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-8 text-purple-theme/40 pointer-events-none group-hover:text-gold-theme/10 transition-colors duration-300">
                <Quote size={40} className="fill-current" />
              </div>

              <div>
                {/* Stars Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-theme text-gold-theme" />
                  ))}
                </div>

                {/* Review */}
                <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                {/* Avatar circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-theme to-saffron-theme flex items-center justify-center text-purple-theme font-serif font-bold text-sm tracking-wide border border-gold-theme/30">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-gold-theme transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role} {item.company && `• ${item.company}`}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
