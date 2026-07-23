"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Calendar, 
  Car, 
  Crown, 
  Sparkles, 
  Share2, 
  Printer, 
  Heart, 
  Play, 
  Compass, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  ChevronRight,
  Maximize2
} from "lucide-react";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { formatPrice } from "@/lib/utils";
import MortgageCalculator from "@/components/property/MortgageCalculator";
import ScheduleViewingModal from "@/components/property/ScheduleViewingModal";
import PropertyCard from "@/components/property/PropertyCard";

export default function PropertyDetailsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = MOCK_PROPERTIES.find((p) => p.id === id || p.slug === id) || MOCK_PROPERTIES[0];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [showViewingModal, setShowViewingModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeFloorTab, setActiveFloorTab] = useState<"GROUND" | "UPPER" | "PENTHOUSE">("GROUND");

  const similarProperties = MOCK_PROPERTIES.filter((p) => p.id !== property.id).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/properties" className="hover:text-gold-400">Properties</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gold-400 truncate">{property.title}</span>
      </div>

      {/* Main Header & Actions */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-gold-400/20 text-gold-400 border border-gold-400/30 text-[10px] uppercase font-bold tracking-wider">
              {property.propertyType.replace("_", " ")}
            </span>
            <span className="px-3 py-1 rounded-full bg-dark-100 text-neutral-300 border border-white/10 text-[10px] uppercase font-bold tracking-wider">
              {property.status.replace("_", " ")}
            </span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white leading-tight">
            {property.title}
          </h1>
          <p className="text-sm text-neutral-400 flex items-center gap-1.5 font-light">
            <MapPin className="w-4 h-4 text-gold-400" />
            {property.address}, {property.city}, {property.state}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col items-start lg:items-end gap-3">
          <div className="text-left lg:text-right">
            <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">Official Asking Price</p>
            <p className="font-playfair text-3xl sm:text-4xl font-bold gold-gradient-text">
              {formatPrice(property.price)}
            </p>
            {property.pricePerSqFt && (
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                ₹{property.pricePerSqFt.toLocaleString()} / sqft
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowViewingModal(true)}
              className="px-6 py-3 bg-gradient-gold text-dark-400 font-bold uppercase tracking-wider text-xs rounded-full hover:scale-105 transition-transform shadow-gold-glow"
            >
              Schedule Private Viewing
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery & Media Controls */}
      <div className="space-y-4">
        {/* Main High-Res Viewer */}
        <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden glass-panel border border-gold-400/30 group">
          <Image
            src={property.images[activeImageIdx] || property.images[0]}
            alt={property.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 via-transparent to-black/20" />

          {/* Video / 360 Tour Overlay buttons */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            {property.videoUrl && (
              <button
                onClick={() => setShowVideoModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-dark-400/80 backdrop-blur-md border border-gold-400/40 text-gold-400 hover:bg-gold-400 hover:text-dark-400 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Video Tour</span>
              </button>
            )}
            {property.virtualTour360 && (
              <button
                onClick={() => alert("Engaging Interactive Matterport 360° VR View...")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-dark-400/80 backdrop-blur-md border border-gold-400/40 text-gold-400 hover:bg-gold-400 hover:text-dark-400 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>360° VR View</span>
              </button>
            )}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIdx(idx)}
              className={`relative w-28 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                activeImageIdx === idx ? "border-gold-400 scale-105 shadow-gold-glow" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="Thumbnail" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Grid Specs & Agent Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Details & Floor Plans */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Key Specifications Grid */}
          <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <Bed className="w-6 h-6 text-gold-400 mx-auto" />
              <p className="text-xl font-bold font-playfair text-white">{property.bedrooms}</p>
              <p className="text-[10px] uppercase font-mono text-neutral-400">Bedrooms</p>
            </div>
            <div className="space-y-1">
              <Bath className="w-6 h-6 text-gold-400 mx-auto" />
              <p className="text-xl font-bold font-playfair text-white">{property.bathrooms}</p>
              <p className="text-[10px] uppercase font-mono text-neutral-400">Bathrooms</p>
            </div>
            <div className="space-y-1">
              <Square className="w-6 h-6 text-gold-400 mx-auto" />
              <p className="text-xl font-bold font-playfair text-white">{property.areaSqFt.toLocaleString()}</p>
              <p className="text-[10px] uppercase font-mono text-neutral-400">Built-Up Sq Ft</p>
            </div>
            <div className="space-y-1">
              <Car className="w-6 h-6 text-gold-400 mx-auto" />
              <p className="text-xl font-bold font-playfair text-white">{property.garageSpaces || 4}</p>
              <p className="text-[10px] uppercase font-mono text-neutral-400">Garage Spaces</p>
            </div>
          </div>

          {/* Architectural Description */}
          <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-white">Architectural Overview</h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Bespoke Amenities */}
          <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Exclusive Estate Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.amenities.map((am) => (
                <div key={am} className="flex items-center gap-3 p-3 rounded-xl bg-dark-100/80 border border-gold-400/10">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-xs text-neutral-200 font-medium">{am}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Floor Plans */}
          <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Bespoke Floor Plans</h3>
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              {(["GROUND", "UPPER", "PENTHOUSE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFloorTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    activeFloorTab === tab
                      ? "bg-gold-400 text-dark-400"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab} Level
                </button>
              ))}
            </div>
            <div className="relative w-full h-80 rounded-xl bg-dark-100/90 border border-gold-400/20 flex items-center justify-center p-4">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Floor Plan"
                fill
                className="object-contain filter opacity-80"
              />
            </div>
          </div>

          {/* Nearby Points of Interest */}
          {property.nearbyPlaces && (
            <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-white">Nearby Points of Interest</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.nearbyPlaces.map((np) => (
                  <div key={np.name} className="flex items-center justify-between p-3.5 rounded-xl bg-dark-100/80 border border-white/10 text-xs">
                    <span className="text-white font-medium">{np.name} ({np.category})</span>
                    <span className="text-gold-400 font-mono">{np.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Integrated Mortgage Calculator */}
          <MortgageCalculator initialPrice={property.price} />

        </div>

        {/* Right Sidebar: Agent Contact & Viewing */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-gold-400/30 shadow-luxury space-y-6 sticky top-28">
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold-glow shrink-0">
                <Image src={property.agent.avatar} alt={property.agent.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-playfair text-lg font-bold text-white">{property.agent.name}</h4>
                <p className="text-xs text-gold-400 font-mono">{property.agent.title}</p>
                <p className="text-[10px] text-neutral-400 mt-0.5">KAITH Private Wealth Desk</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${property.agent.phone}`}
                className="w-full py-3 rounded-xl bg-dark-100 border border-gold-400/30 text-white hover:border-gold-400 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Concierge Desk</span>
              </a>

              <a
                href={`https://wa.me/${property.agent.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp Inquiry</span>
              </a>

              <button
                onClick={() => setShowViewingModal(true)}
                className="w-full py-3.5 bg-gradient-gold text-dark-400 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-gold-glow"
              >
                Book Private Viewing
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Viewing Modal */}
      <ScheduleViewingModal
        property={property}
        isOpen={showViewingModal}
        onClose={() => setShowViewingModal(false)}
      />

      {/* Video Modal Embed */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="w-full max-w-4xl glass-panel p-4 rounded-2xl relative">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-4 -right-4 p-2 bg-gold-400 text-dark-400 rounded-full font-bold"
            >
              ✕
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
              <iframe
                src={property.videoUrl}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
