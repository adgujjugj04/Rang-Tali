import React from 'react';
import { Phone, MessageSquare, ExternalLink } from 'lucide-react';

export default function WhatsAppSticky() {
  const hotlineNumber = '+919825012345';
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=919825012345&text=Hello%20Rang%20Taali%20Raas%20Team!%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire%20about%20Passes%2C%20Sponsorship%20or%20Artist%20bookings.%20Please%20guide%20me.';

  return (
    <>
      {/* 1. Desktop Sticky WhatsApp Button (Bottom-Right, Hidden on small mobile screens to prevent overlapping the mobile bar) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          aria-label="Enquire on WhatsApp"
        >
          {/* Pulse background rings */}
          <span className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-ping opacity-75 pointer-events-none" />
          
          <MessageSquare size={26} className="fill-current" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-[#1A0F1E] border border-white/10 text-white text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 scale-75 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none flex items-center gap-1.5">
            Enquire on WhatsApp <ExternalLink size={11} className="text-green-400" />
          </span>
        </a>
      </div>

      {/* 2. Mobile Sticky Bottom CTA Bar (Only visible on screens < md, floating elegantly above the standard phone bezel) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A0F1E]/90 backdrop-blur-lg border-t border-purple-theme/50 px-4 py-3 shadow-2xl flex gap-3">
        {/* Call hotline */}
        <a
          href={`tel:${hotlineNumber}`}
          className="flex-1 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
        >
          <Phone size={14} className="text-gold-theme" />
          Call Hotline
        </a>

        {/* WhatsApp instant */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg shadow-green-500/10 active:scale-95 transition-all"
        >
          <MessageSquare size={14} className="fill-current" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
