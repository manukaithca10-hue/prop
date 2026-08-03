"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const steps = [10, 25, 45, 65, 80, 95, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 400);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            {/* Animated ring */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="44"
                  fill="none"
                  stroke="rgba(212,175,55,0.1)"
                  strokeWidth="4"
                />
                <circle
                  cx="50" cy="50" r="44"
                  fill="none"
                  stroke="url(#loadGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
                  style={{ transition: "stroke-dashoffset 0.3s ease" }}
                />
                <defs>
                  <linearGradient id="loadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#F5E6A3" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-poppins text-2xl font-black portfolio-gradient-text">MK</span>
              </div>
            </div>

            <h1 className="font-poppins text-3xl font-black text-white tracking-wider">
              MANDEEP <span className="portfolio-gradient-text">KAITH</span>
            </h1>
            <p className="font-inter text-xs text-neutral-500 tracking-[0.3em] uppercase mt-2">
              KAITH PROPERTIES
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] rounded-full"
              style={{ width: `${progress}%`, transition: "width 0.3s ease" }}
            />
          </div>
          <p className="font-inter text-xs text-neutral-600 mt-3 tracking-widest">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
