import React, { useState } from 'react';
import { BUSINESS_CONFIG, buildWhatsAppUrl, buildDirectWhatsAppUrl } from '../config/business';
import {
  Phone,
  MessageSquare,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function Contact() {
  const { contact } = BUSINESS_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '10–20 Guests',
    packageType: 'Day Picnic',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const guestOptions = [
    '5–10 Guests',
    '10–20 Guests',
    '20–35 Guests',
    '35–50 Guests',
    '50+ Guests (Full Buyout)',
  ];

  const packageOptions = [
    'Day Picnic (9 AM - 6 PM)',
    'Overnight Stay (24 Hours)',
    'Group & Celebration Package',
    'Custom Event / Inquire',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your mobile / WhatsApp number';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.date) {
      errs.date = 'Please pick a preferred date';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build the formatted WhatsApp enquiry URL
    const whatsappUrl = buildWhatsAppUrl({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      date: formData.date,
      guests: formData.guests,
      packageType: formData.packageType,
      message: formData.message.trim(),
      source: 'Kalpana Farm Website Booking Form',
    });

    setGeneratedUrl(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      guests: '10–20 Guests',
      packageType: 'Day Picnic',
      message: '',
    });
    setErrors({});
  };

  // Get tomorrow's date for min attribute in date picker
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 bg-[#F5F0E6] relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#edf5f1] rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#faebd7] rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1C382E]/10 text-[#1C382E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b58d4a]" />
            Direct Booking & Queries
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A22] tracking-tight">
            Your Getaway Starts Here
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Planning a day picnic, weekend escape or group celebration? Get in touch with us.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Perks */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Phone / WhatsApp Card */}
            <div className="bg-[#1C382E] rounded-3xl p-8 text-white shadow-xl border border-[#deb87e]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#deb87e]/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-semibold uppercase tracking-widest text-[#deb87e]">
                Direct Business Contact
              </span>
              <h3 className="font-serif text-2xl font-bold mt-2">
                Talk to Us Directly
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                We are happy to share photo albums, customized package quotations, and date availability over WhatsApp or phone call.
              </p>

              <div className="mt-6 space-y-4 pt-6 border-t border-white/15">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#deb87e] text-gray-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 font-medium">Direct Call</div>
                    <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#deb87e] transition-colors">
                      {contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={buildDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#25D366] font-semibold">Instant WhatsApp Chat</div>
                    <div className="text-sm font-semibold text-white">
                      Click here to message directly
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-[#deb87e] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {contact.address.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#deb87e]" />
                  <span>Response: Typically &lt; 15 mins</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Verified Demo</span>
                </span>
              </div>
            </div>

            {/* Quick Booking Tips */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8E1D5] shadow-sm">
              <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b58d4a]" />
                <span>Tips for Booking at Kalpana Farm</span>
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-600 leading-relaxed">
                <li>• Weekend slots (Saturday–Sunday) usually get booked 1 to 2 weeks in advance.</li>
                <li>• Mention vegetarian or non-vegetarian catering preferences in the message.</li>
                <li>• Special decoration & music setup arrangements can be customized on prior request.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="font-serif text-2xl font-bold text-[#142A22]">
                      Send Booking Enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill out your details below to generate a prefilled WhatsApp enquiry and check slot availability instantly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-gray-300 focus:border-[#1C382E] focus:ring-1 focus:ring-[#1C382E]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone / WhatsApp No. <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98200 12345"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-gray-300 focus:border-[#1C382E] focus:ring-1 focus:ring-[#1C382E]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Preferred Date Field */}
                    <div>
                      <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none transition-colors ${
                            errors.date
                              ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                              : 'border-gray-300 focus:border-[#1C382E] focus:ring-1 focus:ring-[#1C382E]'
                          }`}
                        />
                      </div>
                      {errors.date && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Estimated Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1C382E] focus:ring-1 focus:ring-[#1C382E]"
                      >
                        {guestOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Package Type Selection */}
                  <div>
                    <label htmlFor="packageType" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Interested Package
                    </label>
                    <select
                      id="packageType"
                      name="packageType"
                      value={formData.packageType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1C382E] focus:ring-1 focus:ring-[#1C382E]"
                    >
                      {packageOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Special Requests */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Vegetarian only meals, birthday celebration setup, early morning check-in request..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1C382E] focus:ring-1 focus:ring-[#1C382E]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl text-base font-semibold text-white bg-[#1C382E] hover:bg-[#254A3D] shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-98"
                    >
                      <MessageSquare className="w-5 h-5 text-[#deb87e]" />
                      <span>Submit & Enquire on WhatsApp</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-gray-500 mt-2.5">
                      Opens official WhatsApp chat with pre-filled enquiry for <strong className="text-gray-700">{contact.phoneDisplay}</strong>
                    </p>
                  </div>

                </form>
              ) : (
                /* Success / Submission State */
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    WhatsApp Enquiry Generated!
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 max-w-md">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry details have been formatted and WhatsApp should have opened in a new tab.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left w-full max-w-md text-xs space-y-1.5">
                    <div><strong>Date:</strong> {formData.date}</div>
                    <div><strong>Guests:</strong> {formData.guests}</div>
                    <div><strong>Package:</strong> {formData.packageType}</div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#25D366] text-white shadow-md hover:bg-[#20ba59]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Reopen WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
