"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold-400 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
      />
      {/* Outer subtle gold ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gold-400/50 rounded-full pointer-events-none z-[9998] shadow-gold-glow"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? "rgba(200, 169, 106, 0.9)" : "rgba(200, 169, 106, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
