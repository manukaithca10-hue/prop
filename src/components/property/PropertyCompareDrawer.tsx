"use client";

import { Property } from "@/types";
import { X, Layers, Trash2, CheckCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

interface PropertyCompareDrawerProps {
  comparedProperties: Property[];
  onRemove: (id: string) => void;
  onClear: () => void;
  currency?: string;
}

export default function PropertyCompareDrawer({
  comparedProperties,
  onRemove,
  onClear,
  currency = "INR"
}: PropertyCompareDrawerProps) {
  if (comparedProperties.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-dark-300/95 backdrop-blur-2xl border-t border-gold-400/40 p-4 shadow-luxury animate-slide-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center border border-gold-400/30">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-mono text-gold-400 tracking-wider">
              Comparing {comparedProperties.length} Estates
            </h4>
            <p className="text-[10px] text-neutral-400 hidden sm:block">Side-by-side architectural specs</p>
          </div>
        </div>

        {/* Selected Property Cards Preview */}
        <div className="flex items-center gap-3 overflow-x-auto py-1">
          {comparedProperties.map((prop) => (
            <div
              key={prop.id}
              className="flex items-center gap-2 bg-dark-100 border border-gold-400/20 px-3 py-1.5 rounded-lg text-xs shrink-0"
            >
              <span className="text-white font-medium max-w-[120px] truncate">{prop.title}</span>
              <span className="text-gold-400 font-mono">{formatPrice(prop.price, currency)}</span>
              <button
                onClick={() => onRemove(prop.id)}
                className="text-neutral-400 hover:text-rose-400 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Clear & Compare CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClear}
            className="p-2 text-neutral-400 hover:text-rose-400 transition-colors"
            title="Clear Comparison"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <Link
            href={`/properties?compare=true`}
            className="px-4 py-2 bg-gradient-gold text-dark-400 rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
          >
            View Matrix
          </Link>
        </div>
      </div>
    </div>
  );
}
