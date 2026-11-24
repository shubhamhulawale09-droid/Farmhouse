import React from 'react';
import { MapPin, Navigation, Car, Clock, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Location() {
  const { location, contact } = BUSINESS_CONFIG;

  return (
    <section id="location" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            Easy Access
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Find Your Way to Nature
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Nestled in the lush hills of Karjat, Maharashtra. Conveniently reachable by road and train from Mumbai and Pune.
          </p>
        </div>

        {/* Two-Column Layout: Travel Times & Interactive Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-8 border border-[#E8E1D5] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#edf5f1] text-[#1C382E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b58d4a]">
                    Location
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#142A22]">
                    {contact.address.location}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {contact.address.landmark}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {contact.address.directionsNote}
                  </p>
                </div>
              </div>

              {/* Travel Distance Grid */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#1C382E]" />
                  <span>Estimated Driving Distance:</span>
                </h4>
                <div className="space-y-3">
                  {location.travelTimes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] text-xs sm:text-sm border border-[#EFE8DC]"
                    >
                      <span className="font-medium text-gray-800">{item.from}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">{item.distance}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#1C382E] text-[#deb87e] font-semibold text-[11px]">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8 pt-4">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-[#1C382E] hover:bg-[#254A3D] shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Navigation className="w-4 h-4 text-[#deb87e]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </a>
              </div>

            </div>

            {/* Configurable Address Notice */}
            <div className="mt-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-2.5 text-left">
              <AlertCircle className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Exact property turn-by-turn directions and live location pin are shared on WhatsApp upon confirmed booking. Address is dynamically configurable in <code className="text-gray-700 bg-gray-200 px-1 py-0.5 rounded">src/config/business.js</code>.
              </p>
            </div>
          </div>

          {/* Right Map Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100 h-[450px] sm:h-[520px]">
              {/* Iframe with Karjat placeholder embed */}
              <iframe
                title="Kalpana Farm Karjat Location Map"
                src={location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90"
              />

              {/* Floating Location Card Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E8E1D5]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1C382E] text-[#deb87e] flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Kalpana Farm</h5>
                    <p className="text-[11px] text-gray-600">Karjat, Maharashtra 410201</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
