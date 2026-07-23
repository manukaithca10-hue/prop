"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

const NOTIFICATIONS = [
  { name: "Mr. R. Ambani", action: "booked a private viewing for", property: "The Imperial Sky Mansion" },
  { name: "Investor from Dubai", action: "inquired about", property: "Kaith Riviera Beachfront Mansions" },
  { name: "Tech Founder from Silicon Valley", action: "saved to wishlist", property: "The Royal Golf Sanctuary Villa" },
  { name: "Diplomatic Delegation", action: "requested private tour of", property: "The Sovereign Penthouse" },
];

export default function LiveNotificationToast() {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  useEffect(() => {
    // Show first toast after 4s
    const timer1 = setTimeout(() => {
      setCurrentIdx(0);
    }, 4000);

    // Hide after 6s
    const hideTimer = setInterval(() => {
      setCurrentIdx((prev) => {
        if (prev === null) return 0;
        if (prev + 1 < NOTIFICATIONS.length) return prev + 1;
        return 0;
      });
    }, 12000);

    return () => {
      clearTimeout(timer1);
      clearInterval(hideTimer);
    };
  }, []);

  if (currentIdx === null) return null;

  const notif = NOTIFICATIONS[currentIdx];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 left-6 z-40 max-w-sm glass-panel p-4 rounded-xl border border-gold-400/30 shadow-luxury flex items-start gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 border border-gold-400/40">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs">
          <p className="text-white font-medium flex items-center justify-between">
            <span>{notif.name}</span>
            <span className="text-[10px] text-neutral-400 font-mono">Just Now</span>
          </p>
          <p className="text-neutral-400 font-light mt-0.5">
            {notif.action} <span className="text-gold-300 font-medium">{notif.property}</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
