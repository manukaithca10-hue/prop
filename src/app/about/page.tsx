"use client";

import Image from "next/image";
import { Crown, Sparkles, Award, ShieldCheck, Globe2, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Story */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center justify-center gap-1.5">
          <Crown className="w-4 h-4" /> The Legacy of Kaith Properties
        </span>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
          Architects of Extraordinary Real Estate
        </h1>
        <p className="text-base text-neutral-300 font-light leading-relaxed">
          Founded on the principles of absolute discretion, structural artistry, and private wealth preservation, KAITH PROPERTIES has represented the world&apos;s most distinctive architectural sanctuaries for over nearly two decades.
        </p>
      </div>

      {/* Grid: Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-4">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center border border-gold-400/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-playfair text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            To curate and connect ultra-high-net-worth clients with irreplaceable architectural masterpieces that define international skylines and coastal coastlines.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-4">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center border border-gold-400/30">
            <Globe2 className="w-6 h-6" />
          </div>
          <h3 className="font-playfair text-2xl font-bold text-white">Global Vision</h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            To establish an interconnected global family office network across London, Dubai, New York, and Mumbai delivering bespoke private wealth real estate services.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-4">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center border border-gold-400/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-playfair text-2xl font-bold text-white">Dynastic Values</h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Uncompromising integrity, 100% off-market confidentiality, white-glove concierge standards, and long-term capital preservation for generations.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="glass-panel p-10 rounded-3xl border border-gold-400/30 space-y-8">
        <h2 className="font-playfair text-3xl font-bold text-white text-center">Milestones of Distinction</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2 p-4 border border-white/10 rounded-xl bg-dark-100/60">
            <p className="text-gold-400 font-mono text-sm font-bold">2008</p>
            <h4 className="font-playfair text-lg font-semibold text-white">Founded in Mumbai</h4>
            <p className="text-xs text-neutral-400 font-light">Established South Mumbai brokerage catering to private industrialist families.</p>
          </div>
          <div className="space-y-2 p-4 border border-white/10 rounded-xl bg-dark-100/60">
            <p className="text-gold-400 font-mono text-sm font-bold">2014</p>
            <h4 className="font-playfair text-lg font-semibold text-white">International Expansion</h4>
            <p className="text-xs text-neutral-400 font-light">Opened private wealth advisory desks in London Mayfair and Dubai DIFC.</p>
          </div>
          <div className="space-y-2 p-4 border border-white/10 rounded-xl bg-dark-100/60">
            <p className="text-gold-400 font-mono text-sm font-bold">2020</p>
            <h4 className="font-playfair text-lg font-semibold text-white">Kaith Developments</h4>
            <p className="text-xs text-neutral-400 font-light">Launched ultra-luxury architectural development wing with $1.2B pipeline.</p>
          </div>
          <div className="space-y-2 p-4 border border-white/10 rounded-xl bg-dark-100/60">
            <p className="text-gold-400 font-mono text-sm font-bold">2026</p>
            <h4 className="font-playfair text-lg font-semibold text-white">$4.8B Milestone</h4>
            <p className="text-xs text-neutral-400 font-light">Surpassed $4.8 Billion in international high-net-worth property transactions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
