import React, { useState, useEffect } from 'react';
import { buildDirectWhatsAppUrl, BUSINESS_CONFIG } from '../config/business';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px or after 3 seconds
    const timer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 2500);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-gray-200 animate-fade-in relative">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need booking details? <strong>Chat on WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Tooltip triangle arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildDirectWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contact Kalpana Farm on WhatsApp"
        title="Chat with Kalpana Farm on WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
        
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      </a>

    </div>
  );
}
