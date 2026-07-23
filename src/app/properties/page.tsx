"use client";

import { useState } from "react";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import { PropertyFilterState, Property } from "@/types";
import PropertyFilter from "@/components/property/PropertyFilter";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyCompareDrawer from "@/components/property/PropertyCompareDrawer";
import { LayoutGrid, List, MapPin, SlidersHorizontal, Sparkles } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"GRID" | "LIST">("GRID");
  const [showMap, setShowMap] = useState(false);

  const [filterState, setFilterState] = useState<PropertyFilterState>({
    searchQuery: "",
    city: "",
    propertyType: "",
    status: "",
    minPrice: 50000000,
    maxPrice: 1000000000,
    bedrooms: "",
    bathrooms: "",
    minArea: 0,
    maxArea: 50000,
    sortBy: "featured",
    amenities: [],
  });

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

  // Filter Logic
  const filteredProperties = MOCK_PROPERTIES.filter((prop) => {
    if (
      filterState.searchQuery &&
      !prop.title.toLowerCase().includes(filterState.searchQuery.toLowerCase()) &&
      !prop.location.toLowerCase().includes(filterState.searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (filterState.city && prop.city.toLowerCase() !== filterState.city.toLowerCase()) {
      return false;
    }

    if (filterState.propertyType && prop.propertyType !== filterState.propertyType) {
      return false;
    }

    if (prop.price > filterState.maxPrice) {
      return false;
    }

    if (filterState.bedrooms && prop.bedrooms < Number(filterState.bedrooms)) {
      return false;
    }

    if (filterState.amenities.length > 0) {
      const hasAllAmenities = filterState.amenities.every((am) =>
        prop.amenities.includes(am)
      );
      if (!hasAllAmenities) return false;
    }

    return true;
  });

  const comparedProps = MOCK_PROPERTIES.filter((p) => compare.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> International Estate Registry
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mt-1">
            Ultra-Prime Properties
          </h1>
        </div>
        <p className="text-xs text-neutral-400 font-mono">
          Showing <strong className="text-gold-400">{filteredProperties.length}</strong> of {MOCK_PROPERTIES.length} verified listings
        </p>
      </div>

      {/* Filter Component */}
      <PropertyFilter
        filterState={filterState}
        onChange={setFilterState}
        onReset={() =>
          setFilterState({
            searchQuery: "",
            city: "",
            propertyType: "",
            status: "",
            minPrice: 50000000,
            maxPrice: 1000000000,
            bedrooms: "",
            bathrooms: "",
            minArea: 0,
            maxArea: 50000,
            sortBy: "featured",
            amenities: [],
          })
        }
      />

      {/* View Toggles & Map View Button */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setShowMap(!showMap)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
            showMap
              ? "bg-gold-400 text-dark-400 border-gold-400 shadow-gold-glow"
              : "bg-dark-100 text-gold-400 border-gold-400/30 hover:bg-gold-400/10"
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>{showMap ? "Hide Interactive Map" : "Show Map View"}</span>
        </button>

        <div className="flex items-center gap-2 bg-dark-100 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setViewMode("GRID")}
            className={`p-2 rounded-lg text-neutral-400 transition-colors ${
              viewMode === "GRID" ? "bg-gold-400/20 text-gold-400" : "hover:text-white"
            }`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("LIST")}
            className={`p-2 rounded-lg text-neutral-400 transition-colors ${
              viewMode === "LIST" ? "bg-gold-400/20 text-gold-400" : "hover:text-white"
            }`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Map View Simulation */}
      {showMap && (
        <div className="w-full h-80 rounded-2xl bg-dark-200 border border-gold-400/30 flex items-center justify-center relative overflow-hidden glass-panel">
          <div className="text-center space-y-2">
            <MapPin className="w-8 h-8 text-gold-400 animate-bounce mx-auto" />
            <h4 className="font-playfair text-xl font-bold text-white">Interactive Satellite Map Engaged</h4>
            <p className="text-xs text-neutral-400 font-mono">
              Plotting {filteredProperties.length} prime locations across Worli, Goa Coast, Diplomatic Enclave & Golf Course Road
            </p>
          </div>
        </div>
      )}

      {/* Property Cards Grid */}
      {filteredProperties.length > 0 ? (
        <div
          className={`grid gap-8 ${
            viewMode === "GRID"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredProperties.map((prop) => (
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
      ) : (
        <div className="text-center py-20 glass-panel rounded-2xl border border-gold-400/20 space-y-4">
          <h3 className="font-playfair text-2xl font-bold text-white">No Matching Estates Found</h3>
          <p className="text-sm text-neutral-400">
            Try adjusting your search criteria or price parameters.
          </p>
        </div>
      )}

      {/* Floating Compare Drawer */}
      <PropertyCompareDrawer
        comparedProperties={comparedProps}
        onRemove={toggleCompare}
        onClear={() => setCompare([])}
      />
    </div>
  );
}
