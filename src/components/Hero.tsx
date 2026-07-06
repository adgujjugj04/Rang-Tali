import React from 'react';
import { HERO_CONTENT } from '../data';
import { Music, Users, Heart, Sparkles, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onBookClassClick: () => void;
  onSponsorClick: () => void;
}

export default function Hero({ onBookClassClick, onSponsorClick }: HeroProps) {
  // Map string icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music': return <Music className="text-amber-400" size={18} />;
      case 'Users': return <Users className="text-amber-400" size={18} />;
      case 'Heart': return <Heart className="text-amber-400" size={18} />;
      case 'Sparkles': return <Sparkles className="text-amber-400" size={18} />;
      case 'ShieldCheck': return <ShieldCheck className="text-amber-400" size={18} />;
      default: return <Sparkles className="text-amber-400" size={18} />;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.bgImage}
          alt="Garba Festival Celebration at Night"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Royal Purple & Gold Radial and Linear Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1E] via-[#1A0F1E]/85 to-purple-theme/40 z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#1A0F1E]/60 to-[#1A0F1E] z-10" />
        
        {/* Festive Ambient Sparks Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-600/10 blur-3xl mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl mix-blend-screen animate-pulse duration-5000" />
      </div>

      {/* Decorative Traditional Mandala Ring background */}
      <div className="absolute z-10 opacity-15 pointer-events-none transform translate-y-10 scale-75 lg:scale-110">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-amber-500 animate-[spin_120s_linear_infinite]">
          <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="42" />
          <circle cx="50" cy="50" r="35" strokeDasharray="1 4" />
          <path d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="24" strokeWidth="2" strokeDasharray="2 1" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16">
        {/* Small Intro Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm shadow-inner shadow-amber-500/5 animate-bounce">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          Gujarat's Premium Navratri Experience
          <Star size={12} className="fill-amber-400 text-amber-400" />
        </div>

        {/* Majestic Branded Golden Logo */}
        <Logo variant="full" className="mb-10 transform scale-90 sm:scale-100 hover:scale-[1.02] transition-transform duration-500 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]" />

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto">
          Experience The <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-rose-500 bg-clip-text text-transparent drop-shadow-md">Heartbeat Of Garba</span> With Rang Taali Raas
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {HERO_CONTENT.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onBookClassClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-rose-600 text-purple-950 font-bold text-base tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
          >
            Book Your Class
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onSponsorClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-purple-950/40 hover:bg-purple-900/40 text-amber-400 hover:text-amber-300 font-semibold text-base tracking-wide border border-amber-500/30 hover:border-amber-500/60 shadow-md backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            Explore Class Batches
          </button>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-10 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-400/80 font-semibold mb-6">
            Event Highlights & Safety Measures
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center">
            {HERO_CONTENT.trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm w-full max-w-[150px] transition-all hover:bg-white/10 hover:border-amber-500/20 group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  {getIcon(badge.icon)}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-200 text-center">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional bottom separator divider curve with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A0F1E] to-transparent pointer-events-none" />
    </section>
  );
}
