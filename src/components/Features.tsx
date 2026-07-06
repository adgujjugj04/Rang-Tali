import React from 'react';
import { WHY_SPECIAL_CARDS } from '../data';
import { Music, Users, Star, Sparkles, Calendar, Heart } from 'lucide-react';

export default function Features() {
  // Safe helper to render the correct icon based on state
  const getIcon = (iconName: string) => {
    const iconClass = "text-gold-theme group-hover:text-saffron-theme transition-colors duration-300";
    const size = 28;
    switch (iconName) {
      case 'Music4':
        return <Music className={iconClass} size={size} />;
      case 'Users2':
        return <Users className={iconClass} size={size} />;
      case 'Tv':
        return <Star className={iconClass} size={size} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} size={size} />;
      case 'CalendarCheck':
        return <Calendar className={iconClass} size={size} />;
      case 'ShieldAlert':
        return <Heart className={iconClass} size={size} />;
      default:
        return <Sparkles className={iconClass} size={size} />;
    }
  };

  return (
    <section id="why-special" className="relative py-20 sm:py-28 bg-[#1A0F1E] overflow-hidden">
      {/* Decorative Golden Mandala lines */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none transform translate-x-20 -translate-y-20">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-gold-theme">
          <circle cx="50" cy="50" r="48" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="38" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none transform -translate-x-20 translate-y-20">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-gold-theme">
          <circle cx="50" cy="50" r="48" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="38" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 inline-flex items-center gap-2">
            <span className="w-4 h-1 bg-gold-theme rounded-full" /> 
            Experience Excellence 
            <span className="w-4 h-1 bg-gold-theme rounded-full" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why Rang Taali Raas Is Special
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
            We raise the benchmark of Navratri events with unparalleled scale, meticulous safety, and cultural devotion.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_SPECIAL_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative p-8 rounded-3xl immersive-glass hover:border-gold-theme/40 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-theme/20 glow-purple"
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gold-theme/5 to-saffron-theme/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Gold Ornament Dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gold-theme/40 group-hover:bg-gold-theme group-hover:scale-125 transition-all" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-gold-theme/10 flex items-center justify-center border border-gold-theme/20 mb-6 group-hover:bg-gold-theme/20 group-hover:border-gold-theme/30 transition-all duration-300">
                {getIcon(card.icon)}
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold-theme transition-colors duration-200">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-200">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
