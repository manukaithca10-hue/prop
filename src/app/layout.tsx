"use client";

import { useState } from "react";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/Footer";
import AIConciergeModal from "@/components/shared/AIConciergeModal";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
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
    <html lang="en" className="dark">
      <head>
        <title>
          {isPortfolioHome
            ? "Mandeep Kaith | Canada Return | Founder of KAITH PROPERTIES"
            : "KAITH PROPERTIES | Ultra Luxury Real Estate Platform"}
        </title>
        <meta
          name="description"
          content={
            isPortfolioHome
              ? "Mandeep Kaith — Canada Return entrepreneur, Graduate, and Founder of KAITH PROPERTIES. Premium real estate consultant specializing in residential, commercial, and investment properties."
              : "KAITH PROPERTIES - Premium real estate services with transparency, integrity, and customer satisfaction."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="mv87UIU2jja1llLrXFzQhjTo9rActP8Hl8f7H9ElGoU" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            isPortfolioHome
              ? "Mandeep Kaith | Founder of KAITH PROPERTIES"
              : "KAITH PROPERTIES"
          }
        />
        <meta
          property="og:description"
          content="Canada Return entrepreneur and real estate professional. Helping clients find premium properties with trust and transparency."
        />
        <meta property="og:site_name" content="KAITH PROPERTIES" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mandeep Kaith | KAITH PROPERTIES" />
        {/* Keywords */}
        <meta
          name="keywords"
          content="Mandeep Kaith, KAITH PROPERTIES, real estate, Canada return, Punjab real estate, property consultant, investment advisor"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-gold-400 selection:text-dark-400">
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
      </body>
    </html>
  );
}
