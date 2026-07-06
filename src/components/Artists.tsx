import React from 'react';
import { ARTISTS_DATA } from '../data';
import { Calendar, Award, Music, ArrowRight } from 'lucide-react';
import { Artist } from '../types';

interface ArtistsProps {
  onBookArtistClick: (artistName: string) => void;
}

export default function Artists({ onBookArtistClick }: ArtistsProps) {
  return (
    <section id="artists" className="relative py-20 sm:py-28 bg-[#1A0F1E] mandala-bg border-t border-purple-theme/50">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-theme/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 inline-flex items-center gap-2">
            <span className="w-4 h-1 bg-gold-theme rounded-full" /> 
            Cultural Legends 
            <span className="w-4 h-1 bg-gold-theme rounded-full" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Garba Artists & Performers
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
            Book talented Garba artists, folk performers, dhol players, anchors and cultural teams for your Navratri event.
          </p>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {ARTISTS_DATA.map((artist: Artist) => (
            <div
              key={artist.id}
              className="flex flex-col immersive-glass rounded-3xl overflow-hidden shadow-xl hover:border-gold-theme/40 transition-all duration-300 group"
            >
              {/* Image with overlay tags */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1E] via-transparent to-[#1A0F1E]/20" />
                
                {/* Float Role badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-theme text-purple-theme text-xs font-bold uppercase tracking-wider shadow-md">
                  {artist.role}
                </div>

                {/* Float Experience Badge */}
                <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-gray-200 text-[11px] font-medium flex items-center gap-1.5 border border-white/10">
                  <Award size={12} className="text-gold-theme" />
                  {artist.experience}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Name */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-gold-theme transition-colors">
                    {artist.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {artist.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-theme text-gold-theme border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-light">
                    {artist.description}
                  </p>
                </div>

                {/* CTA callback Button */}
                <button
                  onClick={() => onBookArtistClick(artist.name)}
                  className="w-full py-3 rounded-2xl bg-gold-theme/10 hover:bg-gold-theme text-gold-theme hover:text-purple-theme font-semibold text-sm tracking-wide border border-gold-theme/20 hover:border-gold-theme transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                >
                  Book {artist.role} Now
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
