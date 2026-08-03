"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
            Client Reviews
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Clients <span className="portfolio-gradient-text">Say</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="relative"
        >
          <div className="testimonial-card relative overflow-hidden">
            {/* Background quote mark */}
            <div className="absolute top-4 left-6 font-serif text-[120px] leading-none text-[#D4AF37]/5 pointer-events-none select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-inter text-lg sm:text-xl text-neutral-200 leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/40">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-white">{testimonial.name}</h4>
                    <p className="font-inter text-sm text-[#D4AF37]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-[#D4AF37]"
                      : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0F172A] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* All testimonials mini row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                i === current
                  ? "border-[#D4AF37]/50 bg-[#D4AF37]/10"
                  : "border-white/10 hover:border-[#D4AF37]/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/30">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <span className="font-inter text-xs text-neutral-300 truncate">{t.name}</span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
