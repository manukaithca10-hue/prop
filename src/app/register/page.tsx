"use client";

import { useState } from "react";
import Link from "next/link";
import { UserPlus, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert("VIP Client Account Created!");
    window.location.href = "/dashboard";
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="glass-panel p-8 rounded-3xl border border-gold-400/30 shadow-luxury space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-400/40">
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="font-playfair text-3xl font-bold text-white">VIP Membership Registration</h1>
          <p className="text-xs text-neutral-400 font-light">Join KAITH PROPERTIES private client network</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="His / Her Excellency..."
              className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Phone / WhatsApp</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98000 00000"
              className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono text-gold-400 mb-1">Security Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-dark-100 border border-gold-400/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-gold text-dark-400 font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform shadow-gold-glow flex items-center justify-center gap-2"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-neutral-400 pt-2 border-t border-white/10">
          <span>Already registered? </span>
          <Link href="/login" className="text-gold-400 hover:underline font-semibold">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}
