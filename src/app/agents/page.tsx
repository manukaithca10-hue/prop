"use client";

import Image from "next/image";
import Link from "next/link";
import { MOCK_AGENTS } from "@/data/mockAgents";
import { Phone, Mail, MessageCircle, Star, Award, ShieldCheck, Sparkles } from "lucide-react";

export default function AgentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Private Wealth Advisory
        </span>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
          Senior Private Real Estate Partners
        </h1>
        <p className="text-sm text-neutral-400 font-light">
          Trusted advisors with proven track records servicing royal families, tech founders, and global institutional investors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_AGENTS.map((agent) => (
          <div
            key={agent.id}
            className="glass-card rounded-2xl p-6 border border-gold-400/20 shadow-luxury space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold-glow mx-auto">
                <Image src={agent.avatar} alt={agent.name} fill className="object-cover" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-playfair text-2xl font-bold text-white">{agent.name}</h3>
                <p className="text-xs text-gold-400 font-mono">{agent.title}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-amber-400 pt-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold">{agent.rating} Rating</span>
                  <span className="text-neutral-500">• {agent.experienceYrs} Yrs Exp</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 font-light leading-relaxed text-center">
                {agent.bio}
              </p>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase font-mono">Specialties:</span>
                  <p className="text-neutral-300 font-medium">{agent.specialties.join(" • ")}</p>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase font-mono">Languages Spoken:</span>
                  <p className="text-neutral-300 font-medium">{agent.languages.join(", ")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href={`tel:${agent.phone}`}
                className="w-full py-2.5 rounded-xl bg-dark-100 border border-gold-400/30 text-white hover:border-gold-400 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{agent.phone}</span>
              </a>

              <a
                href={`https://wa.me/${agent.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
