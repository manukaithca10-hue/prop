"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  Crown, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Award, 
  Globe2, 
  ChevronRight,
  Play
} from "lucide-react";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { MOCK_PROJECTS } from "@/data/mockProjects";
import { MOCK_BLOGS } from "@/data/mockBlogs";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyCompareDrawer from "@/components/property/PropertyCompareDrawer";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"BUY" | "RENT" | "COMMERCIAL">("BUY");
  const [searchLocation, setSearchLocation] = useState("");
  const [wishlist, setWishlist] = useState<string[]>(["prop-1"]);
  const [compare, setCompare] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id: string) => {
    setCompare((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : prev.length < 4
        ? [...prev, id]
        : prev
    );
  };

  const featuredProps = MOCK_PROPERTIES.slice(0, 3);
  const comparedProps = MOCK_PROPERTIES.filter((p) => compare.includes(p.id));

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center -mt-24 pt-28 overflow-hidden">
        {/* Background Image / Video Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
            alt="Ultra Luxury Real Estate Hero"
            fill
            priority
            className="object-cover scale-105 filter brightness-75 animate-pulse-glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/60 to-dark-400/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-mono uppercase tracking-[0.25em]"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>The Standard of International Luxury</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Discover <span className="gold-gradient-text italic">Luxury Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Exclusive off-market sky mansions, beachfront private estates, and architectural master developments curated for the global elite.
          </motion.p>

          {/* Quick Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto glass-panel p-4 sm:p-6 rounded-2xl border border-gold-400/30 shadow-luxury space-y-4"
          >
            {/* Tabs */}
            <div className="flex items-center justify-center gap-2 border-b border-white/10 pb-3">
              {(["BUY", "RENT", "COMMERCIAL"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-gradient-gold text-dark-400 shadow-gold-glow"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inputs & Search CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
              <div className="sm:col-span-2">
                <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Desired Location</label>
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Worli Sea Face, Goa Coast, Diplomatic Enclave..."
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Estate Category</label>
                <select className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400 cursor-pointer">
                  <option className="bg-dark-200">Sky Mansion / Penthouse</option>
                  <option className="bg-dark-200">Beachfront Estate</option>
                  <option className="bg-dark-200">Golf Villa</option>
                  <option className="bg-dark-200">Commercial Flagship</option>
                </select>
              </div>

              <div className="flex items-end">
                <Link
                  href={`/properties?search=${encodeURIComponent(searchLocation)}`}
                  className="w-full py-3 bg-gradient-gold text-dark-400 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-gold-glow"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Estates</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl glass-panel border border-gold-400/20 shadow-luxury text-center">
          <div className="space-y-1">
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold gold-gradient-text">$4.8B+</h3>
            <p className="text-xs uppercase font-mono text-neutral-400 tracking-wider">Ultra-Prime Transactions</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold gold-gradient-text">100%</h3>
            <p className="text-xs uppercase font-mono text-neutral-400 tracking-wider">Off-Market Confidentiality</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold gold-gradient-text">18+</h3>
            <p className="text-xs uppercase font-mono text-neutral-400 tracking-wider">Global Architecture Awards</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold gold-gradient-text">4</h3>
            <p className="text-xs uppercase font-mono text-neutral-400 tracking-wider">International Hubs</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Properties Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Curated Portfolio
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mt-1">
              Featured Flagship Estates
            </h2>
          </div>
          <Link
            href="/properties"
            className="flex items-center gap-2 text-xs uppercase font-semibold text-gold-400 hover:text-white transition-colors"
          >
            <span>Explore All 140+ Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProps.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              isWishlisted={wishlist.includes(prop.id)}
              isCompared={compare.includes(prop.id)}
              onToggleWishlist={toggleWishlist}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>
      </section>

      {/* 4. Master Architectural Projects */}
      <section className="bg-dark-200 py-20 border-y border-gold-400/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase text-gold-400 tracking-widest">Iconic Developments</span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
              Master Architectural Projects
            </h2>
            <p className="text-sm text-neutral-400 font-light">
              Pioneering developments redefined by uncompromised structural excellence and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MOCK_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={proj.coverImage}
                    alt={proj.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-gold-400 text-dark-400 font-bold">
                    {proj.status.replace("_", " ")}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-gold-400 font-mono mt-1">{proj.tagline}</p>
                    <p className="text-xs text-neutral-400 font-light mt-2 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase font-mono">From</p>
                      <p className="font-playfair text-lg font-bold text-white">₹{(proj.startingPrice / 10000000).toFixed(0)} Cr</p>
                    </div>
                    <Link
                      href="/projects"
                      className="px-4 py-2 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-400 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Project Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us / Bespoke Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-gold-400 tracking-widest">Bespoke Excellence</span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
            Why High-Net-Worth Investors Choose Kaith Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Confidentiality & Off-Market Access",
              desc: "Over 40% of our portfolio consists of unlisted private sky mansions and royal estates accessible strictly via NDA and private invitation.",
              icon: ShieldCheck
            },
            {
              title: "International Family Office Advisory",
              desc: "Personalized wealth structuring, cross-border tax guidance, and private real estate investment banking for global dynastic families.",
              icon: Globe2
            },
            {
              title: "Architectural & Bespoke Concierge",
              desc: "From helicopter transfers to private viewings and interior architectural customization with world-class design houses.",
              icon: Award
            }
          ].map((item) => (
            <div
              key={item.title}
              className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-4 hover:border-gold-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center border border-gold-400/30 shadow-gold-glow">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-gold-400/30 shadow-luxury text-center space-y-8 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-400/40">
            <Crown className="w-6 h-6" />
          </div>

          <blockquote className="font-playfair text-xl sm:text-3xl text-white italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;KAITH PROPERTIES managed our private penthouse acquisition in Worli with unmatched discretion and architectural expertise. Their concierge team is simply world-class.&rdquo;
          </blockquote>

          <div>
            <h4 className="font-playfair text-lg font-bold text-gold-400">Dr. Cyrus Poonawalla</h4>
            <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest mt-1">Industrialist & Global Private Wealth Investor</p>
          </div>
        </div>
      </section>

      {/* Compare Drawer */}
      <PropertyCompareDrawer
        comparedProperties={comparedProps}
        onRemove={toggleCompare}
        onClear={() => setCompare([])}
      />
    </div>
  );
}
