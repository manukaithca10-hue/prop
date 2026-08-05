import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "KAITH PROPERTIES | Ultra Luxury Real Estate Platform",
  description: "KAITH PROPERTIES - Premium real estate services with transparency, integrity, and customer satisfaction.",
  verification: {
    google: 'mv87UIU2jja1llLrXFzQhjTo9rActP8Hl8f7H9ElGoU',
  },
  openGraph: {
    title: "KAITH PROPERTIES",
    description: "Canada Return entrepreneur and real estate professional. Helping clients find premium properties with trust and transparency.",
    siteName: "KAITH PROPERTIES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandeep Kaith | KAITH PROPERTIES",
  },
  keywords: "Mandeep Kaith, KAITH PROPERTIES, real estate, Canada return, Punjab real estate, property consultant, investment advisor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-gold-400 selection:text-dark-400">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
