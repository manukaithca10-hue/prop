"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import Link from "next/link";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: Math.random() > 0.5 ? 2 : 3,
}));

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* ── Animated gradient orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/3 rounded-full blur-[80px]" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: 0,
              animation: `floatParticle ${p.duration} ${p.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Grid lines overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium uppercase tracking-[0.2em] font-inter"
            >
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              Canada Return • Real Estate Professional
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight"
              >
                Hi, I&apos;m
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight portfolio-gradient-text"
              >
                MANDEEP
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-poppins text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight"
              >
                KAITH
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-inter text-base sm:text-lg text-neutral-400 max-w-lg leading-relaxed"
            >
              Canada Return | Graduate | Founder of{" "}
              <span className="text-[#D4AF37] font-medium">KAITH PROPERTIES</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="font-inter text-sm sm:text-base text-neutral-500 max-w-lg leading-relaxed"
            >
              I help people find premium residential and commercial properties while
              building lasting relationships through trust, transparency, and professionalism.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#B8931F] text-[#0F172A] font-poppins font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] overflow-hidden"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] font-poppins font-semibold text-sm uppercase tracking-widest hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-full border border-white/10 text-neutral-300 font-inter font-medium text-sm hover:border-white/30 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 animate-spin-slow" />
            <div className="absolute inset-[-16px] rounded-full border border-[#D4AF37]/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />

            {/* Glow */}
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-3xl" />

            {/* Portrait container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.25)]">
              {/* Placeholder portrait with initials */}
              <div className="w-full h-full bg-gradient-to-br from-[#1E2A4A] via-[#0F172A] to-[#1a1a2e] flex items-center justify-center">
                <div className="text-center">
                  <div className="font-poppins text-7xl sm:text-8xl lg:text-9xl font-black portfolio-gradient-text leading-none">
                    MK
                  </div>
                  <div className="font-inter text-xs text-[#D4AF37]/60 tracking-[0.3em] uppercase mt-2">
                    KAITH PROPERTIES
                  </div>
                </div>
              </div>
              {/* Overlay shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent" />
            </div>

            {/* Floating info cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-12 glass-panel px-4 py-3 rounded-xl border border-[#D4AF37]/20 shadow-luxury"
            >
              <p className="font-poppins text-xs font-bold text-[#D4AF37]">🇨🇦 Canada Return</p>
              <p className="font-inter text-[10px] text-neutral-400">International Expert</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-16 glass-panel px-4 py-3 rounded-xl border border-[#D4AF37]/20 shadow-luxury"
            >
              <p className="font-poppins text-xs font-bold text-[#D4AF37]">100+ Clients</p>
              <p className="font-inter text-[10px] text-neutral-400">Satisfied & Happy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 hover:text-[#D4AF37] transition-colors"
      >
        <span className="font-inter text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
