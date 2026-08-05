import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Luxury Properties — Ultra-Luxury Mansions & Penthouses',
  description: 'Experience ultra-luxury real estate in Punjab with Mandeep Kaith. Discover bespoke luxury mansions, sky penthouses, golf course villas, and private estates curated by Mandeep Kaith.',
  keywords: 'Mandeep Kaith luxury properties, Mandeep Kaith luxury real estate, ultra luxury homes Punjab Mandeep Kaith, luxury penthouses Mohali Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-luxury-properties' },
  openGraph: {
    title: 'Mandeep Kaith — Luxury Real Estate Specialist',
    description: 'Bespoke luxury estates, ultra-luxury penthouses, and signature villas curated by Mandeep Kaith in Punjab.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-luxury-properties',
  },
};

export default function MandeepKaithLuxuryPropertiesPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Ultra-Luxury Real Estate Portfolio"
      subtitle="Exclusive access to Punjab's finest luxury mansions, sky penthouses, architectural masterpieces, and private gated estates curated by Mandeep Kaith."
      breadcrumb="Mandeep Kaith Luxury Properties"
      badge="Ultra Luxury Segment"
    >
      <p>Ultra-luxury real estate is defined by exclusivity, architectural brilliance, pristine locations, and uncompromised craftsmanship. <strong>Mandeep Kaith</strong> is Punjab's premier luxury real estate specialist, representing discerning High-Net-Worth Individuals (HNIs), business magnates, and international NRIs seeking trophy properties.</p>

      <p>Through KAITH PROPERTIES, <strong>Mandeep Kaith</strong> provides confidential, discreet, and bespoke services for high-value real estate transactions. Every property in the luxury collection of <strong>Mandeep Kaith</strong> is personally vetted to ensure it meets international standards of luxury living.</p>

      <div className="seo-stat-grid">
        <div className="seo-stat"><span className="num">₹5Cr+</span><span className="label">Luxury Entry</span></div>
        <div className="seo-stat"><span className="num">100%</span><span className="label">Discreet Service</span></div>
        <div className="seo-stat"><span className="num">Bespoke</span><span className="label">Architecture</span></div>
        <div className="seo-stat"><span className="num">VIP</span><span className="label">Concierge</span></div>
      </div>

      <h2>The Luxury Real Estate Portfolio of Mandeep Kaith</h2>

      <h3>1. Sky Penthouses & Duplex Residences</h3>
      <p><strong>Mandeep Kaith</strong> offers breathtaking sky penthouses featuring private plunge pools, wrap-around terraces with panoramic city views, private elevators, and Italian marble finishes in prime towers.</p>

      <h3>2. Bespoke Luxury Estates & Farmhouses</h3>
      <p>For clients seeking vast open spaces and supreme privacy, <strong>Mandeep Kaith</strong> curates sprawling gated farmhouses and country estates on the outskirts of Chandigarh and Mohali.</p>

      <h3>3. Architectural Signature Villas</h3>
      <p>Discover ultra-modern multi-level villas designed by world-renowned architects, complete with home theaters, automated climate control, underground parking, and private infinity pools, presented exclusively by <strong>Mandeep Kaith</strong>.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Luxury Properties</h2>
      <div className="faq-item">
        <p className="faq-q">Does Mandeep Kaith maintain off-market luxury property listings?</p>
        <p className="faq-a">Yes, Mandeep Kaith holds an exclusive inventory of confidential, off-market luxury properties that are never listed publicly, available only to verified VIP clients upon request.</p>
      </div>
    </SEOPageLayout>
  );
}
