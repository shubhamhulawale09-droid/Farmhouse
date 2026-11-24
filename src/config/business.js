/**
 * Kalpana Farm - Central Business Configuration
 * 
 * IMPORTANT: This file holds all contact, location, pricing, facility, and media
 * configuration in one place. Adjust phone numbers, addresses, packages, or photos
 * here to update the entire website automatically.
 */

export const BUSINESS_CONFIG = {
  name: "Kalpana Farm",
  shortName: "Kalpana",
  tagline: "Escape the Ordinary. Experience More.",
  subTitle: "A serene nature-inspired private farmhouse getaway in Karjat, Maharashtra.",
  
  // Public Business Contact Details (Easily configurable)
  contact: {
    phoneDisplay: "+91 73048 35188",
    phoneTel: "+917304835188",
    whatsappRaw: "917304835188", // Raw numeric format for wa.me URL
    email: "enquiry@kalpanafarmkarjat.com",
    address: {
      location: "Karjat, Maharashtra, India",
      landmark: "Near Karjat Foothills, District Raigad, Maharashtra 410201",
      directionsNote: "Easily accessible via Mumbai-Pune Expressway / Old Mumbai-Pune Highway.",
    },
  },

  // Map & Direction Links
  location: {
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Karjat+Maharashtra",
    // Embed URL for responsive iframe placeholder
    embedMapUrl: "https://maps.google.com/maps?q=Karjat%20Maharashtra%20India&t=&z=12&ie=UTF8&iwloc=&output=embed",
    travelTimes: [
      { from: "Mumbai (Chembur / Vashi)", time: "~1 hr 45 min", distance: "~75 km" },
      { from: "Pune (Wakad / Hinjawadi)", time: "~1 hr 55 min", distance: "~88 km" },
      { from: "Navi Mumbai / Panvel", time: "~50 min", distance: "~42 km" },
      { from: "Karjat Railway Station", time: "~15-20 min", distance: "~12 km" },
    ],
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experiences" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Packages", href: "#packages" },
    { label: "Why Us", href: "#why-us" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],

  // Verified Status Disclaimer
  disclaimerText: "Demo Concept Notice: Details, facilities, and photographs shown represent property concepts and are subject to final owner verification before public production.",

  // Experiences Section Content
  experiences: [
    {
      id: "swimming-pool",
      title: "Swimming Pool & Deck",
      tagline: "Relax, refresh and enjoy poolside moments",
      description: "Dive into crystalline waters surrounded by lush mountain greenery. Perfect for afternoon relaxation, family splash time, and leisurely sun-downers.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      badge: "Signature Feature",
      highlights: ["Crystal Clear Pool", "Poolside Loungers", "Kids Friendly Shallow End", "Lush Surrounding Views"],
    },
    {
      id: "cricket-sports",
      title: "Cricket & Outdoor Sports",
      tagline: "Friendly cricket matches & open-air games",
      description: "Relive weekend nostalgia on expansive manicured green turf. Play gully cricket with your crew, badminton matches, and fun team sports in open air.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
      badge: "Group Favorite",
      highlights: ["Spacious Cricket Lawn", "Badminton & Volleyball", "Open Sports Turf", "Sports Kit Support"],
    },
    {
      id: "family-groups",
      title: "Family & Group Getaways",
      tagline: "Quality time with friends and loved ones",
      description: "Escape city noise and celebrate together in total privacy. Designed for multi-generational families, alumni reunions, and close-knit celebrations.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
      badge: "Total Privacy",
      highlights: ["Exclusive Farmhouse Use", "Family Sit-Out Verandah", "Safe for Children & Elders", "Private Celebration Spaces"],
    },
    {
      id: "food-dining",
      title: "Authentic Food & Dining",
      tagline: "Memorable group meals and country flavors",
      description: "Indulge in mouthwatering home-style meals, authentic regional Maharashtrian dishes, sizzling evening barbecue, and refreshing morning farm tea.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      badge: "Home-Style Fresh",
      highlights: ["Authentic Maharashtrian Thali", "Veg & Non-Veg Specialities", "Evening High-Tea & Snacks", "Live Barbecue Setup (On Request)"],
    },
  ],

  // Facilities Section
  facilities: [
    {
      icon: "Waves",
      name: "Swimming Pool",
      description: "Well-maintained pool with clean filtered water, sun deck, and shaded pergola.",
      category: "Recreation",
    },
    {
      icon: "Trophy",
      name: "Cricket & Outdoor Games",
      description: "Expansive green lawn ideal for box cricket, badminton, volleyball, and tug-of-war.",
      category: "Sports",
    },
    {
      icon: "Wind",
      name: "Air-Conditioned Rooms",
      description: "Clean, comfortable bedrooms with air conditioning and restful bedding for overnight guests.",
      category: "Comfort",
    },
    {
      icon: "UtensilsCrossed",
      name: "Food Arrangements",
      description: "Freshly prepared rustic meals, breakfast, authentic lunch & dinner options for groups.",
      category: "Dining",
    },
    {
      icon: "Speaker",
      name: "Music System",
      description: "High-clarity Bluetooth sound setup for poolside tunes and celebratory vibes.",
      category: "Entertainment",
    },
    {
      icon: "CloudRain",
      name: "Rain Dance Setup",
      description: "Energizing overhead mist and rain dance area for thrilling summer & monsoon fun.",
      category: "Entertainment",
    },
    {
      icon: "Trees",
      name: "Expansive Green Lawns",
      description: "Vast open green spaces surrounded by tropical palms and peaceful countryside greenery.",
      category: "Nature",
    },
    {
      icon: "Gamepad2",
      name: "Indoor Board Games",
      description: "Carrom board, playing cards, chess, and family games for cozy indoor relaxation.",
      category: "Indoor",
    },
    {
      icon: "Zap",
      name: "Power Backup",
      description: "Continuous inverter power backup ensuring uninterrupted lights, fans, and essentials.",
      category: "Utility",
    },
    {
      icon: "Flame",
      name: "Bonfire on Request",
      description: "Warm evening bonfire pit under starlit Karjat skies (available seasonally on request).",
      category: "Special",
    },
    {
      icon: "Car",
      name: "Secure Parking",
      description: "Gated and secure on-premise parking for multiple cars and traveler vans.",
      category: "Convenience",
    },
    {
      icon: "ShieldCheck",
      name: "Private & Gated Property",
      description: "100% private property reserved exclusively for your booking with on-site caretaker assistance.",
      category: "Security",
    },
  ],

  // Packages Section
  packages: [
    {
      id: "day-picnic",
      name: "Day Picnic",
      subtitle: "Full Day Refreshing Countryside Outing",
      timing: "9:00 AM to 6:00 PM",
      priceDisplay: "Contact for Pricing",
      badge: "Most Popular",
      bestFor: "Day outings, friends catchups, and team celebrations",
      features: [
        "Welcome Drink & Morning Breakfast with Tea/Coffee",
        "Full Day Access to Private Swimming Pool & Sun Loungers",
        "Open Cricket Lawn with Sports Equipment (Cricket, Badminton)",
        "Rain Dance Session with High-Bass Music System",
        "Sumptuous Buffet Lunch (Authentic Veg & Non-Veg Options)",
        "Evening High-Tea with Hot Snacks",
        "Access to Restrooms, Changing Rooms & Shaded Sit-outs",
      ],
      whatsappSubject: "Enquiry for Day Picnic Package at Kalpana Farm",
    },
    {
      id: "overnight-stay",
      name: "Overnight Stay",
      subtitle: "Serene 24-Hour Nature Retreat & Relaxation",
      timing: "Check-in 1:00 PM · Check-out Next Day 11:00 AM",
      priceDisplay: "Contact for Pricing",
      badge: "Best Value",
      bestFor: "Family vacations, weekend road trips, and relaxing reunions",
      features: [
        "Comfortable Air-Conditioned Bedrooms with Ensuite Bathrooms",
        "All 4 Meals Included: Welcome Snack, Lunch, High Tea, Dinner & Breakfast",
        "Night Pool Access with Ambient Garden Lighting",
        "Starlit Lawn Hangouts & Optional Evening Bonfire Setup",
        "Complete Access to Cricket Grounds, Rain Dance & Music Setup",
        "Indoor Entertainment: Carrom, Board Games & Bluetooth Audio",
        "Dedicated Caretaker on Premises for Seamless Hospitality",
      ],
      whatsappSubject: "Enquiry for Overnight Stay Package at Kalpana Farm",
    },
    {
      id: "group-celebration",
      name: "Group & Celebration",
      subtitle: "Tailored for Large Gatherings, Birthdays & Milestones",
      timing: "Custom Flexible Hours (Day or Overnight)",
      priceDisplay: "Contact for Pricing",
      badge: "Exclusive Villa",
      bestFor: "Milestone birthdays, family anniversaries, and corporate offsites (15–50+ guests)",
      features: [
        "100% Private Property Buyout - No Outside Strangers",
        "Customized Group Buffet Menus & Live Counter Options",
        "Party Music Setup & Spacious Lawn for Celebration Stages",
        "Event Lighting & Decor Setup Assistance Permitted",
        "Wide Open Turf for Organized Group Games & Team Tournaments",
        "Barbecue Station Setup (Upon Request)",
        "Priority Booking Assistance & Dedicated On-Site Support",
      ],
      whatsappSubject: "Enquiry for Group & Celebration Package at Kalpana Farm",
    },
  ],

  // Why Choose Kalpana Farm
  whyChooseUs: [
    {
      icon: "Mountain",
      title: "Nature-Inspired Sanctuary",
      description: "Nestled in the lush greenery of Karjat, offering tranquil mountain breezes and a true break from metropolitan chaos.",
    },
    {
      icon: "Users2",
      title: "Spacious for All Generations",
      description: "From kids splashing in the pool to youths playing cricket and seniors relaxing under trees, there's joy for every age.",
    },
    {
      icon: "LockKeyhole",
      title: "100% Private Farmhouse",
      description: "Enjoy exclusive privacy with only your invited circle on the property. No shared pools, no interruptions.",
    },
    {
      icon: "Utensils",
      title: "Warm Regional Hospitality",
      description: "Savor fresh, homestyle food cooked with genuine Maharashtrian hospitality and customizable dietary choices.",
    },
    {
      icon: "Navigation",
      title: "Effortless Road Trip",
      description: "Located within an easy 1.5 to 2-hour scenic highway drive from both Mumbai and Pune, perfect for impromptu weekend escapes.",
    },
    {
      icon: "MessageCircle",
      title: "Swift WhatsApp Booking",
      description: "No confusing portals. Connect straight with the team on WhatsApp to confirm dates, customize menus, and book instantly.",
    },
  ],

  // Gallery Photos (High Quality Farmhouse & Karjat Resort Vibe)
  gallery: [
    {
      id: 1,
      title: "Private Swimming Pool",
      category: "Pool & Outdoors",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      aspect: "wide",
      description: "Inviting swimming pool fringed by tropical palm trees and mountain vistas.",
    },
    {
      id: 2,
      title: "Lush Green Lawns",
      category: "Pool & Outdoors",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1000&auto=format&fit=crop",
      aspect: "tall",
      description: "Manicured green turf perfect for outdoor games and barefoot morning strolls.",
    },
    {
      id: 3,
      title: "Air-Conditioned Comfort Bedrooms",
      category: "Rooms & Interior",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      aspect: "normal",
      description: "Tranquil AC bedroom with peaceful greenery views and comfortable bedding.",
    },
    {
      id: 4,
      title: "Farmhouse Verandah & Sit-out",
      category: "Pool & Outdoors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      aspect: "normal",
      description: "Covered verandah overlooking the gardens for evening tea and endless conversations.",
    },
    {
      id: 5,
      title: "Cricket & Sports Turf",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop",
      aspect: "wide",
      description: "Open expanse for friendly box cricket, volleyball, and group sports.",
    },
    {
      id: 6,
      title: "Outdoor Dining & Barbecue",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
      aspect: "tall",
      description: "Al fresco dining under strings of lights and cool country night breezes.",
    },
    {
      id: 7,
      title: "Rain Dance & Fun Zone",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop",
      aspect: "normal",
      description: "High-energy rain dance arena with party music setup.",
    },
    {
      id: 8,
      title: "Fresh Home-Style Meals",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
      aspect: "normal",
      description: "Delicious farm-fresh vegetarian and non-vegetarian country spreads.",
    },
    {
      id: 9,
      title: "Sunset over Karjat Hills",
      category: "Pool & Outdoors",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      aspect: "wide",
      description: "Golden hour glow settling over the tranquil Western Ghats foothills.",
    },
  ],
};

