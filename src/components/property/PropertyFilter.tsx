"use client";

import { useState } from "react";
import { PropertyFilterState } from "@/types";
import { Search, Filter, RotateCcw, SlidersHorizontal, ChevronDown } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface PropertyFilterProps {
  filterState: PropertyFilterState;
  onChange: (newState: PropertyFilterState) => void;
  onReset: () => void;
  currency?: string;
}

export default function PropertyFilter({
  filterState,
  onChange,
  onReset,
  currency = "INR"
}: PropertyFilterProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const cities = ["All Cities", "Mumbai", "Goa", "Gurgaon", "New Delhi", "Bengaluru", "Lonavala"];
  const propertyTypes = [
    { label: "All Types", value: "" },
    { label: "Luxury Villa", value: "LUXURY_VILLA" },
    { label: "Penthouse", value: "PENTHOUSE" },
    { label: "Independent House", value: "INDEPENDENT_HOUSE" },
    { label: "Commercial Shop", value: "COMMERCIAL_SHOP" },
    { label: "Farm House", value: "FARM_HOUSE" },
  ];
  const amenityOptions = [
    "Private Infinity Glass Pool",
    "Helipad Access",
    "Private Wine Cellar & Tasting Room",
    "Private Boat Dock",
    "Golf Course View",
    "Championship Tennis Court",
    "Private High-Speed Elevator"
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 border border-gold-400/20 shadow-luxury space-y-6">
      {/* Primary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Search Query */}
        <div className="lg:col-span-2 relative">
          <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Estate Keywords</label>
          <div className="relative">
            <input
              type="text"
              value={filterState.searchQuery}
              onChange={(e) => onChange({ ...filterState, searchQuery: e.target.value })}
              placeholder="Search Worli Penthouse, Beachfront Villa..."
              className="w-full bg-dark-100/90 border border-gold-400/20 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* City Selector */}
        <div>
          <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">City Location</label>
          <select
            value={filterState.city}
            onChange={(e) => onChange({ ...filterState, city: e.target.value })}
            className="w-full bg-dark-100/90 border border-gold-400/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400 cursor-pointer"
          >
            {cities.map((c) => (
              <option key={c} value={c === "All Cities" ? "" : c} className="bg-dark-200">
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Property Type</label>
          <select
            value={filterState.propertyType}
            onChange={(e) => onChange({ ...filterState, propertyType: e.target.value })}
            className="w-full bg-dark-100/90 border border-gold-400/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400 cursor-pointer"
          >
            {propertyTypes.map((pt) => (
              <option key={pt.value} value={pt.value} className="bg-dark-200">
                {pt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Actions */}
        <div className="flex items-end gap-2">
          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className="flex-1 py-3 px-4 rounded-xl border border-gold-400/30 text-gold-400 hover:bg-gold-400/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
          <button
            onClick={onReset}
            className="p-3 rounded-xl border border-white/10 text-neutral-400 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
            title="Reset Filters"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Advanced Filter Collapsible Section */}
      {isAdvancedOpen && (
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {/* Price Range Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gold-400 font-mono uppercase">Max Guide Price:</span>
              <span className="text-white font-bold">{formatPrice(filterState.maxPrice, currency)}</span>
            </div>
            <input
              type="range"
              min="100000000" // 10 Cr
              max="1000000000" // 100 Cr
              step="50000000"
              value={filterState.maxPrice}
              onChange={(e) => onChange({ ...filterState, maxPrice: Number(e.target.value) })}
              className="w-full h-2 bg-dark-100 rounded-lg cursor-pointer accent-gold-400"
            />
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Bedrooms</label>
              <select
                value={filterState.bedrooms}
                onChange={(e) => onChange({ ...filterState, bedrooms: e.target.value })}
                className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3 py-2.5 text-xs text-white"
              >
                <option value="" className="bg-dark-200">Any Beds</option>
                <option value="4" className="bg-dark-200">4+ Bedrooms</option>
                <option value="5" className="bg-dark-200">5+ Bedrooms</option>
                <option value="6" className="bg-dark-200">6+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Sort By</label>
              <select
                value={filterState.sortBy}
                onChange={(e) => onChange({ ...filterState, sortBy: e.target.value as any })}
                className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3 py-2.5 text-xs text-white"
              >
                <option value="featured" className="bg-dark-200">Featured</option>
                <option value="price-desc" className="bg-dark-200">Price: High to Low</option>
                <option value="price-asc" className="bg-dark-200">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Luxury Amenities Checkboxes */}
          <div>
            <label className="block text-[10px] uppercase font-mono text-gold-400 mb-2">Bespoke Amenities</label>
            <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1 text-xs text-neutral-300">
              {amenityOptions.map((am) => {
                const isSelected = filterState.amenities.includes(am);
                return (
                  <label key={am} className="flex items-center gap-2 cursor-pointer hover:text-gold-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {
                        const newAm = isSelected
                          ? filterState.amenities.filter((a) => a !== am)
                          : [...filterState.amenities, am];
                        onChange({ ...filterState, amenities: newAm });
                      }}
                      className="rounded accent-gold-400"
                    />
                    <span className="truncate">{am}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
