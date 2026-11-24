import React from 'react';
import {
  Mountain,
  Users2,
  LockKeyhole,
  Utensils,
  Navigation,
  MessageCircle,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

const ICONS = {
  Mountain,
  Users2,
  LockKeyhole,
  Utensils,
  Navigation,
  MessageCircle,
};

export default function WhyChooseUs() {
  const points = BUSINESS_CONFIG.whyChooseUs;

  return (
    <section id="why-us" className="py-24 bg-[#F5F0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            The Kalpana Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Why Choose Kalpana Farm?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Thoughtfully created for hassle-free retreats where hospitality, nature, and pure fun meet.
          </p>
        </div>

        {/* 6 Key Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => {
            const IconComp = ICONS[item.icon] || CheckCircle;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f1] text-[#1C382E] flex items-center justify-center mb-6 group-hover:bg-[#1C382E] group-hover:text-[#deb87e] transition-colors duration-300">
                    <IconComp className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#1C382E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-[#b58d4a]">
                  <span>Reason #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-16 bg-[#1C382E] rounded-3xl p-8 sm:p-10 text-white shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#deb87e]">100%</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Private Stays</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#deb87e]">1.5 - 2 hrs</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">From Mumbai & Pune</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#deb87e]">10–50+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Group Capacity</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#deb87e]">15 min</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">WhatsApp Response</div>
          </div>
        </div>

      </div>
    </section>
  );
}
