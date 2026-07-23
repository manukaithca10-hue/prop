"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+919876543210";
  const defaultText = encodeURIComponent("Hello Kaith Properties Concierge, I would like to inquire about your ultra-luxury portfolio.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-dark-200/90 backdrop-blur-md border border-gold-400/40 p-3 rounded-full shadow-luxury hover:border-gold-400 hover:scale-105 transition-all duration-300"
      title="Direct VIP Concierge on WhatsApp"
    >
      <div className="w-10 h-10 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 group-hover:bg-emerald-600 group-hover:text-white transition-all">
        <MessageCircle className="w-5 h-5 fill-current" />
      </div>
      <div className="hidden sm:block pr-3 text-left">
        <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">VIP Concierge</p>
        <p className="text-xs font-semibold text-white group-hover:text-gold-400 transition-colors">WhatsApp Live</p>
      </div>
    </a>
  );
}
