# KAITH PROPERTIES - Ultra Luxury Real Estate Platform

**KAITH PROPERTIES** is an ultra-premium, modern, responsive, fast, and SEO-friendly real estate platform designed to surpass leading international luxury real estate brand standards.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Prisma ORM**.

---

## 🌟 Key Features

### Frontend & UI/UX
- **Obsidian Dark Gold Aesthetics**: Ultra-luxury `#0B0B0B` dark base, `#C8A96A` Champagne Gold accents, glassmorphic panels, glowing gold borders, Playfair Display and Cormorant Garamond typography.
- **Custom Smooth Mouse Cursor**: Smooth gold aura ring tracking user interactions.
- **Dynamic Multi-Currency Engine**: Instant toggle between **INR (₹)**, **USD ($)**, **EUR (€)**, and **AED**.
- **AI Property Recommendation Concierge**: Smart 3-step estate matching modal (`AIConciergeModal`).
- **Interactive Mortgage / EMI Calculator**: Real-time loan interest, monthly EMI, and total outflow breakdown with visual proportion bar.
- **Multi-Criteria Property Search & Filters**: Search keywords, city, property type, price slider up to ₹100 Cr, bedrooms, bathrooms, and luxury amenities (Helipad, Infinity Pool, Wine Cellar, Private Dock).
- **Property Comparison Drawer**: Floating bottom drawer allowing side-by-side spec comparisons of up to 4 properties.
- **Interactive Satellite Map Simulation**: Map view toggle across Worli, Goa Coast, Golf Course Road, and Diplomatic Enclave.
- **Schedule Private Viewing Modal**: In-person & Live 360° VR viewing reservations with senior advisory team.
- **Live VIP Notification Popups**: Real-time simulated interest toasts.
- **Floating WhatsApp Concierge**: Instant 24/7 direct messaging.

### Dashboards & Management
- **User Dashboard (`/dashboard`)**: VIP Profile, Saved Wishlist, Scheduled Private Viewings status, Saved Searches, Direct Messages.
- **Admin Executive Panel (`/admin`)**: Analytics Overview (Portfolio value, active listings, inquiries), Property CRUD table, Add Property modal wizard, Lead requests, Advisor management.

---

## 🚀 Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons
- **Database Schema**: Prisma ORM, PostgreSQL Schema (`prisma/schema.prisma`)
- **State & Utilities**: Currency formatter, EMI math formulas, classnames merger

---

## 🛠️ Local Development & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

---

## 📄 License & Attribution

Designed and engineered for **KAITH PROPERTIES** - Ultra Luxury Real Estate Platform.
