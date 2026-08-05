import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Property Tips — Expert Buying & Investment Guide',
  description: 'Read expert real estate tips and buying advice from Mandeep Kaith. Learn how to evaluate properties, avoid common traps, check titles, and maximize ROI with Mandeep Kaith.',
  keywords: 'Mandeep Kaith property tips, Mandeep Kaith buying guide, real estate advice Punjab Mandeep Kaith, property investment tips Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-property-tips' },
  openGraph: {
    title: 'Mandeep Kaith — Expert Real Estate Tips & Advice',
    description: 'Essential real estate buying, selling, and investment advice curated by Mandeep Kaith for homebuyers and investors.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-property-tips',
  },
};

export default function MandeepKaithPropertyTipsPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Essential Property Buying & Investment Tips"
      subtitle="Expert real estate advice, legal checklists, valuation secrets, and negotiation tips curated by Mandeep Kaith for buyers and investors in Punjab."
      breadcrumb="Mandeep Kaith Property Tips"
      badge="Expert Advice"
    >
      <p>Making a smart real estate decision requires knowledge, vigilance, and strategic preparation. <strong>Mandeep Kaith</strong> shares his top property buying, selling, and investment tips gained over years of successful consulting in Punjab.</p>

      <h2>Top Property Buying Tips by Mandeep Kaith</h2>

      <h3>1. Always Verify RERA Registration</h3>
      <p><strong>Mandeep Kaith</strong> strongly advises buyers to verify the project's RERA registration number on the official state portal before paying any booking advance.</p>

      <h3>2. Inspect the 30-Year Title Chain</h3>
      <p>Before purchasing land or an independent house, <strong>Mandeep Kaith</strong> recommends conducting a thorough title search covering the last 30 years to verify ownership and ensure no encumbrances exist.</p>

      <h3>3. Evaluate Infrastructure Timelines</h3>
      <p>Don't just buy based on builder promises. <strong>Mandeep Kaith</strong> advises evaluating actual government progress on roads, water supply, sewage lines, and electricity connections in the micro-market.</p>

      <h3>4. Calculate Total Acquisition Cost</h3>
      <p><strong>Mandeep Kaith</strong> reminds buyers to account for stamp duty, registration charges, GST (for under-construction units), maintenance security, and legal fees when setting their property budget.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Property Tips</h2>
      <div className="faq-item">
        <p className="faq-q">What is the most important legal document to check according to Mandeep Kaith?</p>
        <p className="faq-a">Mandeep Kaith emphasizes verifying the Sale Deed, Mutation Record (Fard), Non-Encumbrance Certificate (NEC), and approved layout plan before signing any agreement.</p>
      </div>
    </SEOPageLayout>
  );
}
