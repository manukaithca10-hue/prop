"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/data/portfolioData";

function SkillCircle({ name, level, index }: { name: string; level: number; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-4 group"
    >
      {/* SVG Circle */}
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F5E6A3" />
              <stop offset="100%" stopColor="#B8931F" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(212,175,55,0.1)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={`url(#grad-${index})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={inView ? offset : circumference}
            style={{
              transition: `stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
              filter: "drop-shadow(0 0 6px rgba(212,175,55,0.5))",
            }}
          />
        </svg>

        {/* Percentage label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="font-poppins text-xl font-bold portfolio-gradient-text"
          >
            {inView ? `${level}%` : "0%"}
          </motion.span>
        </div>
      </div>

      {/* Skill name */}
      <p className="font-inter text-sm text-neutral-300 text-center group-hover:text-[#D4AF37] transition-colors duration-300 max-w-[120px]">
        {name}
      </p>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#0a0f1e] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

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
            Expertise & Proficiency
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="portfolio-gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-neutral-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Years of hands-on experience across real estate consulting, client management,
            and business development have honed these core competencies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
          {SKILLS.map((skill, i) => (
            <SkillCircle key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>

        {/* Bottom bar skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 space-y-4"
        >
          <h3 className="font-poppins text-xl font-semibold text-white text-center mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Property Valuation",
              "Market Analysis",
              "Contract Negotiation",
              "Legal Documentation",
              "NRI Investment Advisory",
              "Tenant Management",
              "Project Management",
              "Brand Building",
              "Client Retention",
              "Strategic Planning",
            ].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-neutral-300 font-inter text-xs hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
