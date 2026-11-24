import React from 'react';
import { ChevronDown, Sparkles, MessageCircle, ArrowRight, Waves, Trophy, Utensils, Mountain } from 'lucide-react';
import { BUSINESS_CONFIG, buildDirectWhatsAppUrl } from '../config/business';

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=85&w=1920&auto=format&fit=crop"
          alt="Kalpana Farm Karjat Swimming Pool and Greenery"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multi-layered luxury gradients for flawless readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e18] via-[#0d1e18]/65 to-black/55" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/70 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Small Luxury Tag / Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#deb87e] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#deb87e]" />
          <span>KALPANA FARM · KARJAT</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.12] max-w-4xl drop-shadow-md">
          Escape the Ordinary. <br />
          <span className="italic font-normal text-[#deb87e] font-serif">
            Experience More.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-xl text-gray-200/95 max-w-2xl font-normal leading-relaxed drop-shadow">
          Discover a refreshing getaway surrounded by nature, where relaxation, outdoor adventures and unforgettable moments come together.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#experiences"
            onClick={(e) => scrollToSection(e, 'experiences')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#deb87e] hover:bg-[#c9a463] text-gray-950 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span>Explore Experiences</span>
            <ArrowRight className="w-4 h-4 text-gray-900" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#deb87e]" />
            <span>Enquire Now</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl text-left sm:text-center">
          <div className="flex items-center sm:justify-center gap-2.5 text-white/90">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#deb87e] shrink-0">
              <Waves className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm font-medium">Private Pool</div>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5 text-white/90">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#deb87e] shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm font-medium">Cricket Lawn</div>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5 text-white/90">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#deb87e] shrink-0">
              <Utensils className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm font-medium">Group Dining</div>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5 text-white/90">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#deb87e] shrink-0">
              <Mountain className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm font-medium">Karjat Foothills</div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <span className="text-[11px] uppercase tracking-widest text-white/70 mb-1 font-medium">Scroll</span>
        <div className="w-6 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-[#deb87e] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
