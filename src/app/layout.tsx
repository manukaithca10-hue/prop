"use client";

import { useState } from "react";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import LiveNotificationToast from "@/components/shared/LiveNotificationToast";
import AIConciergeModal from "@/components/shared/AIConciergeModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <title>KAITH PROPERTIES | Ultra Luxury Real Estate Platform</title>
        <meta
          name="description"
          content="KAITH PROPERTIES - The world's most prestigious luxury real estate brokerage. Exclusive sky mansions, beachfront private estates, and architectural masterpieces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-gold-400 selection:text-dark-400">
        <CustomCursor />
        <Navbar
          wishlistCount={wishlist.length}
          compareCount={compare.length}
          currency={currency}
          onCurrencyChange={setCurrency}
          onOpenAIConcierge={() => setAiConciergeOpen(true)}
        />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LiveNotificationToast />
        <AIConciergeModal
          isOpen={aiConciergeOpen}
          onClose={() => setAiConciergeOpen(false)}
        />
      </body>
    </html>
  );
}
