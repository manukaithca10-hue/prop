"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Heart, 
  Layers, 
  Menu, 
  X, 
  Sparkles, 
  Phone, 
  User, 
  ShieldCheck,
  Globe
} from "lucide-react";

interface NavbarProps {
  wishlistCount?: number;
  compareCount?: number;
  currency?: string;
  onCurrencyChange?: (c: string) => void;
  onOpenAIConcierge?: () => void;
}

export default function Navbar({
  wishlistCount = 0,
  compareCount = 0,
  currency = "INR",
  onCurrencyChange,
  onOpenAIConcierge
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Projects", href: "/projects" },
    { name: "Agents", href: "/agents" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-400/90 backdrop-blur-xl border-b border-gold-400/20 py-4 shadow-luxury"
          : "bg-gradient-to-b from-dark-400/80 via-dark-400/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center bg-gold-400/10 group-hover:border-gold-400 group-hover:bg-gold-400/20 transition-all duration-300 shadow-gold-glow">
            <span className="font-playfair font-bold text-xl text-gold-400">K</span>
          </div>
          <div>
            <span className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold-400 transition-colors">
              KAITH <span className="text-gold-400 font-light">PROPERTIES</span>
            </span>
            <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-mono">
              Ultra Luxury Real Estate
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-all duration-300 font-medium relative py-1 ${
                  isActive ? "text-gold-400 font-semibold" : "text-neutral-300 hover:text-gold-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-gold shadow-gold-glow" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Currency Selector */}
          <div className="flex items-center gap-1 bg-dark-100/80 border border-gold-400/20 rounded-full px-3 py-1 text-xs text-neutral-300">
            <Globe className="w-3.5 h-3.5 text-gold-400" />
            <select
              value={currency}
              onChange={(e) => onCurrencyChange?.(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer"
            >
              <option value="INR" className="bg-dark-200">INR (₹)</option>
              <option value="USD" className="bg-dark-200">USD ($)</option>
              <option value="EUR" className="bg-dark-200">EUR (€)</option>
              <option value="AED" className="bg-dark-200">AED</option>
            </select>
          </div>

          {/* AI Concierge Trigger */}
          <button
            onClick={onOpenAIConcierge}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 hover:bg-gold-400/20 hover:border-gold-400 text-xs tracking-wider uppercase transition-all duration-300"
            title="AI Property Advisor"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold-300" />
            <span>AI Concierge</span>
          </button>

          {/* Wishlist Link */}
          <Link
            href="/dashboard?tab=wishlist"
            className="relative p-2 text-neutral-300 hover:text-gold-400 transition-colors"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 text-dark-400 text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Admin Link */}
          <Link
            href="/admin"
            className="p-2 text-neutral-300 hover:text-gold-400 transition-colors"
            title="Admin Portal"
          >
            <ShieldCheck className="w-5 h-5" />
          </Link>

          {/* User Profile */}
          <Link
            href="/login"
            className="p-2 text-neutral-300 hover:text-gold-400 transition-colors"
            title="Account Login"
          >
            <User className="w-5 h-5" />
          </Link>

          {/* Private Viewing CTA */}
          <Link
            href="/contact"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full bg-gradient-gold text-dark-400 hover:shadow-gold-glow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Viewing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onOpenAIConcierge}
            className="p-2 text-gold-400 rounded-full bg-gold-400/10 border border-gold-400/30"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-200 hover:text-gold-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-200/98 backdrop-blur-2xl border-b border-gold-400/30 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-widest text-neutral-200 hover:text-gold-400 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm text-neutral-300 border border-gold-400/20 rounded-lg p-3">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-400" /> Currency:
                </span>
                <select
                  value={currency}
                  onChange={(e) => onCurrencyChange?.(e.target.value)}
                  className="bg-transparent text-gold-400 focus:outline-none"
                >
                  <option value="INR" className="bg-dark-200">INR (₹)</option>
                  <option value="USD" className="bg-dark-200">USD ($)</option>
                  <option value="EUR" className="bg-dark-200">EUR (€)</option>
                  <option value="AED" className="bg-dark-200">AED</option>
                </select>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 text-center text-xs uppercase tracking-widest rounded-lg border border-gold-400/40 text-gold-400"
                >
                  User Portal
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 text-center text-xs uppercase tracking-widest rounded-lg border border-white/20 text-neutral-300"
                >
                  Admin Portal
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 text-xs font-semibold uppercase tracking-widest rounded-lg bg-gradient-gold text-dark-400 shadow-gold-glow mt-2"
              >
                Book Private Viewing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
