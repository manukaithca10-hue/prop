"use client";

import { useState } from "react";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/Footer";
import AIConciergeModal from "@/components/shared/AIConciergeModal";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPortfolioHome = pathname === "/";

  const [currency, setCurrency] = useState("INR");
  const [wishlist, setWishlist] = useState<string[]>(["prop-1"]);
  const [compare, setCompare] = useState<string[]>([]);
  const [aiConciergeOpen, setAiConciergeOpen] = useState(false);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id: string) => {
    setCompare((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : prev.length < 4
        ? [...prev, id]
        : prev
    );
  };

  return (
    <>
      <CustomCursor />

      {/* Only show the existing Navbar on sub-pages — portfolio home has its own */}
      {!isPortfolioHome && (
        <Navbar
          wishlistCount={wishlist.length}
          compareCount={compare.length}
          currency={currency}
          onCurrencyChange={setCurrency}
          onOpenAIConcierge={() => setAiConciergeOpen(true)}
        />
      )}

      <main className={isPortfolioHome ? "" : "min-h-screen pt-24"}>
        {children}
      </main>

      {/* Footer shown on all pages */}
      <Footer />

      <AIConciergeModal
        isOpen={aiConciergeOpen}
        onClose={() => setAiConciergeOpen(false)}
      />
    </>
  );
}
