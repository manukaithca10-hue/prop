"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import { Property } from "@/types";

interface ScheduleViewingModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleViewingModal({
  property,
  isOpen,
  onClose
}: ScheduleViewingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM",
    viewingType: "IN_PERSON",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl glass-panel border border-gold-400/40 rounded-2xl p-6 sm:p-8 relative shadow-luxury">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white">Viewing Confirmed</h3>
            <p className="text-sm text-neutral-300 font-light max-w-md mx-auto">
              Thank you, <strong className="text-gold-400">{formData.name}</strong>. Senior Partner{" "}
              <strong className="text-gold-400">{property.agent.name}</strong> will contact your concierge team shortly to coordinate security clearance and transportation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">Private Tour</span>
              <h3 className="font-playfair text-2xl font-bold text-white">Schedule Estate Viewing</h3>
              <p className="text-xs text-neutral-400 font-light">{property.title}</p>
            </div>

            {/* Viewing Type Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, viewingType: "IN_PERSON" })}
                className={`py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
                  formData.viewingType === "IN_PERSON"
                    ? "bg-gold-400 text-dark-400 border-gold-400 shadow-gold-glow"
                    : "bg-dark-100 text-neutral-300 border-white/10"
                }`}
              >
                In-Person Private Tour
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, viewingType: "VIRTUAL_360" })}
                className={`py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
                  formData.viewingType === "VIRTUAL_360"
                    ? "bg-gold-400 text-dark-400 border-gold-400 shadow-gold-glow"
                    : "bg-dark-100 text-neutral-300 border-white/10"
                }`}
              >
                Live Virtual 360° Tour
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-mono text-neutral-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="His / Her Excellency..."
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-neutral-400 mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98000 00000"
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-neutral-400 mb-1">VIP Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-neutral-400 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-mono text-neutral-400 mb-1">Concierge Instructions / Security Clearance</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Helipad access required, chauffeur vehicle details..."
                className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-gold text-dark-400 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform shadow-gold-glow"
            >
              Confirm Viewing Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
