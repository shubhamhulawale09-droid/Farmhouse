import React, { useState } from 'react';
import {
  Waves,
  Trophy,
  Wind,
  UtensilsCrossed,
  Speaker,
  CloudRain,
  Trees,
  Gamepad2,
  Zap,
  Flame,
  Car,
  ShieldCheck,
  CheckCircle2,
  Info,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

// Icon mapping
const ICON_MAP = {
  Waves,
  Trophy,
  Wind,
  UtensilsCrossed,
  Speaker,
  CloudRain,
  Trees,
  Gamepad2,
  Zap,
  Flame,
  Car,
  ShieldCheck,
};

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState('All');
  const facilities = BUSINESS_CONFIG.facilities;

  const categories = ['All', 'Recreation', 'Sports', 'Comfort', 'Dining', 'Entertainment'];

  const filteredFacilities =
    activeCategory === 'All'
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            Property Amenities
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Facilities & Amenities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Thoughtfully planned comforts to keep your family and guests entertained, refreshed, and completely relaxed throughout your visit.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#1C382E] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-[#E8E1D5] hover:border-[#1C382E] hover:text-[#1C382E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFacilities.map((facility, index) => {
            const IconComponent = ICON_MAP[facility.icon] || CheckCircle2;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#EFE8DC] shadow-sm hover:shadow-lg hover:border-[#1C382E]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#edf5f1] text-[#1C382E] group-hover:bg-[#1C382E] group-hover:text-[#deb87e] flex items-center justify-center transition-colors duration-300 mb-5">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#1C382E] transition-colors">
                      {facility.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#b58d4a] uppercase tracking-wider">
                    {facility.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Available for guests" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Owner Confirmation Notice Box */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5 flex items-start gap-3.5 text-left">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
            <strong className="font-semibold text-amber-950">Notice for Farmhouse Management:</strong> This amenities list includes recommended standard facilities for Karjat farmhouses (Swimming pool, outdoor cricket turf, AC rooms, rain dance, food catering). Final published facilities will be tailored precisely according to confirmed property infrastructure.
          </div>
        </div>

      </div>
    </section>
  );
}