/**
 * Helper to construct a WhatsApp enquiry link with pre-filled, properly formatted text
 */
export function buildWhatsAppUrl({
  name = "",
  phone = "",
  date = "",
  guests = "",
  packageType = "Day Picnic",
  message = "",
  source = "Website Enquiry Form",
} = {}) {
  const baseNum = BUSINESS_CONFIG.contact.whatsappRaw;
  
  let text = `*New Booking Enquiry - Kalpana Farm, Karjat*\n`;
  text += `──────────────────────\n`;
  if (name) text += `👤 *Name:* ${name}\n`;
  if (phone) text += `📞 *Phone:* ${phone}\n`;
  if (packageType) text += `🏷️ *Package:* ${packageType}\n`;
  if (date) text += `📅 *Preferred Date:* ${date}\n`;
  if (guests) text += `👥 *Number of Guests:* ${guests}\n`;
  if (message) text += `💬 *Message / Questions:* ${message}\n`;
  text += `──────────────────────\n`;
  text += `_Source: ${source}_\n`;
  text += `_Please share pricing and date availability._`;

  return `https://wa.me/${baseNum}?text=${encodeURIComponent(text)}`;
}

/**
 * Helper for quick package enquiry button
 */
export function buildPackageWhatsAppUrl(packageName) {
  const baseNum = BUSINESS_CONFIG.contact.whatsappRaw;
  const text = `Hi Kalpana Farm! I'm interested in the *${packageName}* package at your Karjat farmhouse. Could you please share the pricing, availability, and menu details?`;
  return `https://wa.me/${baseNum}?text=${encodeURIComponent(text)}`;
}

/**
 * Helper for quick direct chat button
 */
export function buildDirectWhatsAppUrl() {
  const baseNum = BUSINESS_CONFIG.contact.whatsappRaw;
  const text = `Hello Kalpana Farm! I am planning a farmhouse trip to Karjat and would like more details regarding bookings and facilities.`;
  return `https://wa.me/${baseNum}?text=${encodeURIComponent(text)}`;
}
