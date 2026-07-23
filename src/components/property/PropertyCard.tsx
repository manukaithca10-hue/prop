"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Heart, 
  Layers, 
  Check, 
  Eye,
  Crown,
  Sparkles
} from "lucide-react";
import { Property } from "@/types";
import { formatPrice } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  currency?: string;
  isWishlisted?: boolean;
  isCompared?: boolean;
  onToggleWishlist?: (id: string) => void;
  onToggleCompare?: (id: string) => void;
}

export default function PropertyCard({
  property,
  currency = "INR",
  isWishlisted = false,
  isCompared = false,
  onToggleWishlist,
  onToggleCompare
}: PropertyCardProps) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  return (
    <div className="group glass-card rounded-2xl overflow-hidden flex flex-col relative transition-all duration-500">
      {/* Top Image Banner */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-dark-300">
        <Image
          src={property.images[currentImgIdx] || property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-black/30" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {property.isFeatured && (
            <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-gradient-gold text-dark-400 shadow-gold-glow">
              <Crown className="w-3 h-3" /> Featured
            </span>
          )}
          {property.isPremium && (
            <span className="flex items-center gap-1 text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1 rounded-full bg-dark-400/80 backdrop-blur-md text-gold-400 border border-gold-400/30">
              <Sparkles className="w-3 h-3" /> Ultra Prime
            </span>
          )}
          {property.status === "FOR_RENT" && (
            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-blue-600/80 text-white">
              Rental
            </span>
          )}
        </div>

        {/* Wishlist & Compare Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          {onToggleCompare && (
            <button
              onClick={() => onToggleCompare(property.id)}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isCompared
                  ? "bg-gold-400 text-dark-400"
                  : "bg-dark-400/60 text-white hover:text-gold-400 border border-white/10"
              }`}
              title="Compare Property"
            >
              <Layers className="w-4 h-4" />
            </button>
          )}

          {onToggleWishlist && (
            <button
              onClick={() => onToggleWishlist(property.id)}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isWishlisted
                  ? "bg-rose-600 text-white"
                  : "bg-dark-400/60 text-white hover:text-rose-400 border border-white/10"
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
            </button>
          )}
        </div>

        {/* Thumbnail Navigation Dots if multiple images */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {property.images.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImgIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImgIdx === idx ? "bg-gold-400 w-4" : "bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Property Type & Location */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="uppercase tracking-widest text-gold-400 font-mono">
              {property.propertyType.replace("_", " ")}
            </span>
            <span className="flex items-center gap-1 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              {property.city}
            </span>
          </div>

          {/* Title */}
          <Link href={`/properties/${property.id}`}>
            <h3 className="font-playfair text-xl font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-2">
            {property.description}
          </p>
        </div>

        {/* Key Specs */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-xs text-neutral-300">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'Commercial'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{property.areaSqFt.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Footer Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">Guide Price</p>
            <p className="font-playfair text-xl font-bold gold-gradient-text">
              {formatPrice(property.price, currency)}
            </p>
          </div>

          <Link
            href={`/properties/${property.id}`}
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-dark-100 border border-gold-400/30 text-gold-400 hover:bg-gradient-gold hover:text-dark-400 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            <span>View Estate</span>
            <Eye className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
