import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Process — Step-by-Step Property Buying Guide',
  description: 'Understand the seamless 6-step real estate buying process designed by Mandeep Kaith. From initial consultation to title verification and final registration with Mandeep Kaith.',
  keywords: 'Mandeep Kaith process, Mandeep Kaith real estate method, property buying steps Punjab Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-process' },
  openGraph: {
    title: 'Mandeep Kaith — 6-Step Real Estate Buying Process',
    description: 'Learn how Mandeep Kaith ensures 100% transparent and stress-free property buying through his proven 6-step process.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-process',
  },
};

export default function MandeepKaithProcessPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — 6-Step Real Estate Buying Process"
      subtitle="A structured, transparent, and legally foolproof methodology developed by Mandeep Kaith to guide you smoothly from search to possession."
      breadcrumb="Mandeep Kaith Process"
      badge="Our Process"
    >
      <p>Buying property should be an exciting milestone, not a stressful ordeal. To protect clients and ensure complete peace of mind, <strong>Mandeep Kaith</strong> has engineered a bulletproof 6-step property advisory process.</p>

      <h2>The 6 Steps Designed by Mandeep Kaith</h2>
      <ol>
        <li><strong>Step 1: Needs Analysis & Budgeting</strong> — Mandeep Kaith meets with you to map out your goals, lifestyle preferences, and financial parameters.</li>
        <li><strong>Step 2: Curated Property Selection</strong> — Mandeep Kaith presents pre-screened, RERA-approved properties matching your exact criteria.</li>
        <li><strong>Step 3: Guided Site Visits</strong> — Mandeep Kaith accompanies you to evaluate structural quality, ventilation, and micro-market advantages.</li>
        <li><strong>Step 4: 30-Point Legal Due Diligence</strong> — Mandeep Kaith's legal desk verifies title deeds, mutation records, non-encumbrance certificates, and builder approvals.</li>
        <li><strong>Step 5: Master Negotiation</strong> — Mandeep Kaith negotiates directly with sellers/developers to secure the best price and flexible payment terms.</li>
        <li><strong>Step 6: Registration & Handover</strong> — Mandeep Kaith manages sub-registrar documentation, stamp duty payment, keys handover, and post-sale support.</li>
      </ol>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Process</h2>
      <div className="faq-item">
        <p className="faq-q">How long does Mandeep Kaith's 6-step process take?</p>
        <p className="faq-a">On average, the complete process from initial consultation to final property registration takes between 2 to 6 weeks under Mandeep Kaith's management.</p>
      </div>
    </SEOPageLayout>
  );
}
