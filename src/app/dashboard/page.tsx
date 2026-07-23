"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { User, Heart, Calendar, Search, MessageSquare, ShieldCheck, LogOut } from "lucide-react";
import PropertyCard from "@/components/property/PropertyCard";

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState<"PROFILE" | "WISHLIST" | "BOOKINGS" | "SEARCHES" | "MESSAGES">("WISHLIST");

  const wishlistProps = MOCK_PROPERTIES.slice(0, 2);

  const bookings = [
    {
      id: "book-1",
      property: "The Imperial Sky Mansion & Penthouse",
      date: "August 12, 2026",
      time: "11:00 AM",
      agent: "Vikramaditya Kaith",
      status: "CONFIRMED"
    },
    {
      id: "book-2",
      property: "Palais de Bellevue Luxury Beachfront Estate",
      date: "August 18, 2026",
      time: "04:30 PM",
      agent: "Sophia Al-Mansoor",
      status: "PENDING SECURITY CLEARANCE"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* User Header Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-400/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full border-2 border-gold-400 overflow-hidden shadow-gold-glow">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-white">Lord Alistair Sterling</h1>
              <span className="px-3 py-0.5 rounded-full bg-gold-400 text-dark-400 text-[10px] font-bold uppercase font-mono">
                VIP Black Card
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">a.sterling@sterlingholdings.co.uk</p>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "/login")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-100 border border-white/10 text-neutral-400 hover:text-rose-400 text-xs font-semibold uppercase tracking-wider"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Dashboard Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 pb-3">
        {[
          { id: "WISHLIST", label: "Saved Wishlist", icon: Heart },
          { id: "BOOKINGS", label: "Private Viewings", icon: Calendar },
          { id: "SEARCHES", label: "Saved Searches", icon: Search },
          { id: "MESSAGES", label: "Concierge Messages", icon: MessageSquare },
          { id: "PROFILE", label: "Account Profile", icon: User },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
              activeTab === tab.id
                ? "bg-gradient-gold text-dark-400 shadow-gold-glow"
                : "bg-dark-100 text-neutral-300 border border-white/10 hover:border-gold-400/40"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === "WISHLIST" && (
        <div className="space-y-6">
          <h3 className="font-playfair text-2xl font-bold text-white">Your Saved Estates ({wishlistProps.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistProps.map((prop) => (
              <PropertyCard key={prop.id} property={prop} isWishlisted={true} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "BOOKINGS" && (
        <div className="space-y-6">
          <h3 className="font-playfair text-2xl font-bold text-white">Scheduled Private Viewing Appointments</h3>
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="glass-panel p-6 rounded-2xl border border-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-gold-400 font-bold">{b.status}</span>
                  <h4 className="font-playfair text-xl font-bold text-white">{b.property}</h4>
                  <p className="text-xs text-neutral-400 font-mono">Date: {b.date} at {b.time} • Senior Advisor: {b.agent}</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-dark-100 border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-dark-400 text-xs font-semibold uppercase tracking-wider">
                  View Security Pass
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "PROFILE" && (
        <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 max-w-2xl space-y-6">
          <h3 className="font-playfair text-2xl font-bold text-white">VIP Profile Settings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1">Full Name</label>
              <input type="text" defaultValue="Lord Alistair Sterling" className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white" />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">Primary Email</label>
              <input type="email" defaultValue="a.sterling@sterlingholdings.co.uk" className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white" />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">Phone Number</label>
              <input type="tel" defaultValue="+44 7911 123456" className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white" />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">Preferred Currency</label>
              <select className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white">
                <option>INR (₹)</option>
                <option>USD ($)</option>
                <option>EUR (€)</option>
              </select>
            </div>
          </div>
          <button className="px-6 py-3 bg-gradient-gold text-dark-400 font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-glow">
            Save Profile Changes
          </button>
        </div>
      )}
    </div>
  );
}
