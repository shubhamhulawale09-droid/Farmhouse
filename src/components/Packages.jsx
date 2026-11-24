import React from 'react';
import { BUSINESS_CONFIG, buildPackageWhatsAppUrl } from '../config/business';
import { Check, Clock, Users, MessageSquare, ArrowRight, Sparkles, Shield } from 'lucide-react';

export default function Packages() {
  const packages = BUSINESS_CONFIG.packages;

  return (
    <section id="packages" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#edf5f1] rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#faebd7] rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            Transparent Experience Plans
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Curated Farmhouse Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Whether visiting for a thrilling daytime pool picnic or relaxing overnight in nature, choose a plan customized to your group size.
          </p>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1; // Overnight stay featured in center
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1C382E] to-[#142A22] text-white shadow-2xl scale-100 lg:-translate-y-3 border-2 border-[#deb87e]'
                    : 'bg-white text-gray-900 border border-[#E8E1D5] shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
                        isFeatured
                          ? 'bg-[#deb87e] text-gray-950 border border-white/20'
                          : 'bg-[#1C382E] text-white'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="p-8 sm:p-9 pb-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        isFeatured ? 'text-[#deb87e]' : 'text-[#b58d4a]'
                      }`}
                    >
                      Package {index + 1}
                    </span>
                    <div
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        isFeatured ? 'bg-white/10 text-gray-200' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.timing}</span>
                    </div>
                  </div>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-bold mt-4 ${
                      isFeatured ? 'text-white' : 'text-[#142A22]'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  
                  <p
                    className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                      isFeatured ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>

                  {/* Price Banner (No invented price, clear call to action) */}
                  <div className="mt-6 pt-6 border-t border-current/15 flex items-baseline justify-between">
                    <div>
                      <div
                        className={`text-xl sm:text-2xl font-bold tracking-tight ${
                          isFeatured ? 'text-[#deb87e]' : 'text-[#1C382E]'
                        }`}
                      >
                        {pkg.priceDisplay}
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          isFeatured ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        Rates based on group size & menu preferences
                      </div>
                    </div>
                  </div>

                  {/* Best For Tag */}
                  <div
                    className={`mt-4 p-3 rounded-xl flex items-center gap-2 text-xs font-medium ${
                      isFeatured
                        ? 'bg-white/10 text-gray-200'
                        : 'bg-[#edf5f1] text-[#1C382E]'
                    }`}
                  >
                    <Users className="w-4 h-4 shrink-0" />
                    <span>{pkg.bestFor}</span>
                  </div>

                  {/* Inclusions List */}
                  <div className="mt-6">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                        isFeatured ? 'text-[#deb87e]' : 'text-gray-900'
                      }`}
                    >
                      What's Included:
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFeatured
                                ? 'bg-[#deb87e] text-gray-900'
                                : 'bg-[#edf5f1] text-[#1C382E]'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span
                            className={
                              isFeatured ? 'text-gray-200 font-light' : 'text-gray-700'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Package Footer & WhatsApp Enquiry Button */}
                <div className="p-8 sm:p-9 pt-4">
                  <a
                    href={buildPackageWhatsAppUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-md ${
                      isFeatured
                        ? 'bg-[#deb87e] hover:bg-[#c9a463] text-gray-950 hover:shadow-xl active:scale-98'
                        : 'bg-[#1C382E] hover:bg-[#254A3D] text-white hover:shadow-xl active:scale-98'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p
                    className={`text-[10px] text-center mt-2.5 ${
                      isFeatured ? 'text-gray-400' : 'text-gray-400'
                    }`}
                  >
                    Quick quote & menu options shared immediately
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 leading-relaxed">
            *Customized packages available for birthday celebrations, weddings, school/college alumni getaways, and corporate offsites. Group discounts apply for 25+ guests.
          </p>
        </div>

      </div>
    </section>
  );
}
