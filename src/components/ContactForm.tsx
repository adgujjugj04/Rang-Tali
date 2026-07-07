import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, ExternalLink, Instagram, Facebook, AlertCircle, Upload, Image as ImageIcon, Sparkles, User, Award, ShieldCheck, Printer } from 'lucide-react';
import { Inquiry } from '../types';
import { BATCH_DATA } from '../data';
import Logo from './Logo';

interface ContactFormProps {
  initialInterest?: string;
  initialMessage?: string;
}

export default function ContactForm({ initialInterest = 'Class Booking', initialMessage = '' }: ContactFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // Mobile number
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [address, setAddress] = useState('');
  const [interest, setInterest] = useState('Class Booking');
  const [selectedBatch, setSelectedBatch] = useState(BATCH_DATA[0].id);
  const [experienceLevel, setExperienceLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [message, setMessage] = useState('');
  
  // Photo Upload State
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validation / Feedback State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState<string>('');
  const [pastInquiries, setPastInquiries] = useState<Inquiry[]>([]);

  // Pre-fill fields when parent updates props (e.g. clicking a batch CTA)
  useEffect(() => {
    if (initialInterest) {
      if (initialInterest.includes('batch-') || BATCH_DATA.some(b => b.id === initialInterest)) {
        setInterest('Class Booking');
        setSelectedBatch(initialInterest);
      } else {
        setInterest(initialInterest);
      }
    }
  }, [initialInterest]);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  // Load past submissions from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('rang_taali_class_inquiries');
    if (stored) {
      try {
        setPastInquiries(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Drag and Drop Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrors(prev => ({ ...prev, photo: 'Please upload an image file' }));
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, photo: 'Image size should be less than 3MB' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPhotoUrl(e.target.result as string);
        setErrors(prev => {
          const temp = { ...prev };
          delete temp.photo;
          return temp;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = () => {
    setPhotoUrl('');
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Full Name is required';
    
    if (!phone.trim()) {
      tempErrors.phone = 'Mobile number is required';
    } else if (!/^[0-9+() \-]{10,15}$/.test(phone.trim())) {
      tempErrors.phone = 'Please enter a valid mobile number';
    }

    if (!whatsappNumber.trim()) {
      tempErrors.whatsappNumber = 'WhatsApp number is required';
    } else if (!/^[0-9+() \-]{10,15}$/.test(whatsappNumber.trim())) {
      tempErrors.whatsappNumber = 'Please enter a valid WhatsApp number';
    }

    if (!address.trim()) {
      tempErrors.address = 'Student Address is required';
    }

    if (!photoUrl) {
      tempErrors.photo = 'Please add a profile photo for your Academy ID card';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const chosenBatchObj = BATCH_DATA.find(b => b.id === selectedBatch);

    const inquiryId = `inq-${Date.now()}`;
    const newInquiry: Inquiry = {
      id: inquiryId,
      name: name.trim(),
      phone: phone.trim(),
      whatsappNumber: whatsappNumber.trim(),
      address: address.trim(),
      interest: interest as any,
      message: message.trim() || `Enrolling in ${chosenBatchObj?.name || 'Garba Class'}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString(),
      status: 'Received',
      batchId: selectedBatch,
      userPhoto: photoUrl,
      experienceLevel: experienceLevel
    };

    const updatedInquiries = [newInquiry, ...pastInquiries];
    setPastInquiries(updatedInquiries);
    localStorage.setItem('rang_taali_class_inquiries', JSON.stringify(updatedInquiries));

    setLastSubmittedId(inquiryId);
    setIsSubmitted(true);
    setErrors({});
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setWhatsappNumber('');
    setAddress('');
    setMessage('');
    setPhotoUrl('');
    setIsSubmitted(false);
    setLastSubmittedId('');
  };

  // Immediate WhatsApp pre-filled click
  const triggerWhatsAppDirect = () => {
    const chosenBatchObj = BATCH_DATA.find(b => b.id === selectedBatch);
    const text = encodeURIComponent(
      `Hello Rang Taali Academy Team, my name is ${name || '[Your Name]'} (Mobile: ${phone || '[Your Phone]'}, WhatsApp: ${whatsappNumber || '[Your WhatsApp]'}, Address: ${address || '[Your Address]'}). I have submitted my class registration details online for the "${chosenBatchObj?.name || 'Garba Class'}" (${chosenBatchObj?.timing || ''}). Please confirm my seat availability.`
    );
    window.open(`https://api.whatsapp.com/send?phone=916351189801&text=${text}`, '_blank');
  };

  const handlePrintCard = () => {
    window.print();
  };

  // Get current active submitted ticket details
  const currentSubmission = pastInquiries.find(i => i.id === lastSubmittedId);
  const currentBatch = BATCH_DATA.find(b => b.id === currentSubmission?.batchId);

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#1A0F1E] mandala-bg border-t border-purple-theme/50">
      
      {/* Decorative backdrop mesh */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-theme/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 inline-flex items-center gap-2">
            <span className="w-4 h-1 bg-gold-theme rounded-full" /> 
            Academy Registration 
            <span className="w-4 h-1 bg-gold-theme rounded-full" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Register For Garba Classes
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
            Provide your details, select your preferred time batch, upload your photo, and instantly generate your digital Academy Entry ID Pass.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl immersive-glass shadow-xl space-y-8">
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Admission Desk Contact
              </h3>

              <div className="space-y-6">
                
                 {/* Phone */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold-theme/5 flex items-center justify-center text-gold-theme border border-gold-theme/10 group-hover:bg-gold-theme/20 group-hover:border-gold-theme/30 transition-all shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Academy Helpline</h4>
                    <a href="tel:+916351189801" className="text-sm text-white hover:text-gold-theme font-medium mt-1 block">
                      +91 63511 89801
                    </a>
                    <a href="tel:+919714705143" className="text-sm text-white hover:text-gold-theme font-medium block">
                      +91 97147 05143
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/5 flex items-center justify-center text-green-400 border border-green-500/10 group-hover:bg-green-500/20 group-hover:border-green-400/30 transition-all shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Direct WhatsApp Query</h4>
                    <a href="https://wa.me/916351189801" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-green-400 font-medium mt-1 block">
                      +91 63511 89801 (Click to Chat)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/5 flex items-center justify-center text-rose-400 border border-rose-500/10 group-hover:bg-rose-500/20 group-hover:border-rose-400/30 transition-all shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Admissions Email</h4>
                    <a href="mailto:academy@rangtaaliraas.com" className="text-sm sm:text-base text-white hover:text-rose-400 font-medium mt-1 block">
                      academy@rangtaaliraas.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold-theme/5 flex items-center justify-center text-gold-theme border border-gold-theme/10 group-hover:bg-gold-theme/20 group-hover:border-gold-theme/30 transition-all shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Academy Open Ground Venue</h4>
                    <p className="text-xs text-gray-300 font-light mt-1 leading-relaxed">
                      Prayosha Plot No. 1870, A to Z વાળો ખાંચો, Madhumahel Appartment ની સામે, Rupani Circle, Bhavnagar, Gujarat, India.
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Follow Class Highlights</h4>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/rangtaaliraas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1A0F1E] hover:bg-gradient-to-tr hover:from-gold-theme hover:to-saffron-theme text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://facebook.com/rangtaaliraas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1A0F1E] hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-all"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

            </div>

            {/* Stylized Studio Map */}
            <div className="rounded-3xl border border-white/10 overflow-hidden relative aspect-video bg-white/5 group">
              <div className="absolute inset-0 bg-[#1A0F1E] flex items-center justify-center flex-col text-center p-6">
                <MapPin className="text-gold-theme animate-bounce mb-2" size={32} />
                <h4 className="font-serif text-sm font-bold text-white mb-1">Rang Taali Open Ground Venue</h4>
                <p className="text-[11px] text-gray-400 max-w-xs mb-3 font-light">Spacious open ground, secure bounds, live music stages, and ample visitor parking.</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-gold-theme/10 border border-gold-theme/20 text-[10px] uppercase font-bold text-gold-theme hover:bg-gold-theme hover:text-[#1A0F1E] transition-all flex items-center gap-1 cursor-pointer"
                >
                  Get Ground Directions <ExternalLink size={10} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form & Live ID Card Generator */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl bg-[#1A0F1E] border border-gold-theme/30 shadow-xl relative overflow-hidden">
              
              {/* Highlight line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-theme via-gold-theme to-saffron-theme" />

              {/* Google Form Direct Registration Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-rose-600/10 border border-gold-theme/30 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-gold-theme/50 transition-all duration-300">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-theme opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-theme"></span>
                    </span>
                    <span className="text-[10px] font-bold text-gold-theme uppercase tracking-wider">Official Registration Link</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">Google Form Registration Portal</h4>
                  <p className="text-[11px] text-gray-400 font-light max-w-sm">
                    Fill the official academy google form directly to secure your training batch slot instantly!
                  </p>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPxeOHOAUhqgVQ-njk8jNpojXxSvlGwqPgP3zmEhxlHZTZzQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-theme to-saffron-theme text-purple-950 font-extrabold text-xs tracking-wide shadow-md hover:shadow-gold-theme/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  Open Google Form <ExternalLink size={12} />
                </a>
              </div>

              {/* Feedback Success State - LIVE ADMISSION CARD GENERATOR */}
              {isSubmitted && currentSubmission ? (
                <div className="py-6 text-center space-y-6">
                  <div className="w-12 h-12 rounded-full bg-gold-theme/10 flex items-center justify-center text-gold-theme border border-gold-theme/20 mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Registration Confirmed!</h3>
                    <p className="text-xs text-gray-400 mt-1 font-light max-w-md mx-auto">
                      Your admission has been processed. Below is your official student digital ID Card. Please take a print or present this at the studio counter.
                    </p>
                  </div>

                  {/* HIGH-FIDELITY DIGITAL ID CARD DESIGN */}
                  <div id="print-area" className="max-w-sm mx-auto relative rounded-3xl p-6 bg-gradient-to-br from-[#2E1538] via-[#1A0F1E] to-[#110416] border-2 border-gold-theme text-left shadow-2xl overflow-hidden animate-fade-in my-8">
                    {/* Golden branding stripes */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-theme/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-rose-600/10 rounded-full blur-xl pointer-events-none" />

                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-gold-theme/20 pb-4 mb-4">
                      <Logo variant="simple" className="scale-95 origin-left" />
                      <span className="text-[8px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-extrabold font-mono shrink-0">
                        ADMITTED
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="flex gap-4 items-start">
                      {/* Left: User Photo */}
                      <div className="w-24 h-28 rounded-2xl border-2 border-gold-theme/40 overflow-hidden shrink-0 bg-black/40 shadow-inner flex items-center justify-center">
                        {currentSubmission.userPhoto ? (
                          <img
                            src={currentSubmission.userPhoto}
                            alt="Student Portrait"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <ImageIcon className="text-gray-600" size={24} />
                        )}
                      </div>

                      {/* Right: Student Details */}
                      <div className="space-y-2 flex-1">
                        <div>
                          <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block">Student Name</span>
                          <span className="text-sm font-bold text-white font-serif">{currentSubmission.name}</span>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block">Mobile Contact</span>
                          <span className="text-xs font-mono font-medium text-gray-200">{currentSubmission.phone}</span>
                        </div>
                        {currentSubmission.whatsappNumber && (
                          <div>
                            <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block">WhatsApp Contact</span>
                            <span className="text-xs font-mono font-medium text-gray-200">{currentSubmission.whatsappNumber}</span>
                          </div>
                        )}
                        {currentSubmission.address && (
                          <div>
                            <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block">Address</span>
                            <span className="text-[10px] text-gray-200 font-medium block leading-tight max-w-[180px] break-words">{currentSubmission.address}</span>
                          </div>
                        )}
                        <div>
                          <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block">Experience Level</span>
                          <span className="text-[10px] font-bold text-gold-theme bg-gold-theme/10 border border-gold-theme/20 px-2 py-0.5 rounded inline-block mt-0.5">
                            {currentSubmission.experienceLevel || 'Beginner'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Batch Information Section */}
                    <div className="mt-4 p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-gray-400 font-medium">Allocated Batch:</span>
                        <span className="text-white font-bold text-right">{currentBatch?.name || 'Garba Class Batch'}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-gray-400 font-medium">Batch Timings:</span>
                        <span className="text-gold-theme font-bold text-right">{currentBatch?.timing || 'To Be Scheduled'}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-gray-400 font-medium">Instructor:</span>
                        <span className="text-gray-200 font-medium text-right">{currentBatch?.instructor || 'Senior Coach'}</span>
                      </div>
                    </div>

                    {/* Bottom Bar Code */}
                    <div className="border-t border-gold-theme/10 mt-4 pt-4 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold block">ADMISSION ID</span>
                        <span className="text-[9px] font-mono text-gray-400 font-bold">RT-2026-{currentSubmission.id.split('-')[1]?.substring(4) || '7921'}</span>
                      </div>
                      
                      {/* Stylized Barcode */}
                      <div className="flex flex-col items-center">
                        <div className="h-6 flex items-end gap-[1.5px] bg-white/5 px-2 py-1 rounded">
                          {[1,3,1,2,3,1,2,1,3,1,2,1,3,2,1,3].map((h, i) => (
                            <div
                              key={i}
                              className="bg-gray-300 w-[1.5px]"
                              style={{ height: `${h * 4 + 4}px` }}
                            />
                          ))}
                        </div>
                        <span className="text-[6px] font-mono text-gray-500 tracking-widest mt-1">SCANNABLE PASS</span>
                      </div>
                    </div>
                  </div>

                  {/* ID Actions */}
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <button
                      onClick={triggerWhatsAppDirect}
                      className="px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      Instant WhatsApp Confirmation <ExternalLink size={14} />
                    </button>
                    <button
                      onClick={handlePrintCard}
                      className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 font-semibold text-xs tracking-wide border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer size={13} /> Print ID Pass
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-full bg-gold-theme/10 border border-gold-theme/20 text-gold-theme hover:bg-gold-theme hover:text-[#1A0F1E] font-bold text-xs tracking-wide transition-all cursor-pointer"
                    >
                      Register New Student
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Admission Desk Portal
                    </h3>
                    <span className="text-[10px] text-gold-theme/80 bg-gold-theme/5 px-2.5 py-1 rounded-full border border-gold-theme/10 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={10} className="text-gold-theme animate-spin" /> Live Form
                    </span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Student Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-theme/80 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Mobile & WhatsApp Numbers */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    
                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Mobile Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 63511 89801"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                        }}
                        className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-theme/80 transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label htmlFor="whatsappNumber" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">WhatsApp Number</label>
                      <input
                        id="whatsappNumber"
                        type="tel"
                        placeholder="e.g. 97147 05143"
                        value={whatsappNumber}
                        onChange={(e) => {
                          setWhatsappNumber(e.target.value);
                          if (errors.whatsappNumber) setErrors(prev => ({ ...prev, whatsappNumber: '' }));
                        }}
                        className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-theme/80 transition-colors ${
                          errors.whatsappNumber ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <span className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.whatsappNumber}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Student Address Field */}
                  <div>
                    <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Student Address</label>
                    <textarea
                      id="address"
                      rows={2}
                      placeholder="e.g. Rupani Circle, Bhavnagar"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors(prev => ({ ...prev, address: '' }));
                      }}
                      className={`w-full px-5 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-theme/80 transition-colors resize-none ${
                        errors.address ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.address && (
                      <span className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.address}
                      </span>
                    )}
                  </div>

                  {/* Garba Level & Preferred Batch Row */}
                  <div className="grid sm:grid-cols-2 gap-6">

                    {/* Dropdown Select Experience Level */}
                    <div>
                      <label htmlFor="experience" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Garba Level</label>
                      <select
                        id="experience"
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value as any)}
                        className="w-full px-5 py-3.5 rounded-xl bg-[#1A0F1E] border border-white/10 text-sm text-gray-300 focus:outline-none focus:border-gold-theme/80 transition-colors cursor-pointer"
                      >
                        <option value="Beginner">Beginner (Clap timing, basic 2-Taali)</option>
                        <option value="Intermediate">Intermediate (Dodhiya loops, turns)</option>
                        <option value="Advanced">Advanced (High speed spins, styling)</option>
                      </select>
                    </div>

                    {/* Dropdown Select Batch */}
                    <div>
                      <label htmlFor="selectedBatch" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Select Preferred Class Batch</label>
                      <select
                        id="selectedBatch"
                        value={selectedBatch}
                        onChange={(e) => setSelectedBatch(e.target.value)}
                        className="w-full px-5 py-3.5 rounded-xl bg-[#1A0F1E] border border-white/10 text-sm text-gray-300 focus:outline-none focus:border-gold-theme/80 transition-colors cursor-pointer font-medium"
                      >
                        {BATCH_DATA.map((batch) => (
                          <option key={batch.id} value={batch.id}>
                            {batch.name} ({batch.timing})
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* PREMIUM FILE UPLOAD: DRAG AND DROP PHOTO UPLOAD */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Upload Passport Photo <span className="text-gold-theme">(For Admission ID Card)</span>
                    </label>

                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`w-full relative rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 ${
                        photoUrl 
                          ? 'bg-[#1D0925]/30 border-gold-theme/40' 
                          : isDragging 
                            ? 'bg-gold-theme/10 border-gold-theme' 
                            : 'bg-black/20 border-white/10 hover:border-gold-theme/30'
                      }`}
                    >
                      {photoUrl ? (
                        <div className="flex flex-col items-center gap-3">
                          <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-gold-theme shadow-md">
                            <img
                              src={photoUrl}
                              alt="Uploaded Preview"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <button
                              type="button"
                              onClick={removePhoto}
                              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/80 hover:bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer shadow"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-xs text-gray-300 font-medium">Portrait photo successfully loaded.</p>
                          <button
                            type="button"
                            onClick={triggerFileSelect}
                            className="text-xs text-gold-theme hover:underline font-semibold"
                          >
                            Change Photo
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-2 cursor-pointer" onClick={triggerFileSelect}>
                          <div className="w-10 h-10 rounded-full bg-gold-theme/5 flex items-center justify-center text-gold-theme border border-gold-theme/10 mb-3 group-hover:bg-gold-theme/20">
                            <Upload size={18} />
                          </div>
                          <p className="text-xs sm:text-sm text-gray-200 font-semibold mb-1">
                            Drag & drop your portrait photo, or <span className="text-gold-theme hover:underline">browse</span>
                          </p>
                          <p className="text-[10px] text-gray-500 font-light">Supports JPG, PNG up to 3MB. Portrait aspect preferred.</p>
                        </div>
                      )}

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>

                    {errors.photo && (
                      <span className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.photo}
                      </span>
                    )}
                  </div>

                  {/* Additional notes Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Special Requests / Group Discounts / Health Queries (Optional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="e.g. Any medical details or group discount requests for 5+ family members..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-theme/80 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-theme via-gold-theme to-saffron-theme text-purple-theme font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      Generate Admission ID Card
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <button
                      type="button"
                      onClick={triggerWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-green-600/10 hover:bg-green-600 text-green-400 hover:text-white font-semibold text-xs tracking-wide border border-green-500/20 hover:border-green-500 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Instant WhatsApp <ExternalLink size={12} />
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Simulated Live Submission History for real-time high-fidelity response */}
            {pastInquiries.length > 0 && (
              <div className="p-6 rounded-3xl immersive-glass border border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-4">Admitted Student Logs ({pastInquiries.length})</h4>
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
                  {pastInquiries.map((inq) => {
                    const batchObj = BATCH_DATA.find(b => b.id === inq.batchId);
                    return (
                      <div key={inq.id} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4 text-xs">
                        <div className="flex items-center gap-3">
                          {/* Mini avatar thumbnail of uploaded photo */}
                          <div className="w-8 h-8 rounded-full border border-gold-theme/30 overflow-hidden shrink-0 bg-black/40">
                            {inq.userPhoto ? (
                              <img src={inq.userPhoto} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            ) : (
                              <ImageIcon size={10} className="text-gray-500 m-auto mt-2" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white">{inq.name}</span>
                              <span className="px-2 py-0.5 rounded bg-purple-theme text-gold-theme font-bold text-[9px]">{batchObj?.name || 'Class'}</span>
                            </div>
                            <p className="text-gray-400 font-light mt-0.5 text-[11px]">ID: RT-2026-{inq.id.split('-')[1]?.substring(4)} • Timings: {batchObj?.timing}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[9px] uppercase tracking-wider block">
                            CONFIRMED
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
