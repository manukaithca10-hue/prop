"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";

const CATEGORIES = ["All", "Residential", "Commercial", "Rental", "Luxury Homes"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#0a0f1e] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
            Property Gallery
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Portfolio <span className="portfolio-gradient-text">Showcase</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0F172A] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "border border-[#D4AF37]/30 text-neutral-400 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/90 text-[#0F172A] font-inter text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <h3 className="font-poppins text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="font-inter text-[#D4AF37] font-semibold text-sm">{item.price}</p>

                  {/* CTA - appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    className="mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="font-inter text-xs text-[#D4AF37] border border-[#D4AF37]/50 px-4 py-1.5 rounded-full hover:bg-[#D4AF37]/10 transition-colors"
                    >
                      Enquire Now →
                    </button>
                  </motion.div>
                </div>

                {/* Corner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 40px rgba(212,175,55,0.1)" }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-poppins font-medium text-sm hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
          >
            View All Properties
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
