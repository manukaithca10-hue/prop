"use client";

import { useState } from "react";
import { Briefcase, CheckCircle2, Upload, Send } from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      title: "Senior Vice President - Ultra-Prime Residential Sales",
      location: "Mumbai / Dubai",
      type: "Full-Time",
      desc: "Lead acquisitions for high-net-worth clients across sky mansions and luxury penthouses."
    },
    {
      title: "Luxury Real Estate Marketing Director",
      location: "London / Remote",
      type: "Full-Time",
      desc: "Execute high-impact editorial campaigns and private invitation events for marquee developments."
    },
    {
      title: "Private Wealth & Family Office Relationship Lead",
      location: "New York Fifth Ave",
      type: "Full-Time",
      desc: "Manage relationships with institutional investors and single family office principals."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-mono text-gold-400 tracking-widest">
          Join Our Legacy
        </span>
        <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
          Careers at Kaith Properties
        </h1>
        <p className="text-sm text-neutral-400 font-light">
          We welcome exceptional talent dedicated to architectural excellence and ultra-luxury real estate advisory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div key={job.title} className="glass-card p-6 rounded-2xl border border-gold-400/20 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-gold-400">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-white">{job.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{job.desc}</p>
            </div>
            <button
              onClick={() => setSelectedJob(job.title)}
              className="w-full py-2.5 bg-gradient-gold text-dark-400 font-bold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-transform shadow-gold-glow"
            >
              Apply Online
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="glass-panel p-8 rounded-2xl border border-gold-400/40 max-w-xl mx-auto space-y-4">
          <h3 className="font-playfair text-2xl font-bold text-white">Application: {selectedJob}</h3>
          <input type="text" placeholder="Full Name" className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-xs text-white" />
          <input type="email" placeholder="Email Address" className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-xs text-white" />
          <input type="file" className="w-full bg-dark-100 border border-gold-400/20 rounded-xl p-3 text-xs text-neutral-400" />
          <div className="flex gap-2">
            <button onClick={() => alert("Application Submitted Successfully!")} className="flex-1 py-3 bg-gradient-gold text-dark-400 font-bold text-xs uppercase rounded-xl">
              Submit Application
            </button>
            <button onClick={() => setSelectedJob(null)} className="px-4 py-3 border border-white/20 text-white text-xs uppercase rounded-xl">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
