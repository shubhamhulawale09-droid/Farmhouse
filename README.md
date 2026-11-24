# Kalpana Farm – Premium Farmhouse & Getaway Website Demo
**Location:** Karjat, Maharashtra, India  
**Live Contact Placeholder:** +91 73048 35188  
**Designed for:** High-Conversion Client Presentation & Hospitality Experience

---

## 🌿 Overview

This project is a bespoke, luxury website concept created for **Kalpana Farm, Karjat**. Designed with a nature-inspired luxury aesthetic, it communicates an escape from urban congestion into peaceful greenery, featuring a private swimming pool, open cricket turf, spacious lawns, comfortable AC rooms, and authentic regional group dining.

The entire website is built to **convert visitors into direct WhatsApp enquiries** while maintaining an editorial resort aesthetic.

---

## ✨ Design & Architecture Highlights

- **Aesthetic Direction:** Earthy forest green (`#0D1E18`, `#1C382E`), warm cream & sand (`#FAF8F5`, `#F5F0E6`), and subtle champagne gold (`#deb87e`, `#b58d4a`).
- **Typography:** Classic luxury editorial serif (`Playfair Display`, `Cormorant Garamond`) paired with modern, ultra-clean sans-serif (`Plus Jakarta Sans`).
- **Interactive Sticky Navigation:** Transparent over the hero, transitions into frosted glass on scroll with smooth section anchor scrolling and full mobile drawer navigation.
- **Hero Experience:** High-impact full-width swimming pool & greenery imagery with bold value proposition, "Explore Experiences" and "Enquire Now" triggers, and animated scroll indicator.
- **Visual Experiences & Facilities:** 4 rich experience spotlights (Swimming Pool, Cricket Turf, Family & Group Gatherings, Food & Dining) and 12 categorized amenities with filter tabs and Lucide icons.
- **Editorial Photo Gallery with Lightbox:** Responsive grid with category filters (Pool, Rooms, Activities, Dining) and full-screen lightbox modal with keyboard and arrow navigation.
- **Transparent Packages:** 3 structured packages (Day Picnic, Overnight Stay, Group Celebration) with "Contact for Pricing" and instant WhatsApp enquiry buttons.
- **Karjat Location Section:** Driving times and distances from Mumbai (~1h 45m), Pune (~1h 55m), Panvel (~50m), and Karjat Station (~15m) with interactive Google Maps preview.
- **Working WhatsApp Integration:** Validated contact form that generates a formatted WhatsApp message (`wa.me`) with guest count, dates, and package selection, directing straight to `+91 73048 35188`.
- **Floating WhatsApp Widget:** Persistent bottom-right quick chat button with pulsating glow effect.

---

## 🛠️ Technology Stack

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Google Fonts (Playfair Display, Cormorant Garamond, Plus Jakarta Sans)

---

## 📁 Project Structure

```text
kalpana-farm/
├── index.html                  # SEO meta tags, OpenGraph, Google Fonts
├── vite.config.js              # Vite + Tailwind 4 configuration
├── package.json
└── src/
    ├── main.jsx                # Application entry
    ├── App.jsx                 # Layout orchestration
    ├── index.css               # Tailwind theme & luxury tokens
    ├── config/
    │   └── business.js         # ⭐ CENTRAL CONFIGURATION (Phone, Address, Packages, Media)
    └── components/
        ├── Navbar.jsx          # Glassmorphic responsive header
        ├── Hero.jsx            # Cinematic hero with scroll indicator
        ├── About.jsx           # Property overview & 4 core pillars
        ├── Experiences.jsx     # 4 visual experience cards with WhatsApp buttons
        ├── Facilities.jsx      # Categorized amenities grid
        ├── Gallery.jsx         # Photo gallery with interactive Lightbox
        ├── Packages.jsx        # Day Picnic, Overnight Stay, Group Buyout
        ├── WhyChooseUs.jsx     # 6 core differentiators & statistics
        ├── Location.jsx        # Karjat map, travel times, directions
        ├── Contact.jsx         # Booking form with WhatsApp automation
        ├── Footer.jsx          # Comprehensive footer with links & disclaimer
        └── FloatingWhatsApp.jsx# Bottom-right quick inquiry button
```

---

## ⚙️ How to Customize Business Information

All business information is managed in one central file:  
`src/config/business.js`

To update:
1. **Phone & WhatsApp Number:** Change `contact.phoneDisplay`, `contact.phoneTel`, and `contact.whatsappRaw`.
2. **Address & Google Maps Embed:** Update `contact.address` and `location.embedMapUrl`.
3. **Packages & Pricing:** Edit the `packages` array in `business.js`.
4. **Photos:** Replace URLs in `gallery` and `experiences` with the owner's actual photographs.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory ready for deployment on Vercel, Netlify, or Hostinger.
