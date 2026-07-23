"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, CheckCircle2, Building, Compass } from "lucide-react";
import { MOCK_PROPERTIES } from "@/data/mockProperties";
import PropertyCard from "@/components/property/PropertyCard";

interface AIConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIConciergeModal({ isOpen, onClose }: AIConciergeModalProps) {
  const [step, setStep] = useState(1);
  const [preference, setPreference] = useState({
    lifestyle: "",
    city: "",
    budget: "",
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<typeof MOCK_PROPERTIES>([]);

  if (!isOpen) return null;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults(MOCK_PROPERTIES.slice(0, 2));
      setStep(4);
    }, 1500);
  };

  const reset = () => {
    setStep(1);
    setResults([]);
    setPreference({ lifestyle: "", city: "", budget: "" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-3xl glass-panel border border-gold-400/40 rounded-2xl p-6 sm:p-8 relative shadow-luxury overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 blur-3xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center border border-gold-400/40">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-playfair text-2xl font-bold text-white">KAITH AI Concierge</h3>
            <p className="text-xs text-neutral-400 font-light">Custom Architectural & Estate Matching Engine</p>
          </div>
        </div>

        {/* Step 1: Lifestyle */}
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-base text-gold-300 font-medium">Select your desired lifestyle sanctuary:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Sky Mansion / Penthouse", desc: "Panoramic high-rise views & private pools", icon: Building },
                { title: "Beachfront Estate", desc: "Private coastal sands & boat docks", icon: Compass },
                { title: "Golf Sanctuary", desc: "Lush greens & subterranean car galleries", icon: CheckCircle2 }
              ].map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setPreference({ ...preference, lifestyle: item.title });
                    setStep(2);
                  }}
                  className="p-5 rounded-xl bg-dark-100/80 border border-gold-400/20 hover:border-gold-400 text-left transition-all hover:scale-105"
                >
                  <item.icon className="w-6 h-6 text-gold-400 mb-3" />
                  <h5 className="text-sm font-semibold text-white mb-1">{item.title}</h5>
                  <p className="text-xs text-neutral-400 font-light">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: City */}
        {step === 2 && (
          <div className="space-y-6">
            <h4 className="text-base text-gold-300 font-medium">Preferred location epicenter:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Mumbai", "Goa", "Gurgaon", "New Delhi", "Bengaluru", "Lonavala"].map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setPreference({ ...preference, city });
                    setStep(3);
                  }}
                  className="py-4 px-4 rounded-xl bg-dark-100/80 border border-gold-400/20 hover:border-gold-400 text-center text-sm font-medium text-white transition-all hover:scale-105"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Analyzing / Confirmation */}
        {step === 3 && (
          <div className="space-y-6 text-center py-8">
            {isAnalyzing ? (
              <div className="space-y-4">
                <div className="w-16 h-16 border-4 border-gold-400/20 border-t-gold-400 rounded-full animate-spin mx-auto" />
                <h4 className="font-playfair text-xl text-white">Analyzing Architectural Portfolios...</h4>
                <p className="text-xs text-neutral-400 font-mono">Cross-referencing off-market listings & VIP estates</p>
              </div>
            ) : (
              <div className="space-y-6">
                <h4 className="text-lg text-white font-medium">Ready to match your preferences:</h4>
                <div className="inline-flex gap-4 p-4 rounded-xl bg-dark-100/80 border border-gold-400/20 text-xs text-neutral-300">
                  <span>Lifestyle: <strong className="text-gold-400">{preference.lifestyle}</strong></span>
                  <span>City: <strong className="text-gold-400">{preference.city}</strong></span>
                </div>
                <div>
                  <button
                    onClick={handleAnalyze}
                    className="px-8 py-3.5 rounded-full bg-gradient-gold text-dark-400 font-semibold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-gold-glow"
                  >
                    Generate AI Matches
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base text-gold-300 font-medium">Top Recommended Architectural Estates:</h4>
              <button onClick={reset} className="text-xs text-neutral-400 hover:text-gold-400 underline">
                Start Over
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto pr-2">
              {results.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
