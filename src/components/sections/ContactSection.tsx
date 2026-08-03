"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter, Send, CheckCircle } from "lucide-react";
import { OWNER } from "@/data/portfolioData";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0a0f1e] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

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
            Get In Touch
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="portfolio-gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-neutral-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Ready to find your dream property or discuss investment opportunities? 
            Reach out and let&apos;s create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-poppins text-2xl font-bold text-white mb-2">
                Let&apos;s Talk
              </h3>
              <p className="font-inter text-sm text-neutral-400 leading-relaxed">
                Available Monday–Saturday, 9 AM – 7 PM IST. 
                We respond within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  value: OWNER.phone,
                  href: `tel:${OWNER.whatsapp}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: OWNER.email,
                  href: `mailto:${OWNER.email}`,
                },
                {
                  icon: MapPin,
                  label: "Office Address",
                  value: OWNER.address,
                  href: "#",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-300">
                    <contact.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-inter text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">
                      {contact.label}
                    </p>
                    <p className="font-inter text-sm text-neutral-200 group-hover:text-[#D4AF37] transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-neutral-500 mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: OWNER.instagram, label: "Instagram" },
                  { icon: Linkedin, href: OWNER.linkedin, label: "LinkedIn" },
                  { icon: Facebook, href: OWNER.facebook, label: "Facebook" },
                  { icon: Twitter, href: OWNER.twitter, label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 h-48 bg-gradient-to-br from-[#1a1f2e] to-[#0F172A] flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="font-inter text-xs text-neutral-400">KAITH PROPERTIES</p>
                <p className="font-inter text-xs text-neutral-500">Punjab, India</p>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="contact-glass p-8 sm:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-[#D4AF37]" />
                  <h3 className="font-poppins text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="font-inter text-neutral-400 text-sm max-w-sm">
                    Thank you for reaching out. Mandeep will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-inter text-sm hover:bg-[#D4AF37]/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-inter text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your property requirements, investment goals, or any questions..."
                      className="contact-input resize-none"
                    />
                  </div>

                  {error && (
                    <p className="font-inter text-sm text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#B8931F] text-[#0F172A] font-poppins font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin w-4 h-4 border-2 border-[#0F172A] border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="font-inter text-xs text-neutral-500 text-center">
                    Your information is kept private and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
