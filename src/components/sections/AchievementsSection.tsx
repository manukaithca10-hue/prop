"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { ACHIEVEMENTS } from "@/data/portfolioData";

function AchievementCard({
  value,
  suffix,
  label,
  icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group p-8 rounded-3xl text-center overflow-hidden cursor-default"
      style={{
        background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(15,23,42,0.9) 100%)",
        border: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      {/* Glow bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full" />

      {/* Icon */}
      <div className="text-5xl mb-4 relative z-10 transition-transform duration-300 group-hover:scale-125">
        {icon}
      </div>

      {/* Counter */}
      <div className="font-poppins text-5xl sm:text-6xl font-black portfolio-gradient-text mb-2 relative z-10">
        {inView ? (
          <CountUp end={value} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        <span>{suffix}</span>
      </div>

      <p className="font-inter text-sm text-neutral-400 uppercase tracking-[0.2em] relative z-10">
        {label}
      </p>

      {/* Shimmer line */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #0F172A 50%, #0a0f1e 100%)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

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
            Track Record
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="portfolio-gradient-text">Achievements</span>
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-neutral-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Numbers that speak louder than words — a testament to trust,
            dedication, and consistent delivery of excellence.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <AchievementCard key={achievement.label} {...achievement} index={i} />
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-panel max-w-3xl mx-auto p-10 rounded-3xl border border-[#D4AF37]/20">
            <div className="text-5xl mb-6 opacity-30 font-serif text-[#D4AF37]">&ldquo;</div>
            <blockquote className="font-poppins text-xl sm:text-2xl text-white font-semibold italic leading-relaxed mb-6">
              Success in real estate is not just about closing deals — it&apos;s about 
              building trust and creating homes where dreams come true.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8931F] flex items-center justify-center text-[#0F172A] font-poppins font-black text-sm">
                MK
              </div>
              <div className="text-left">
                <p className="font-poppins text-sm font-bold portfolio-gradient-text">Mandeep Kaith</p>
                <p className="font-inter text-xs text-neutral-500">Founder, KAITH PROPERTIES</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
