import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Search, Eye, X, ChevronLeft, ChevronRight, Plus, Upload, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';
import { GalleryItem } from '../types';

type CategoryType = 'All' | 'Class Practice' | 'Traditional Styles' | 'Choreography' | 'Festive Showcase';

export default function Gallery() {
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activeFilter, setActiveFilter] = useState<CategoryType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Add Photo Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Class Practice' | 'Traditional Styles' | 'Choreography' | 'Festive Showcase'>('Class Practice');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSuccessFeedback, setIsSuccessFeedback] = useState(false);

  const categories: CategoryType[] = [
    'All', 'Class Practice', 'Traditional Styles', 'Choreography', 'Festive Showcase'
  ];

  // Load custom added photos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('rang_taali_user_gallery_items');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setGalleryList([...parsed, ...GALLERY_ITEMS]);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const filteredItems = activeFilter === 'All'
    ? galleryList
    : galleryList.filter(item => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : filteredItems.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1) ? prev + 1 : 0);
    }
  };

  // Drag and drop processing
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
      setUploadError('Please select a valid image file');
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setUploadError('Image size must be smaller than 4MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setNewPhotoUrl(e.target.result as string);
        setUploadError('');
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

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setUploadError('Please enter a descriptive title for your photo.');
      return;
    }
    if (!newPhotoUrl) {
      setUploadError('Please choose or drop an image first.');
      return;
    }

    const newItem: GalleryItem = {
      id: `user-gal-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      image: newPhotoUrl
    };

    // Save to localStorage list
    const stored = localStorage.getItem('rang_taali_user_gallery_items');
    let userItems = [];
    if (stored) {
      try {
        userItems = JSON.parse(stored);
      } catch (err) {
        console.error(err);
      }
    }
    const updatedUserItems = [newItem, ...userItems];
    localStorage.setItem('rang_taali_user_gallery_items', JSON.stringify(updatedUserItems));

    // Update state list (new items shown first)
    setGalleryList([newItem, ...galleryList]);

    setIsSuccessFeedback(true);
    setNewTitle('');
    setNewPhotoUrl('');

    setTimeout(() => {
      setIsSuccessFeedback(false);
      setIsAddModalOpen(false);
    }, 2000);
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#1A0F1E] overflow-hidden border-t border-purple-theme/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout Section Header with an Add Photo button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-gold-theme font-bold mb-3 inline-flex items-center gap-2">
              <span className="w-4 h-1 bg-gold-theme rounded-full" /> 
              Captured Class Memories 
              <span className="w-4 h-1 bg-gold-theme rounded-full" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our Training Showcase Gallery
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
              Glance at the energetic practice rounds, synchronized circles, custom styling days, and beautiful traditional attire showcases.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-6 py-3 rounded-full bg-gold-theme/10 hover:bg-gold-theme text-gold-theme hover:text-purple-theme font-bold text-sm tracking-wide border border-gold-theme/30 hover:border-gold-theme shadow-md transition-all duration-300 cursor-pointer flex items-center gap-2 group shrink-0"
          >
            <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            Share Your Class Photo
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gold-theme text-purple-theme font-semibold shadow-md shadow-gold-theme/10'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-gold-theme/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with zoom hover */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border border-white/5 bg-black/20">
            <ImageIcon size={48} className="text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 font-light text-sm">No photos found in this category yet. Be the first to share one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item: GalleryItem, index: number) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden aspect-square immersive-glass shadow-md cursor-pointer border border-white/5"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Grid overlay mask on hover */}
                <div className="absolute inset-0 bg-[#1A0F1E]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-gold-theme flex items-center justify-center text-purple-theme mb-3 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={18} />
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-white mb-1 line-clamp-2 px-1">
                    {item.title}
                  </h4>
                  <p className="text-[9px] uppercase tracking-widest text-gold-theme font-extrabold mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-gold-theme hover:text-purple-theme text-white transition-all cursor-pointer z-50 animate-fade-in"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Nav Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-white/5 hover:bg-gold-theme hover:text-purple-theme text-white transition-all cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Active Image container */}
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col justify-center items-center z-40">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/10 shadow-2xl animate-scale-up"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
            {/* Image Metadata below */}
            <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold-theme font-semibold mt-1">
                {filteredItems[lightboxIndex].category}
              </p>
            </div>
          </div>

          {/* Nav Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-white/5 hover:bg-gold-theme hover:text-purple-theme text-white transition-all cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* SHARE PHOTO MODAL CONTAINER */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#1A0F1E] border border-gold-theme/30 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 text-gold-theme">
                <Sparkles size={18} className="animate-pulse" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Share Class Moments</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {isSuccessFeedback ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mx-auto animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Photo Shared Successfully!</h4>
                <p className="text-xs text-gray-400">Your practice memory is now live in the training gallery.</p>
              </div>
            ) : (
              <form onSubmit={handleAddPhotoSubmit} className="space-y-5">
                {/* Photo Title */}
                <div>
                  <label htmlFor="galTitle" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Photo Caption / Title</label>
                  <input
                    id="galTitle"
                    type="text"
                    maxLength={40}
                    placeholder="e.g. Speed Spin Practice, Traditional Attire Day"
                    value={newTitle}
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                      if (uploadError) setUploadError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-theme/80 transition-colors"
                  />
                </div>

                {/* Photo Category Selection */}
                <div>
                  <label htmlFor="galCat" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Category</label>
                  <select
                    id="galCat"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A0F1E] border border-white/10 text-sm text-gray-300 focus:outline-none focus:border-gold-theme/80 transition-colors cursor-pointer"
                  >
                    <option value="Class Practice">Class Practice</option>
                    <option value="Traditional Styles">Traditional Styles</option>
                    <option value="Choreography">Choreography</option>
                    <option value="Festive Showcase">Festive Showcase</option>
                  </select>
                </div>

                {/* Drag & Drop File Upload Area */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Choose Image Photo</label>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`rounded-2xl border-2 border-dashed p-6 text-center transition-all cursor-pointer ${
                      newPhotoUrl 
                        ? 'bg-[#1D0925]/30 border-gold-theme/40' 
                        : isDragging 
                          ? 'bg-gold-theme/10 border-gold-theme' 
                          : 'bg-black/20 border-white/10 hover:border-gold-theme/30'
                    }`}
                  >
                    {newPhotoUrl ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-xl overflow-hidden border border-gold-theme/30 shadow-md">
                          <img
                            src={newPhotoUrl}
                            alt="Student Contribution"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <p className="text-xs text-emerald-400 font-semibold">Image loaded successfully.</p>
                        <button
                          type="button"
                          onClick={triggerFileSelect}
                          className="text-xs text-gold-theme hover:underline font-medium"
                        >
                          Change Image
                        </button>
                      </div>
                    ) : (
                      <div className="py-2 flex flex-col items-center" onClick={triggerFileSelect}>
                        <Upload size={24} className="text-gold-theme mb-2" />
                        <p className="text-xs font-semibold text-gray-200">
                          Drag & drop image, or <span className="text-gold-theme hover:underline">browse</span>
                        </p>
                        <p className="text-[10px] text-gray-500 font-light mt-1">Supports PNG, JPG, GIF up to 4MB.</p>
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
                </div>

                {uploadError && (
                  <div className="text-xs text-rose-400 flex items-center gap-1 bg-rose-500/5 p-2 rounded-xl border border-rose-500/10">
                    <span>⚠️ {uploadError}</span>
                  </div>
                )}

                <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2.5 rounded-full bg-white/5 text-gray-300 hover:text-white text-xs font-semibold hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-theme to-saffron-theme text-purple-theme text-xs font-bold shadow hover:scale-105 transition-all cursor-pointer"
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
