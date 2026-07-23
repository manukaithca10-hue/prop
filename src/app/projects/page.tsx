"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/data/mockProjects";
import { Building2, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function ProjectsPage() {
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const filteredProjects = MOCK_PROJECTS.filter((proj) => {
    if (filterStatus === "ALL") return true;
    return proj.status === filterStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs uppercase font-mono text-gold-400 tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Iconic Developments
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white mt-1">
            Master Architectural Projects
          </h1>
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-2 bg-dark-100 p-1 rounded-xl border border-gold-400/20">
          {[
            { label: "All Projects", value: "ALL" },
            { label: "Under Construction", value: "UNDER_CONSTRUCTION" },
            { label: "Upcoming", value: "UPCOMING" },
            { label: "Completed", value: "COMPLETED" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilterStatus(tab.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                filterStatus === tab.value
                  ? "bg-gold-400 text-dark-400 shadow-gold-glow"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative h-72 overflow-hidden bg-dark-300">
              <Image
                src={proj.coverImage}
                alt={proj.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-gold-400 text-dark-400 font-bold">
                {proj.status.replace("_", " ")}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-[10px] uppercase font-mono text-neutral-400">{proj.location}</p>
                <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs text-gold-400 font-mono mt-1">{proj.tagline}</p>
                <p className="text-xs text-neutral-400 font-light mt-2 line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-mono">Starting From</p>
                  <p className="font-playfair text-xl font-bold text-white">
                    {formatPrice(proj.startingPrice)}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-full bg-gradient-gold text-dark-400 text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                >
                  Inquire VIP Access
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
