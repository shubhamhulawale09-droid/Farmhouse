import React from 'react';
import { Trees, Users, Sun, Heart, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function About() {
  const highlights = [
    {
      icon: Trees,
      title: "Nature & Peaceful Surroundings",
      description: "Serene greenery tucked amidst the picturesque hills and fresh country air of Karjat, away from urban congestion.",
    },
    {
      icon: Users,
      title: "Family & Friends Gatherings",
      description: "Generous open areas and private living zones created specifically to bring loved ones closer together.",
    },
    {
      icon: Sun,
      title: "Outdoor Recreation & Fun",
      description: "Wide cricket grounds, poolside sundecks, rain dance sessions, and active sports to engage every generation.",
    },
    {
      icon: Heart,
      title: "Relaxation & Memorable Moments",
      description: "Unwind on breezy verandahs, enjoy authentic home-style cuisine, and make unforgettable memories under star-lit skies.",
    },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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
    <section id="about" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#edf5f1] rounded-full filter blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#faebd7] rounded-full filter blur-3xl opacity-40 -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label */}
        <div className="text-center sm:text-left mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            About Kalpana Farm
          </span>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Property Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1000&auto=format&fit=crop"
                  alt="Kalpana Farm Karjat Property and Green Lawns"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-[#deb87e] border border-white/20">
                    Scenic Karjat Getaway
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-2">
                    Lush Greens & Unmatched Serenity
                  </h3>
                </div>
              </div>

              {/* Overlapping Floating Feature Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#E8E1D5] max-w-[240px] hidden sm:block animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1C382E] text-[#deb87e] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">100% Private</div>
                    <div className="text-xs text-gray-500">Exclusive group booking</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600 font-medium">
                  <span>Pool · Turf · Dining</span>
                  <span className="text-[#1C382E] font-semibold">Karjat</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight leading-tight">
              Your Escape Into Nature
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Located in the scenic countryside of <strong>Karjat, Maharashtra</strong>, <strong>Kalpana Farm</strong> is envisioned as a refreshing farmhouse sanctuary where friends and families can unplug from routine and reconnect in natural tranquility.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether you are planning an energetic day picnic with outdoor cricket matches and pool splashes, a peaceful weekend family stay, or a memorable milestone celebration with homemade food, Kalpana Farm provides the ideal private backdrop.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white border border-[#EFE8DC] shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#edf5f1] text-[#1C382E] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA and Verification Note */}
            <div className="mt-8 pt-6 border-t border-[#EFE8DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#1C382E] hover:bg-[#254A3D] shadow transition-all duration-300 group"
              >
                <span>Plan Your Visit</span>
                <ArrowRight className="w-4 h-4 text-[#deb87e] transform group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[11px] text-gray-400 italic max-w-sm">
                *Property specifications and demo visuals subject to owner review upon full operational launch.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
