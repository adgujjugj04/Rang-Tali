import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'simple';
  className?: string;
}

export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  // Sparkle SVG ornament
  const Sparkle = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold-theme animate-pulse absolute pointer-events-none">
      <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" fill="currentColor" />
    </svg>
  );

  // Top Crown Mandala SVG for full variant
  const LogoCrown = () => (
    <div className="flex justify-center mb-1">
      <svg width="64" height="40" viewBox="0 0 100 60" fill="none" className="text-gold-theme filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] animate-[pulse_3s_infinite]">
        {/* Crown base */}
        <path d="M10 50 C 30 55, 70 55, 90 50 L 85 45 C 65 48, 35 48, 15 45 Z" fill="currentColor" opacity="0.9" />
        <path d="M30 48 Q 50 51, 70 48" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
        
        {/* Radiating spikes */}
        <path d="M50 48 L50 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="12" r="3.5" fill="currentColor" />
        
        <path d="M40 48 L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="17" r="3" fill="currentColor" />
        
        <path d="M60 48 L68 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="68" cy="17" r="3" fill="currentColor" />
        
        <path d="M30 48 L20 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="24" r="2.5" fill="currentColor" />
        
        <path d="M70 48 L80 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="80" cy="24" r="2.5" fill="currentColor" />

        {/* Arches connecting */}
        <path d="M20 24 Q 32 17, 50 12 Q 68 17, 80 24" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M32 17 Q 50 12, 68 17" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
        
        {/* Little decorative core element */}
        <circle cx="50" cy="38" r="6" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="38" r="2" fill="currentColor" />
      </svg>
    </div>
  );

  // Hanging Dandyas component (authentically represents the sticks in the logo)
  const HangingDandyas = () => (
    <div className="absolute right-[-24px] sm:right-[-32px] bottom-[20%] w-12 h-32 flex items-center justify-center pointer-events-none select-none z-10">
      {/* Dandiya stick 1 */}
      <div 
        className="absolute w-2 h-24 rounded-full bg-gradient-to-b from-amber-200 via-gold-theme to-amber-600 border border-amber-900/40 shadow-lg transform rotate-[15deg] origin-top-left"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FF9933, #FF9933 4px, #FFF5C3 4px, #FFF5C3 8px, #D4AF37 8px, #D4AF37 12px)`
        }}
      >
        {/* Red tassel at the bottom */}
        <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          <div className="w-2.5 h-4 bg-rose-600 rounded-b-md shadow-md" />
        </div>
      </div>
      
      {/* Dandiya stick 2 */}
      <div 
        className="absolute w-2 h-24 rounded-full bg-gradient-to-b from-amber-200 via-gold-theme to-amber-600 border border-amber-900/40 shadow-lg transform rotate-[32deg] origin-top-left translate-x-2"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, #FF9933, #FF9933 4px, #FFF5C3 4px, #FFF5C3 8px, #D4AF37 8px, #D4AF37 12px)`
        }}
      >
        {/* Red tassel at the bottom */}
        <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          <div className="w-2.5 h-4 bg-rose-600 rounded-b-md shadow-md animate-bounce" />
        </div>
      </div>
    </div>
  );

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
        
        {/* Top crown */}
        <LogoCrown />

        {/* Main "રંગતાલી" calligraphic element */}
        <div className="relative inline-block mb-3 px-4">
          
          {/* Sparkles around text */}
          <div className="absolute top-[-10px] left-2 animate-pulse"><Sparkle /></div>
          <div className="absolute bottom-[-5px] right-[40%] animate-pulse" style={{ animationDelay: '1.5s' }}><Sparkle /></div>

          {/* Sparkle on Anusvara (the dot over the ર) */}
          <div className="absolute top-[8px] left-[15%] w-3 h-3 bg-white rounded-full blur-[1px] animate-ping" />
          <div className="absolute top-[9px] left-[16%] w-2 h-2 bg-yellow-200 rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]" />

          {/* Rich textured 3D Gold Text */}
          <h2 className="font-gujarati-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] via-[#E2B755] to-[#996D19] bg-clip-text text-transparent filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] drop-shadow-[0_0_20px_rgba(212,175,55,0.35)] select-none">
            રંગતાલી
          </h2>

          {/* Beautiful side-hanging dandyas */}
          <HangingDandyas />
        </div>

        {/* Subtitle "ગરબા કલાસ" with wings */}
        <div className="flex items-center justify-center gap-3 w-full max-w-md px-4 mt-1">
          {/* Left Wing Decorative Line */}
          <div className="flex-1 flex items-center justify-end">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-gold-theme/80" />
            <span className="text-[10px] text-gold-theme ml-1">✦</span>
          </div>

          {/* Subtitle Text */}
          <span className="font-gujarati-sans text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] bg-gradient-to-r from-yellow-200 via-gold-theme to-saffron-theme bg-clip-text text-transparent filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap pl-2">
            ગરબા કલાસ
          </span>

          {/* Right Wing Decorative Line */}
          <div className="flex-1 flex items-center justify-start">
            <span className="text-[10px] text-gold-theme mr-1">✦</span>
            <div className="h-[1px] w-full bg-gradient-to-r from-gold-theme/80 to-transparent" />
          </div>
        </div>

        {/* Bottom separator mandala core */}
        <div className="flex items-center justify-center gap-2 w-1/3 max-w-xs mt-3 opacity-60">
          <div className="h-[1px] flex-1 bg-gold-theme/30" />
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-gold-theme">
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M12 0 L12 24 M0 12 L24 12" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="h-[1px] flex-1 bg-gold-theme/30" />
        </div>

      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 cursor-pointer group select-none ${className}`}>
        {/* Animated Brand Mascot Icon or Miniature Crown */}
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-purple-theme to-maroon-theme flex items-center justify-center border-2 border-gold-theme/50 shadow-md group-hover:border-gold-theme transition-all shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold-theme">
            <path d="M4 18 C 8 20, 16 20, 20 18 L 18 16 C 14 17, 10 17, 6 16 Z" fill="currentColor" />
            <path d="M12 16 L12 4 M8 16 L5 7 M16 16 L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="3" r="1.5" fill="currentColor" />
            <circle cx="5" cy="6" r="1.5" fill="currentColor" />
            <circle cx="19" cy="6" r="1.5" fill="currentColor" />
          </svg>
          <div className="absolute inset-0 rounded-full border border-gold-theme/20 animate-ping opacity-30 group-hover:opacity-60" />
        </div>

        {/* Text stack */}
        <div className="flex flex-col">
          <span className="font-gujarati-display text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#FFFDF0] via-[#E2B755] to-gold-theme bg-clip-text text-transparent filter drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)] -mb-1 leading-none">
            રંગતાલી
          </span>
          <span className="font-gujarati-sans text-[9px] tracking-[0.18em] uppercase text-gold-theme font-extrabold flex items-center gap-1">
            ગરબા કલાસ <span className="text-[7px]">✦</span> ACADEMY
          </span>
        </div>
      </div>
    );
  }

  // Simple clean typography variant
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <span className="font-gujarati-display text-2xl sm:text-3xl font-black tracking-wide bg-gradient-to-r from-yellow-100 via-gold-theme to-saffron-theme bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] -mb-0.5 leading-none">
        રંગતાલી
      </span>
      <span className="font-gujarati-sans text-[8px] tracking-[0.2em] text-gray-400 font-bold uppercase">
        ગરબા કલાસ
      </span>
    </div>
  );
}
