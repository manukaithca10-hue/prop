import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Mandeep Kaith | Canada Return | Founder of KAITH PROPERTIES",
  description: "Mandeep Kaith — Canada Return entrepreneur, Graduate, and Founder of KAITH PROPERTIES. Premium real estate consultant specializing in residential, commercial, and investment properties.",
  openGraph: {
    title: "Mandeep Kaith | Founder of KAITH PROPERTIES",
  }
};

export default function PortfolioPage() {
  return <ClientPage />;
}
