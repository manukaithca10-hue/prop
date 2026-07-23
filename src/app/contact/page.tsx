"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Private Listing Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "Private Listing Inquiry", message: "" });
    }, 4000);
  };

  const faqs = [
    {
      q: "How do I access off-market unlisted sky mansions?",
      a: "Due to privacy agreements with royal families and ultra-high-net-worth owners, off-market properties require a signed Confidentiality Non-Disclosure Agreement (NDA) and financial verification prior to private viewing."
    },
    {
      q: "Can KAITH PROPERTIES assist with international cross-border transactions?",
      a: "Yes. Our global private wealth desk facilitates cross-border acquisitions, tax structuring, currency conversions, and legal advisory across the UK, UAE, USA, and India."
    },
    {
      q: "What are the fees for private architectural sales advisory?",
      a: "Our private advisory fee structure is tailored based on transaction scale and customized white-glove concierge requirements."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-mono text-gold-400 tracking-widest">
          Global Private Concierge
        </span>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
          Connect With Our Senior Advisory Desk
        </h1>
        <p className="text-sm text-neutral-400 font-light">
          Whether inquiring about off-market sky penthouses or private coastal estates, our concierge team is available 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* VIP Form */}
        <div className="glass-panel p-8 rounded-2xl border border-gold-400/30 shadow-luxury space-y-6">
          <h3 className="font-playfair text-2xl font-bold text-white">Private Inquiry Dispatch</h3>

          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <ShieldCheck className="w-12 h-12 text-gold-400 mx-auto" />
              <h4 className="font-playfair text-xl font-bold text-white">Inquiry Received</h4>
              <p className="text-xs text-neutral-300">A Senior Managing Director will initiate contact within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="His / Her Excellency..."
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">VIP Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Direct Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98000 00000"
                    className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Inquiry Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
                >
                  <option className="bg-dark-200">Private Listing Inquiry</option>
                  <option className="bg-dark-200">Off-Market Portfolio Access</option>
                  <option className="bg-dark-200">Sell Flagship Estate</option>
                  <option className="bg-dark-200">Commercial & Land Acquisition</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Message Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify location preferences, budget parameters, and confidentiality requirements..."
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-gold text-dark-400 font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Encrypted Dispatch</span>
              </button>
            </form>
          )}
        </div>

        {/* Global Branches & Map */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Global Headquarters & Desks</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-dark-100 border border-white/10 space-y-1">
                <h4 className="font-bold text-gold-400">South Mumbai (HQ)</h4>
                <p className="text-neutral-300">Worli Sea Face Tower, Level 45</p>
                <p className="text-neutral-400">+91 (022) 8800 9900</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-100 border border-white/10 space-y-1">
                <h4 className="font-bold text-gold-400">Dubai DIFC</h4>
                <p className="text-neutral-300">Gate Precinct 4, Level 12</p>
                <p className="text-neutral-400">+971 4 330 0099</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-100 border border-white/10 space-y-1">
                <h4 className="font-bold text-gold-400">London Mayfair</h4>
                <p className="text-neutral-300">14 Berkeley Square, W1J</p>
                <p className="text-neutral-400">+44 20 7946 0912</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-100 border border-white/10 space-y-1">
                <h4 className="font-bold text-gold-400">New York Fifth Ave</h4>
                <p className="text-neutral-300">767 Fifth Avenue, NY 10153</p>
                <p className="text-neutral-400">+1 212 555 0198</p>
              </div>
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="glass-panel p-8 rounded-2xl border border-gold-400/20 space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-semibold text-xs text-white flex items-center justify-between hover:text-gold-400"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? "rotate-180 text-gold-400" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 pt-0 text-xs text-neutral-400 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
