import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://prop-pink.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KAITH PROPERTIES | Ultra Luxury Real Estate Platform",
  description: "KAITH PROPERTIES - Premium real estate services with transparency, integrity, and customer satisfaction.",
  verification: {
    google: '1QA0EysSSgjtmieAuQZ_oAnUFdcwpADDiSxFKnXhrsU',
  },
  openGraph: {
    title: "KAITH PROPERTIES",
    description: "Canada Return entrepreneur and real estate professional. Helping clients find premium properties with trust and transparency.",
    siteName: "KAITH PROPERTIES",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandeep Kaith | KAITH PROPERTIES",
  },
  keywords: "Mandeep Kaith, KAITH PROPERTIES, real estate, Canada return, Punjab real estate, property consultant, investment advisor",
  alternates: {
    canonical: siteUrl,
  },
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
