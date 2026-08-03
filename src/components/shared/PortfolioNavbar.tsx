"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Skills", href: "#skills" },
  { label: "Business", href: "#business" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
          scrolled
            ? "bg-[#0F172A]/90 backdrop-blur-xl border-b border-[#D4AF37]/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8931F] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <span className="font-poppins font-black text-sm text-[#0F172A]">MK</span>
              </div>
              <div>
                <span className="font-poppins text-base font-bold text-white hidden sm:block group-hover:text-[#D4AF37] transition-colors">
                  MANDEEP <span className="portfolio-gradient-text">KAITH</span>
                </span>
                <p className="font-inter text-[8px] uppercase tracking-[0.3em] text-neutral-500 hidden sm:block">
                  KAITH PROPERTIES
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 font-inter text-xs uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] font-inter text-xs hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0F172A] font-poppins font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-200 hover:text-[#D4AF37] transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[199] bg-[#0F172A]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 px-6 py-8"
          >
            <nav className="flex flex-col gap-2 mb-6">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`py-3 font-inter text-sm uppercase tracking-widest text-left border-b border-white/5 transition-colors ${
                      isActive ? "text-[#D4AF37]" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                download
                className="flex-1 text-center py-3 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] font-inter text-xs"
              >
                Download CV
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0F172A] font-poppins font-bold text-xs uppercase tracking-wider"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
