import React from 'react';
import { BUSINESS_CONFIG, buildDirectWhatsAppUrl } from '../config/business';
import { Trees, Phone, MessageSquare, MapPin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="bg-[#0D1E18] text-white pt-16 pb-12 border-t border-[#1C382E] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#deb87e]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (2 cols wide) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1C382E] text-[#deb87e] border border-[#deb87e]/40 flex items-center justify-center">
                <Trees className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-wider text-2xl font-bold uppercase text-white">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#deb87e] font-medium">
                  Karjat · Maharashtra
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300 max-w-sm leading-relaxed font-light">
              {BUSINESS_CONFIG.subTitle} Experience refreshing private poolside escapes, open cricket lawns, and memorable group dining.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#deb87e]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#deb87e] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#experiences" onClick={(e) => handleNavClick(e, '#experiences')} className="hover:text-white transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleNavClick(e, '#facilities')} className="hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Packages & Stays */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#deb87e] mb-4">
              Packages
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="hover:text-white transition-colors">
                  Day Picnic (9am - 6pm)
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="hover:text-white transition-colors">
                  Overnight Nature Stay
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="hover:text-white transition-colors">
                  Group & Celebrations
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-white transition-colors">
                  How to Reach
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#deb87e] mb-4">
              Reach Out
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#deb87e] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.contact.address.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#deb87e] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`} className="hover:text-white">
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#deb87e] shrink-0" />
                <a href={buildDirectWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp Support
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}, Karjat. All rights reserved.
          </div>

          <div className="text-center md:text-right text-[11px] text-gray-400 max-w-lg">
            Concept presentation demo created for client demonstration. All placeholder information, facilities, and media are configurable and subject to owner sign-off.
          </div>
        </div>

      </div>
    </footer>
  );
}
