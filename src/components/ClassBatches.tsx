import React, { useState } from 'react';
import { BATCH_DATA } from '../data';
import { Batch } from '../types';
import { CheckCircle2, ShieldCheck, HelpCircle, Clock, User, Award, Users } from 'lucide-react';

interface ClassBatchesProps {
  onBookClassClick: (batchId: string, batchName: string) => void;
}

export default function ClassBatches({ onBookClassClick }: ClassBatchesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Beginner', 'Girls Only', 'Intermediate', 'Advanced', 'Custom / Weekend'];

  const filteredBatches = activeCategory === 'All'
    ? BATCH_DATA
    : BATCH_DATA.filter(b => b.category === activeCategory);

  return (
    <section id="sponsorship" className="relative py-20 sm:py-28 bg-[#1A0F1E] mandala-bg overflow-hidden border-t border-purple-theme/50">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold-theme/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 inline-flex items-center gap-2">
            <span className="w-4 h-1 bg-gold-theme rounded-full" /> 
            Academy Batches 
            <span className="w-4 h-1 bg-gold-theme rounded-full" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Select Your Garba Training Batch
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Choose from six daily training batches available between 6:00 PM and 10:00 PM, including specialized girls-only slots and custom weekend sessions.
          </p>
        </div>

        {/* Benefits Section Split */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 bg-[#1A0F1E]/80 border border-gold-theme/10 p-8 sm:p-10 rounded-3xl shadow-xl backdrop-blur-md">
          <div className="lg:col-span-5">
            <div className="p-3 bg-gold-theme/10 border border-gold-theme/20 text-gold-theme text-xs font-semibold tracking-wider uppercase rounded-xl inline-block mb-4">
              Premium Dance Academy Benefits
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Learn Symmetrical Circles & Power Spins
            </h3>
            <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-6">
              Our structured academy curriculum covers everything from initial hand coordination to complex speed loops, so you are fully prepared to lead the circles this Navratri.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/30 border border-white/5">
              <ShieldCheck className="text-gold-theme shrink-0" size={24} />
              <div className="text-xs sm:text-sm font-medium text-gray-300">
                100% Secure, Supportive & High-Energy Training Environment.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Step-by-step breakdown of complex loops",
                "Dedicated Girls-Only Batches for privacy",
                "Advanced Dodhiya (6, 12, 18 steps)",
                "Custom couple choreography workshops",
                "Postural alignment & stamina building",
                "Live dhol beats drum coordination"
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-gold-theme shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-gray-300 font-light leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold-theme text-purple-theme shadow-md shadow-gold-theme/20 font-bold'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-gold-theme/20'
              }`}
            >
              {cat} {cat === 'Girls Only' && '👩'}
            </button>
          ))}
        </div>

        {/* Six Batch Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBatches.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 shadow-xl ${
                plan.recommended
                  ? 'bg-gradient-to-b from-[#2A0134] to-[#1A0F1E] border-2 border-gold-theme scale-102 z-10 glow-gold'
                  : 'immersive-glass hover:border-gold-theme/40'
              }`}
            >
              {/* Highlight ribbon for Girls-Only / Recommended */}
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-theme to-saffron-theme text-purple-theme text-[10px] sm:text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Most Popular Slot 👩
                </div>
              )}

              {/* Top Section */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-theme font-extrabold px-2.5 py-1 rounded-md bg-gold-theme/10 border border-gold-theme/20 inline-block mb-3">
                  {plan.category} Batch
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
                  {plan.name}
                </h3>

                {/* Timing Badge */}
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-4 bg-white/5 p-2 rounded-xl border border-white/5">
                  <Clock size={14} className="text-gold-theme" />
                  <span className="font-medium">{plan.timing}</span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-2xl sm:text-3xl font-black text-white">{plan.price}</span>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Instructor & Spots Details */}
                <div className="border-t border-white/10 my-4 pt-4 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 flex items-center gap-1.5"><User size={12} className="text-gold-theme" /> Instructor:</span>
                    <span className="text-white font-medium">{plan.instructor}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 flex items-center gap-1.5"><Users size={12} className="text-gold-theme" /> Seats Remaining:</span>
                    <span className="text-rose-400 font-extrabold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">{plan.spotsLeft} spots left</span>
                  </div>
                </div>

                {/* Benefits list */}
                <div className="border-t border-white/10 my-4 pt-4">
                  <h4 className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3">What you'll master:</h4>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs text-gray-300">
                        <CheckCircle2 className="text-gold-theme shrink-0 mt-0.5" size={12} />
                        <span className="font-light leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => onBookClassClick(plan.id, plan.name)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-gold-theme via-gold-theme to-saffron-theme text-purple-theme shadow-md shadow-gold-theme/20 hover:scale-105'
                      : 'bg-gold-theme/10 hover:bg-gold-theme/20 text-gold-theme border border-gold-theme/30 hover:border-gold-theme/50'
                  }`}
                >
                  Book Your Class
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Help box */}
        <div className="text-center mt-12 text-xs sm:text-sm text-gray-400 font-light flex items-center justify-center gap-2">
          <HelpCircle size={16} className="text-gold-theme" />
          <span>Need customized private group sessions or trial slot details? Contact our support desk directly.</span>
        </div>

      </div>
    </section>
  );
}
