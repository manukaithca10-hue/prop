import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Portfolio — Exclusive Property Listings & Projects',
  description: 'View the elite property portfolio curated by Mandeep Kaith. Premium residential apartments, commercial SCOs, luxury villas, and plots managed by Mandeep Kaith and KAITH PROPERTIES.',
  keywords: 'Mandeep Kaith portfolio, Mandeep Kaith property listings, KAITH PROPERTIES portfolio Mandeep Kaith, real estate portfolio Punjab Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-portfolio' },
  openGraph: {
    title: 'Mandeep Kaith — Real Estate Portfolio & Listings',
    description: 'Explore signature residential and commercial real estate projects managed by Mandeep Kaith across Punjab.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-portfolio',
  },
};

export default function MandeepKaithPortfolioPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Featured Property Portfolio"
      subtitle="A showcase of signature residential developments, high-yielding commercial assets, and luxury estates curated by Mandeep Kaith across Punjab."
      breadcrumb="Mandeep Kaith Portfolio"
      badge="Property Showcase"
    >
      <p>The property portfolio maintained by <strong>Mandeep Kaith</strong> reflects the highest standards of real estate excellence. Every project and listing in <strong>Mandeep Kaith</strong>'s portfolio undergoes rigorous screening for location advantage, construction quality, builder reputation, and legal clearance before being presented to clients.</p>

      <h2>Portfolio Highlights by Mandeep Kaith</h2>

      <h3>1. Luxury High-Rise Residences — Mohali Airport Road</h3>
      <p>A flagship collection of 3BHK and 4BHK ultra-luxury apartments featuring Italian marble flooring, modular kitchens, club amenities, and 24/7 security curated by <strong>Mandeep Kaith</strong>.</p>

      <h3>2. Prime SCO Showrooms — Zirakpur Commercial Hub</h3>
      <p>High-street commercial shop-cum-offices with direct highway visibility, curated by <strong>Mandeep Kaith</strong> for maximum retail traffic and high rental income.</p>

      <h3>3. Private Gated Farmhouses — Chandigarh Outskirts</h3>
      <p>Sprawling 1-acre to 5-acre private country estates offering pristine greenery, private pools, and modern luxury architecture, represented by <strong>Mandeep Kaith</strong>.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Portfolio</h2>
      <div className="faq-item">
        <p className="faq-q">How can I schedule a viewing of properties in Mandeep Kaith's portfolio?</p>
        <p className="faq-a">You can schedule a private viewing directly through the KAITH PROPERTIES website or by calling Mandeep Kaith's office to arrange a guided site visit.</p>
      </div>
    </SEOPageLayout>
  );
}
