import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Residential Properties — Dream Homes & Apartments Punjab',
  description: 'Find your dream residential property in Punjab with Mandeep Kaith. Luxury villas, 2BHK/3BHK/4BHK flats, gated township plots, and modern homes with Mandeep Kaith and KAITH PROPERTIES.',
  keywords: 'Mandeep Kaith residential, Mandeep Kaith homes, residential property Punjab Mandeep Kaith, apartments Mohali Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-residential' },
  openGraph: {
    title: 'Mandeep Kaith — Residential Property Specialist',
    description: 'Explore premier residential properties, luxury apartments, and independent homes with Mandeep Kaith.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-residential',
  },
};

export default function MandeepKaithResidentialPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Residential Property Specialist in Punjab"
      subtitle="Helping families find their dream homes, luxury apartments, and premium plots with personalized care, transparent pricing, and complete legal security."
      breadcrumb="Mandeep Kaith Residential"
      badge="Residential Real Estate"
    >
      <p>Buying a home is one of the most emotional and significant milestones in a family's life. <strong>Mandeep Kaith</strong> understands that residential real estate is not just about brick and mortar — it is about lifestyle, security, comfort, and creating lasting family memories. Through KAITH PROPERTIES, <strong>Mandeep Kaith</strong> offers a curated selection of residential properties designed to suit every lifestyle and budget.</p>

      <p>Whether you are seeking a modern 3BHK high-rise luxury apartment in Mohali, an independent villa in a gated community, or a residential plot to build your custom home, <strong>Mandeep Kaith</strong> provides step-by-step guidance from property search to possession.</p>

      <div className="seo-stat-grid">
        <div className="seo-stat"><span className="num">150+</span><span className="label">Homes Handed Over</span></div>
        <div className="seo-stat"><span className="num">100%</span><span className="label">RERA Approved</span></div>
        <div className="seo-stat"><span className="num">2/3/4</span><span className="label">BHK Options</span></div>
        <div className="seo-stat"><span className="num">5★</span><span className="label">Client Rating</span></div>
      </div>

      <h2>Residential Property Categories Handled by Mandeep Kaith</h2>

      <h3>1. Luxury High-Rise Apartments & Penthouses</h3>
      <p><strong>Mandeep Kaith</strong> partners with top-tier RERA-registered developers in Punjab to offer luxury apartments featuring clubhouses, swimming pools, 3-tier security, landscaped gardens, and smart home automation. <strong>Mandeep Kaith</strong> guides clients in picking layouts that optimize sunlight, ventilation, and family living spaces.</p>

      <h3>2. Independent Luxury Villas & Kothis</h3>
      <p>For buyers who prefer privacy and independent living, <strong>Mandeep Kaith</strong> maintains an exclusive portfolio of luxury kothis and modern villas in prime residential sectors of Mohali, Chandigarh, and Ludhiana.</p>

      <h3>3. Gated Township Plots</h3>
      <p>If you want to construct your dream house according to your personal architectural vision, <strong>Mandeep Kaith</strong> helps you acquire residential plots in premier approved townships with underground utilities, wide roads, and green parks.</p>

      <h2>The Residential Buying Process with Mandeep Kaith</h2>
      <ol>
        <li><strong>Requirement Mapping:</strong> Mandeep Kaith conducts a detailed consultation to understand family size, preferred location, budget, and timeline.</li>
        <li><strong>Curated Shortlisting:</strong> Mandeep Kaith presents only verified, RERA-approved properties matching your criteria.</li>
        <li><strong>Site Visits & Evaluation:</strong> Mandeep Kaith personally accompanies you during property viewings to point out build quality and neighborhood advantages.</li>
        <li><strong>Price Negotiation & Documentation:</strong> Mandeep Kaith handles price negotiations and legal due diligence for complete peace of mind.</li>
      </ol>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Residential Properties</h2>
      <div className="faq-item">
        <p className="faq-q">Are all residential properties shown by Mandeep Kaith RERA-approved?</p>
        <p className="faq-a">Yes, Mandeep Kaith strictly deals in RERA-approved residential projects and verified clear-title properties to ensure complete safety for home buyers.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Can Mandeep Kaith assist with home loans for residential properties?</p>
        <p className="faq-a">Yes, Mandeep Kaith works closely with leading nationalized and private banks to help clients secure quick, hassle-free home loan approvals at attractive interest rates.</p>
      </div>
    </SEOPageLayout>
  );
}
