import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Artists from './components/Artists';
import Marketing from './components/Marketing';
import ClassBatches from './components/ClassBatches';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';

export default function App() {
  // Shared state to coordinate smooth CTA clicks to prefilled Form values
  const [formInterest, setFormInterest] = useState<string>('Class Booking');
  const [formMessage, setFormMessage] = useState<string>('');

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Find offset to account for sticky header height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // State handlers to guide conversions naturally for Garba Classes
  const triggerClassBooking = (batchId?: string) => {
    setFormInterest(batchId || 'Class Booking');
    setFormMessage('Hello Rang Taali Academy Team, I am extremely interested in joining the Garba Class training batches. Please confirm seat availability, trial timings, and fee payment details.');
    handleScrollToSection('contact');
  };

  const triggerArtistInquiry = (artistName: string) => {
    setFormInterest('General Inquiry');
    setFormMessage(`Hello, I would like to inquire about coaching or feedback from lead instructor ${artistName}. Please let me know how I can book a private feedback session.`);
    handleScrollToSection('contact');
  };

  const triggerEnquiryDefault = () => {
    setFormInterest('Class Booking');
    setFormMessage('');
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen text-gray-200 bg-[#0d0118] selection:bg-amber-500 selection:text-purple-950">
      
      {/* Decorative Golden Ambient Line at the top of the viewport */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-yellow-400 to-rose-600 z-[60]" />

      {/* 1. Header Navigation */}
      <Header
        onEnquireClick={triggerEnquiryDefault}
        onSectionClick={handleScrollToSection}
      />

      {/* 2. Hero Section */}
      <Hero
        onBookClassClick={() => triggerClassBooking()}
        onSponsorClick={() => handleScrollToSection('batches')}
      />

      {/* 3. About Section */}
      <About
        onLearnMoreClick={triggerEnquiryDefault}
      />

      {/* 4. Special Academy Highlights */}
      <Features />

      {/* 5. Garba Instructors/Coaches Section */}
      <Artists
        onBookArtistClick={triggerArtistInquiry}
      />

      {/* 6. Training Methodology Section */}
      <Marketing
        onDiscussClick={() => triggerClassBooking()}
      />

      {/* 7. Class Batches Pricing & Enrollment Desk */}
      <ClassBatches
        onBookClassClick={triggerClassBooking}
      />

      {/* 8. Gallery Section (with share photo support) */}
      <Gallery />

      {/* 9. Testimonials Section */}
      <Testimonials />

      {/* 10. Contact Admission Form Section */}
      <ContactForm
        initialInterest={formInterest}
        initialMessage={formMessage}
      />

      {/* 11. Footer */}
      <Footer
        onSectionClick={handleScrollToSection}
      />

      {/* 12. Floating & Sticky CTAs */}
      <WhatsAppSticky />

    </div>
  );
}
