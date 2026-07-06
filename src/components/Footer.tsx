import React from 'react';
import { Sparkles, Instagram, Facebook, Star } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onSectionClick: (sectionId: string) => void;
}

export default function Footer({ onSectionClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#130A16] border-t border-purple-theme/50 pt-16 pb-24 lg:pb-12 text-gray-400">
      
      {/* Footer background design */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none transform translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-gold-theme">
          <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onSectionClick('home')}>
              <Logo variant="compact" />
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Experience the unmatched energy of traditional Gujarat Garba and Raas, where expert coaching, rich culture, and premium dance studio amenities unite.
            </p>

            <div className="flex gap-3">
              <a
                href="https://instagram.com/rangtaaliraas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1A0F1E] hover:bg-gradient-to-tr hover:from-gold-theme hover:to-saffron-theme text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-all"
                aria-label="Instagram profile"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com/rangtaaliraas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1A0F1E] hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-all"
                aria-label="Facebook page"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-widest mb-6 relative">
              Academy Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-gold-theme rounded-full" />
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {[
                { name: 'Home Studio', id: 'home' },
                { name: 'Academy Overview', id: 'about' },
                { name: 'Curriculum Details', id: 'why-special' },
                { name: 'Vibrant Gallery', id: 'gallery' },
                { name: 'Contact & Location', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionClick(link.id)}
                    className="hover:text-gold-theme transition-colors cursor-pointer text-left font-light"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Training Programs */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-widest mb-6 relative">
              Training & Batches
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-gold-theme rounded-full" />
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {[
                { name: 'Instructor Roster', id: 'artists' },
                { name: 'Training Methodology', id: 'marketing' },
                { name: 'Class Batches & Pricing', id: 'batches' },
                { name: 'Admission Portal', id: 'contact' },
                { name: 'Corporate Masterclasses', id: 'contact' }
              ].map((serv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSectionClick(serv.id)}
                    className="hover:text-gold-theme transition-colors cursor-pointer text-left font-light"
                  >
                    {serv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Heritage association */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-widest mb-6 relative">
              Heritage Focus
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-gold-theme rounded-full" />
            </h4>
            <div className="p-4 rounded-2xl immersive-glass space-y-3">
              <div className="flex gap-2 text-gold-theme">
                <Sparkles size={16} />
                <span className="text-xs font-bold uppercase tracking-wider font-serif">Authentic mudras</span>
              </div>
              <p className="text-[11px] leading-relaxed font-light text-gray-400">
                Our academy teaches genuine traditional posture, rhythmic timing, circle etiquette, and speed transitions to prepare you perfectly for the festive circles.
              </p>
            </div>
            <div className="text-[10px] text-gray-500 flex items-center gap-1">
              <Star size={10} className="fill-gold-theme text-gold-theme" />
              <span>Safe, Inclusive & Family-Focused Dance Space</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright area */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>© {currentYear} Rang Taali Garba Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-theme transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-theme transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
