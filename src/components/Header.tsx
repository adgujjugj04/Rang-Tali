import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onEnquireClick: () => void;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({ onEnquireClick, onSectionClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'why-special', 'artists', 'marketing', 'sponsorship', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Curriculum', id: 'why-special' },
    { name: 'Instructors', id: 'artists' },
    { name: 'Methodology', id: 'marketing' },
    { name: 'Class Batches', id: 'batches' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onSectionClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A0F1E]/95 backdrop-blur-md border-b border-gold-theme/30 py-3 shadow-lg shadow-purple-theme/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2 cursor-pointer group animate-fade-in"
          >
            <Logo variant="compact" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Side CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onEnquireClick}
              className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-rose-600 text-purple-950 font-semibold text-sm tracking-wide shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Enquire Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-rose-500 to-amber-500 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1A0F1E]/98 border-b border-gold-theme/30 py-4 shadow-xl backdrop-blur-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-purple-900/40 px-4">
              <button
                onClick={() => {
                  onEnquireClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-purple-950 font-bold text-center flex items-center justify-center gap-2"
              >
                Enquire Now
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
