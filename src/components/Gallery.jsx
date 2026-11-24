import React, { useState, useEffect, useCallback } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryItems = BUSINESS_CONFIG.gallery;
  const categories = ['All', 'Pool & Outdoors', 'Rooms & Interior', 'Activities', 'Dining'];

  const filteredItems =
    selectedFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  // Lightbox navigation callbacks
  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
  }, [activeImageIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, showNext, showPrev]);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIndex]);

  return (
    <section id="gallery" className="py-24 bg-[#F5F0E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            Visual Tour
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Glimpse of Kalpana Farm
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Take a visual tour through our private swimming pool, green cricket lawn, peaceful verandahs, and dining experiences.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedFilter === cat
                    ? 'bg-[#1C382E] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-[#E8E1D5] hover:border-[#1C382E] hover:text-[#1C382E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isWide = item.aspect === 'wide' && index % 3 === 0;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-black ${
                  isWide ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108 opacity-95 group-hover:opacity-100"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#deb87e] border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-4 left-5 right-5 text-white transition-transform duration-300 transform group-hover:-translate-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Demo Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 italic inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#E8E1D5]">
            <ImageIcon className="w-3.5 h-3.5 text-[#1C382E]" />
            <span>High-resolution placeholder photography curated to reflect authentic Karjat farmhouse aesthetics. Replaceable with client photos anytime.</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none hidden sm:flex items-center justify-center"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[75vh]">
              <img
                src={filteredItems[activeImageIndex].image}
                alt={filteredItems[activeImageIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption bar */}
            <div className="mt-4 text-center max-w-xl text-white">
              <span className="text-xs uppercase tracking-widest text-[#deb87e] font-semibold">
                {filteredItems[activeImageIndex].category} · {activeImageIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {filteredItems[activeImageIndex].title}
              </h3>
              <p className="text-sm text-gray-300 mt-1 font-light">
                {filteredItems[activeImageIndex].description}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
