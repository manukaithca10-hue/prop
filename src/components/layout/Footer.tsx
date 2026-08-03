"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Twitter, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-dark-400 border-t border-gold-400/20 pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center bg-gold-400/10 shadow-gold-glow">
                <span className="font-playfair font-bold text-xl text-gold-400">MK</span>
              </div>
              <div>
                <span className="font-playfair text-2xl font-bold tracking-wider text-white">
                  KAITH <span className="text-gold-400 font-light">PROPERTIES</span>
                </span>
              </div>
            </Link>
            <div>
              <p className="font-poppins text-sm font-bold text-white">MANDEEP KAITH</p>
              <p className="font-inter text-xs text-gold-400">Founder of KAITH PROPERTIES</p>
              <p className="font-inter text-xs text-neutral-500 mt-1">Canada Return | Graduate | Entrepreneur</p>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-light">
              KAITH PROPERTIES is the premier international brokerage specializing in ultra-prime sky mansions, beachfront private estates, golf sanctuaries, and landmark commercial developments.
            </p>
            <div className="flex items-center gap-4 text-neutral-400">
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-playfair text-lg text-white font-semibold mb-6 tracking-wide text-gold-300">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link href="/properties" className="hover:text-gold-400 transition-colors">Ultra Luxury Properties</Link></li>
              <li><Link href="/projects" className="hover:text-gold-400 transition-colors">Master Developments</Link></li>
              <li><Link href="/agents" className="hover:text-gold-400 transition-colors">Private Advisory Team</Link></li>
              <li><Link href="/blog" className="hover:text-gold-400 transition-colors">Market Insights & Editorial</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">Company Legacy</Link></li>
              <li><Link href="/careers" className="hover:text-gold-400 transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Col 3: Global Offices */}
          <div>
            <h4 className="font-playfair text-lg text-white font-semibold mb-6 tracking-wide text-gold-300">
              Global Concierge
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>Worli Sea Face, South Mumbai, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 (022) 8800 9900</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>vip@kaithproperties.com</span>
              </li>
              <li className="pt-2 text-xs text-neutral-500 uppercase tracking-widest font-mono">
                Offices: Mumbai • Dubai • London • New York
              </li>
            </ul>
          </div>

          {/* Col 4: VIP Newsletter */}
          <div>
            <h4 className="font-playfair text-lg text-white font-semibold mb-6 tracking-wide text-gold-300">
              Private Journal
            </h4>
            <p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed">
              Subscribe to receive off-market listings, private preview invitations, and market intelligence reports.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your VIP email..."
                  required
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-gold text-dark-400 rounded-md hover:scale-105 transition-transform"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-gold-400 flex items-center gap-1.5 animate-fade-in">
                  <ShieldCheck className="w-4 h-4" /> You are now subscribed to private dispatch.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <div>
            <p>© {new Date().getFullYear()} MANDEEP KAITH — KAITH PROPERTIES. All Rights Reserved.</p>
            <p className="text-neutral-600 text-[10px] mt-0.5">Canada Return | Graduate | Real Estate Professional</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
