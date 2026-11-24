import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { BUSINESS_CONFIG } from './config/business';
import { Sparkles, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#243329] selection:bg-[#1C382E] selection:text-[#deb87e]">
      
      {/* Top Demo Presentation Pill Ribbon */}
      <div className="bg-[#142A22] text-[#deb87e] text-[11px] py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3 border-b border-[#deb87e]/20 z-50">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#deb87e]" />
          <span>Demo Concept Website for <strong>Kalpana Farm, Karjat</strong></span>
        </span>
        <span className="hidden md:inline text-white/40">|</span>
        <span className="hidden md:flex items-center gap-1.5 text-white/90">
          <Phone className="w-3 h-3 text-[#deb87e]" />
          <span>Quick Inquiries: {BUSINESS_CONFIG.contact.phoneDisplay}</span>
        </span>
      </div>

      {/* Main Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experiences />
        <Facilities />
        <Gallery />
        <Packages />
        <WhyChooseUs />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
