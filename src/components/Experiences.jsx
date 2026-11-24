import React from 'react';
import { BUSINESS_CONFIG, buildPackageWhatsAppUrl } from '../config/business';
import { Check, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

export default function Experiences() {
  const experiences = BUSINESS_CONFIG.experiences;

  return (
    <section id="experiences" className="py-24 bg-[#F5F0E6] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-white/60 rounded-full filter blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#edf5f1]/60 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            What You Can Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Curated Farmhouse Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Crafted for pure relaxation, active sports, and heartfelt bonding in the Karjat foothills. Every moment is yours to cherish.
          </p>
        </div>

        {/* 4 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#1C382E] shadow-sm border border-white/40">
                    {exp.badge}
                  </span>
                </div>

                {/* Subtitle on image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#deb87e] font-semibold">
                    {exp.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-[#edf5f1] text-[#1C382E] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">
                    Available for Day & Overnight
                  </span>

                  <a
                    href={buildPackageWhatsAppUrl(exp.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#1C382E] bg-[#edf5f1] hover:bg-[#1C382E] hover:text-white transition-all duration-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Demo Verification Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 italic inline-block bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8E1D5]">
            *Experience details and schedules are concept outlines to be customized with the farmhouse owner upon onboarding.
          </p>
        </div>

      </div>
    </section>
  );
}
