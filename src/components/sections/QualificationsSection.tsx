"use client";

import { motion } from "framer-motion";
import { QUALIFICATIONS } from "@/data/portfolioData";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function QualificationsSection() {
  return (
    <section id="qualifications" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
            Education & Expertise
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="portfolio-gradient-text">Qualifications</span>
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-neutral-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            A combination of international experience, academic excellence, and
            industry expertise that defines my professional journey.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALIFICATIONS.map((qual, i) => (
            <motion.div
              key={qual.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${qual.color} border ${qual.border} hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-default overflow-hidden`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
              </div>

              {/* Background glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl group-hover:scale-150 transition-transform duration-700" />

              {/* Emoji */}
              <div className="text-5xl mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {qual.emoji}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-poppins text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {qual.title}
                </h3>
                <p className="font-inter text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {qual.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-full h-full border-r-2 border-b-2 border-[#D4AF37] rounded-br-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5">
            <span className="text-2xl">🌟</span>
            <span className="font-inter text-sm text-neutral-300">
              Committed to continuous growth and excellence in every endeavor
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
