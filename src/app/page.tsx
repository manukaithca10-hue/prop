"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Section imports
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import BusinessSection from "@/components/sections/BusinessSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

// Shared components
import PortfolioNavbar from "@/components/shared/PortfolioNavbar";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import BackToTop from "@/components/shared/BackToTop";

// Dynamically import WhatsApp button to avoid SSR issues
const WhatsAppButton = dynamic(
  () => import("@/components/shared/WhatsAppButton"),
  { ssr: false }
);

export default function PortfolioPage() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("@studio-freight/lenis");
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          infinite: false,
        }) as typeof lenis;

        const raf = (time: number) => {
          lenis!.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis not critical - fallback to native scroll
        console.log("Using native scroll");
      }
    };

    initLenis();
    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      {/* Loading Screen — auto-dismisses after ~1.8s */}
      <LoadingScreen />

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Portfolio-specific navbar (overrides existing layout navbar) */}
      <PortfolioNavbar />

      {/* Main portfolio content */}
      <main className="overflow-x-hidden">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Qualifications */}
        <QualificationsSection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Business — KAITH PROPERTIES */}
        <BusinessSection />

        {/* 6. Achievements */}
        <AchievementsSection />

        {/* 7. Portfolio Showcase */}
        <PortfolioSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Contact */}
        <ContactSection />
      </main>

      {/* Floating utilities */}
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
