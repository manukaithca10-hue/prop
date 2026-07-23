"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { MOCK_AGENTS } from "@/data/mockAgents";
import { 
  Building2, 
  Users, 
  DollarSign, 
  Calendar, 
  Plus, 
  Edit, 
  Trash2, 
  Crown, 
  ShieldCheck, 
  Sparkles,
  CheckCircle,
  Eye
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"OVERVIEW" | "PROPERTIES" | "LEADS" | "AGENTS">("OVERVIEW");
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newProp, setNewProp] = useState({
    title: "",
    price: 350000000,
    city: "Mumbai",
    propertyType: "LUXURY_VILLA",
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 8500,
  });

  const handleDeleteProperty = (id: string) => {
    if (confirm("Are you sure you want to delete this property listing?")) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `prop-${Date.now()}`,
      title: newProp.title || "New Flagship Luxury Estate",
      slug: `new-estate-${Date.now()}`,
      description: "A newly added ultra-luxury flagship estate.",
      price: newProp.price,
      currency: "INR",
      location: `${newProp.city} Prime Corridor`,
      address: "Estate Boulevard 1",
      city: newProp.city,
      state: "Maharashtra",
      bedrooms: newProp.bedrooms,
      bathrooms: newProp.bathrooms,
      areaSqFt: newProp.areaSqFt,
      propertyType: newProp.propertyType as any,
      status: "FOR_SALE" as any,
      isFeatured: true,
      isPremium: true,
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
      ],
      amenities: ["Private Pool", "Helipad Access", "Wine Cellar"],
      agent: {
        id: "agent-1",
        name: "Vikramaditya Kaith",
        title: "Founder & Senior Managing Director",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        phone: "+91 98765 43210",
        email: "v.kaith@kaithproperties.com"
      }
    };
    setProperties([created, ...properties]);
    setShowAddModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Executive Portal
          </span>
          <h1 className="font-playfair text-3xl font-bold text-white mt-1">
            KAITH Admin Control Panel
          </h1>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-dark-400 font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-gold-glow"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Estate</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        {[
          { id: "OVERVIEW", label: "Analytics Overview" },
          { id: "PROPERTIES", label: `Estate Management (${properties.length})` },
          { id: "LEADS", label: "Viewing Leads (84)" },
          { id: "AGENTS", label: "Advisors & Staff" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === tab.id
                ? "bg-gold-400 text-dark-400 shadow-gold-glow"
                : "bg-dark-100 text-neutral-300 border border-white/10 hover:border-gold-400/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "OVERVIEW" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 space-y-2">
              <span className="text-[10px] uppercase font-mono text-neutral-400">Total Portfolio Value</span>
              <h3 className="font-playfair text-3xl font-bold gold-gradient-text">₹3,420 Cr</h3>
              <p className="text-[10px] text-emerald-400 font-mono">+14.2% from Q2</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 space-y-2">
              <span className="text-[10px] uppercase font-mono text-neutral-400">Active Listings</span>
              <h3 className="font-playfair text-3xl font-bold text-white">{properties.length}</h3>
              <p className="text-[10px] text-gold-400 font-mono">100% Verified Ultra-Prime</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 space-y-2">
              <span className="text-[10px] uppercase font-mono text-neutral-400">VIP Viewing Inquiries</span>
              <h3 className="font-playfair text-3xl font-bold text-white">84</h3>
              <p className="text-[10px] text-emerald-400 font-mono">29 Confirmed Scheduled</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 space-y-2">
              <span className="text-[10px] uppercase font-mono text-neutral-400">Senior Managing Advisors</span>
              <h3 className="font-playfair text-3xl font-bold text-white">3</h3>
              <p className="text-[10px] text-neutral-400 font-mono">Mumbai • Dubai • London</p>
            </div>
          </div>

          {/* Quick Properties Table */}
          <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Recent Estate Listings</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400 uppercase font-mono">
                    <th className="py-3 px-4">Estate Title</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {properties.map((p) => (
                    <tr key={p.id} className="hover:bg-white/5">
                      <td className="py-3 px-4 font-semibold text-white">{p.title}</td>
                      <td className="py-3 px-4 text-neutral-300">{p.city}</td>
                      <td className="py-3 px-4 text-gold-400 font-mono">{formatPrice(p.price)}</td>
                      <td className="py-3 px-4 text-neutral-400">{p.propertyType}</td>
                      <td className="py-3 px-4 text-right flex items-center justify-end gap-2">
                        <Link href={`/properties/${p.id}`} className="p-1.5 text-neutral-400 hover:text-gold-400">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button onClick={() => handleDeleteProperty(p.id)} className="p-1.5 text-neutral-400 hover:text-rose-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Properties Management Tab */}
      {activeTab === "PROPERTIES" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-2xl font-bold text-white">Property Management CRUD</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {properties.map((p) => (
              <div key={p.id} className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <Image src={p.images[0]} alt="Prop" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-white">{p.title}</h4>
                    <p className="text-xs text-neutral-400">{p.city} • {p.bedrooms} Beds • {p.areaSqFt} sqft</p>
                    <p className="text-xs text-gold-400 font-mono font-bold mt-0.5">{formatPrice(p.price)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => handleDeleteProperty(p.id)} className="px-3 py-1.5 rounded-lg bg-rose-600/20 text-rose-400 border border-rose-500/30 text-xs">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl glass-panel p-8 rounded-2xl border border-gold-400/40 space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Add New Flagship Estate</h3>
            <form onSubmit={handleAddProperty} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Estate Title</label>
                <input
                  type="text"
                  required
                  value={newProp.title}
                  onChange={(e) => setNewProp({ ...newProp, title: e.target.value })}
                  placeholder="e.g. Imperial Sky Villa Worli"
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-1">Asking Price (₹ INR)</label>
                  <input
                    type="number"
                    value={newProp.price}
                    onChange={(e) => setNewProp({ ...newProp, price: Number(e.target.value) })}
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">City</label>
                  <select
                    value={newProp.city}
                    onChange={(e) => setNewProp({ ...newProp, city: e.target.value })}
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white"
                  >
                    <option>Mumbai</option>
                    <option>Goa</option>
                    <option>Gurgaon</option>
                    <option>New Delhi</option>
                    <option>Bengaluru</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-1">Bedrooms</label>
                  <input
                    type="number"
                    value={newProp.bedrooms}
                    onChange={(e) => setNewProp({ ...newProp, bedrooms: Number(e.target.value) })}
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Bathrooms</label>
                  <input
                    type="number"
                    value={newProp.bathrooms}
                    onChange={(e) => setNewProp({ ...newProp, bathrooms: Number(e.target.value) })}
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Area SqFt</label>
                  <input
                    type="number"
                    value={newProp.areaSqFt}
                    onChange={(e) => setNewProp({ ...newProp, areaSqFt: Number(e.target.value) })}
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button type="submit" className="flex-1 py-3 bg-gradient-gold text-dark-400 font-bold uppercase rounded-xl">
                  Publish Listing
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-3 border border-white/20 text-white rounded-xl">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
