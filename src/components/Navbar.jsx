import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG, buildDirectWhatsAppUrl } from '../config/business';
import { Menu, X, Phone, MessageSquare, Compass, Trees } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlight
      const sections = ['home', 'about', 'experiences', 'facilities', 'gallery', 'packages', 'why-us', 'location', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#E8E1D5]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#1C382E] text-[#deb87e] shadow-sm'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
              }`}
            >
              <Trees className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif tracking-wider text-xl sm:text-2xl font-bold uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-[#142A22]' : 'text-white'
                }`}
              >
                {BUSINESS_CONFIG.name}
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-[#B58D4A]' : 'text-amber-200/90'
                }`}
              >
                Karjat · Maharashtra
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {BUSINESS_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#1C382E] font-semibold bg-[#edf5f1]'
                        : 'text-gray-700 hover:text-[#1C382E] hover:bg-gray-100/60'
                      : isActive
                      ? 'text-white font-semibold bg-white/20 backdrop-blur-sm'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone quick call */}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneTel}`}
              className={`hidden xl:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#1C382E] hover:bg-gray-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              title="Call for enquiry"
            >
              <Phone className="w-3.5 h-3.5 text-[#deb87e]" />
              <span>{BUSINESS_CONFIG.contact.phoneDisplay}</span>
            </a>

            {/* Book Now Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1C382E] hover:bg-[#254A3D] shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-[#deb87e]/40"
            >
              <MessageSquare className="w-4 h-4 text-[#deb87e]" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1C382E] text-white border border-[#deb87e]/40"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-2xl animate-fade-down px-4 pt-4 pb-6 mt-3">
          <div className="flex flex-col space-y-1">
            {BUSINESS_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1C382E] text-white font-semibold'
                      : 'text-gray-800 hover:bg-[#FAF8F5] hover:text-[#1C382E]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-200/80 flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm text-gray-600 px-2">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1C382E]" />
                {BUSINESS_CONFIG.contact.phoneDisplay}
              </span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">Karjat</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-[#25D366] text-white shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-[#1C382E] text-white shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#deb87e]" />
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
