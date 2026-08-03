"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/portfolioData";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function BusinessSection() {
  return (
    <section id="business" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
            Our Business
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="portfolio-gradient-text">KAITH PROPERTIES</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Business description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-inter text-base text-neutral-400 leading-relaxed">
            KAITH PROPERTIES is committed to delivering premium real estate services with
            transparency, integrity, and customer satisfaction. Whether buying, selling,
            renting, or investing, we provide expert guidance and personalized solutions.
          </p>
        </motion.div>

        {/* Mission / Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              text: "To provide honest, transparent, and exceptional real estate services that create lasting value for every client.",
            },
            {
              icon: "🌟",
              title: "Our Vision",
              text: "To become the most trusted real estate brand in the region, known for integrity, expertise, and customer-first approach.",
            },
            {
              icon: "💎",
              title: "Our Values",
              text: "Trust, Transparency, Professionalism, Excellence — these are the cornerstones of everything we do at KAITH PROPERTIES.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-panel p-8 rounded-2xl border border-[#D4AF37]/20 text-center hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-poppins text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="font-inter text-sm text-neutral-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Heading */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-poppins text-2xl font-bold text-white text-center mb-10"
        >
          Our <span className="portfolio-gradient-text">Services</span>
        </motion.h3>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-7 rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0F172A] border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all duration-400 cursor-default relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-2xl" />

              {/* Icon */}
              <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h4 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {service.title}
              </h4>
              <p className="font-inter text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#B8931F] text-[#0F172A] font-poppins font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Get Free Consultation</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
