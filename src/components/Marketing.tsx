import React from 'react';
import { METHODOLOGY_CARDS } from '../data';
import { Share2, Video, Award, MessageSquare, Layers, Megaphone, ArrowRight, TrendingUp, Sparkles, Youtube, Users, Target } from 'lucide-react';

interface MarketingProps {
  onDiscussClick: () => void;
}

export default function Marketing({ onDiscussClick }: MarketingProps) {
  // Safe helper to render correct icon based on state
  const getIcon = (iconName: string) => {
    const iconClass = "text-gold-theme group-hover:text-saffron-theme transition-colors duration-300";
    const size = 24;
    switch (iconName) {
      case 'Layers':
        return <Layers className={iconClass} size={size} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} size={size} />;
      case 'Music':
        return <MessageSquare className={iconClass} size={size} />; // Fallback icon or change to appropriate
      case 'Youtube':
        return <Video className={iconClass} size={size} />;
      case 'Users':
        return <Users className={iconClass} size={size} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} size={size} />;
      default:
        return <Target className={iconClass} size={size} />;
    }
  };

  return (
    <section id="marketing" className="relative py-20 sm:py-28 bg-[#1A0F1E] overflow-hidden border-t border-purple-theme/50">
      {/* Dynamic Grid Overlay decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold-theme" /> Structured Choreography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our Professional Training Methodology
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-2xl leading-relaxed">
              We slow down complex classical steps, refine your body posture, and practice rhythm drills so you can enter any festival circle as a highly confident Garba leader.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onDiscussClick}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-theme to-saffron-theme text-purple-theme font-bold text-sm tracking-wide shadow-lg shadow-gold-theme/10 hover:shadow-gold-theme/30 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              Book Your Free Demo
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 6 Methodology Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {METHODOLOGY_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative p-6 sm:p-8 rounded-3xl immersive-glass hover:border-gold-theme/40 transition-all duration-300 shadow-md shadow-purple-theme/40"
            >
              {/* Top border ambient highlight on hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-gold-theme to-saffron-theme opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex gap-5">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-gold-theme/5 flex items-center justify-center border border-gold-theme/10 group-hover:bg-gold-theme/10 group-hover:border-gold-theme/30 transition-all shrink-0">
                  {getIcon(card.icon)}
                </div>

                {/* Card Content */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold-theme transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats highlight ribbon */}
        <div className="rounded-3xl immersive-glass border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-saffron-theme/10 flex items-center justify-center text-saffron-theme shrink-0 border border-saffron-theme/20">
              <TrendingUp size={22} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">Guaranteed Skill Mastery</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light mt-0.5">We track your rhythmic coordination, postural balance, and turn speed to build elite confidence.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 divide-x divide-white/10">
            <div className="px-4 text-center md:text-left">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-gold-theme">1,200+</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Graduated Students</span>
            </div>
            <div className="pl-6 text-center md:text-left">
              <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-saffron-theme">100%</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Rhythm Confidence</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

