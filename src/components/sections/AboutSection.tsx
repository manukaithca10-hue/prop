"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useInView as useIntersectionObserver } from "react-intersection-observer";
import { OWNER, STATS, TIMELINE } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function StatCard({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, inView } = useIntersectionObserver({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center p-6 glass-panel rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="font-poppins text-4xl sm:text-5xl font-black portfolio-gradient-text mb-1">
        {inView ? (
          <CountUp end={value} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        {suffix}
      </div>
      <p className="font-inter text-sm text-neutral-400 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
            Get to know me
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="portfolio-gradient-text">Mandeep Kaith</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Portrait area */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main card */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/20 relative">
                <div className="w-full h-full bg-gradient-to-br from-[#1E2A4A] to-[#0F172A] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="font-poppins text-8xl font-black portfolio-gradient-text">MK</div>
                    <div className="font-inter text-xs text-[#D4AF37]/60 tracking-[0.3em] uppercase">
                      MANDEEP KAITH
                    </div>
                    <div className="font-inter text-[10px] text-neutral-500 tracking-widest">
                      Canada Return | Graduate
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-panel px-6 py-4 rounded-2xl border border-[#D4AF37]/30 shadow-luxury"
              >
                <p className="font-poppins text-3xl font-black portfolio-gradient-text">5+</p>
                <p className="font-inter text-xs text-neutral-400">Years of Excellence</p>
              </motion.div>

              {/* Canada flag */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -left-6 glass-panel px-4 py-3 rounded-xl border border-[#D4AF37]/20"
              >
                <p className="font-inter text-sm">🇨🇦 Canada Return</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
              Entrepreneur | Real Estate Professional | 
              <span className="portfolio-gradient-text"> Canada Return</span>
            </h3>
            <p className="font-inter text-base text-neutral-400 leading-relaxed">
              {OWNER.about}
            </p>

            {/* Key highlights */}
            <div className="space-y-3">
              {[
                { label: "Profession", value: "Real Estate Consultant & Entrepreneur" },
                { label: "Education", value: "Graduate" },
                { label: "Location", value: "Punjab, India (Canada Return)" },
                { label: "Business", value: "Founder — KAITH PROPERTIES" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="font-inter text-xs uppercase text-[#D4AF37] tracking-wider min-w-[100px] pt-0.5">
                    {item.label}
                  </span>
                  <span className="font-inter text-sm text-neutral-300">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0F172A] font-poppins font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Let&apos;s Connect
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-inter text-sm hover:bg-[#D4AF37]/10 transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <h3 className="font-poppins text-2xl font-bold text-white text-center mb-12">
            My <span className="portfolio-gradient-text">Journey</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Content card */}
                <div className="md:w-5/12">
                  <div className="glass-panel p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-poppins text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="font-inter text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="md:w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)] ring-4 ring-[#D4AF37]/20 relative z-10" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
