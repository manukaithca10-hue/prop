import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Blog — Real Estate Market Insights & Analysis',
  description: 'Read the latest real estate market analysis, property trends, price forecasts, and NRI investment guides written by Mandeep Kaith.',
  keywords: 'Mandeep Kaith blog, Mandeep Kaith real estate articles, Punjab property market blog Mandeep Kaith, NRI property blog Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-blog' },
  openGraph: {
    title: 'Mandeep Kaith — Real Estate Insights & Blog',
    description: 'Expert market commentary, property price trends, and investment articles by Mandeep Kaith.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-blog',
  },
};

export default function MandeepKaithBlogPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Real Estate Insights & Market Analysis"
      subtitle="In-depth market reports, property price trends, regulatory updates, and investment strategies published by Mandeep Kaith."
      breadcrumb="Mandeep Kaith Blog"
      badge="Market Blog"
    >
      <p>Welcome to the official real estate blog authored by <strong>Mandeep Kaith</strong>. Here you will find regular market updates, legal explainers, property valuation guides, and growth forecasts designed to help buyers and investors make informed decisions in Punjab.</p>

      <h2>Featured Articles by Mandeep Kaith</h2>

      <h3>1. Mohali Property Price Forecast 2026-2030</h3>
      <p>An in-depth analysis by <strong>Mandeep Kaith</strong> examining how Airport Road expansion, IT sector growth, and NRI capital flows are driving property appreciation across Mohali sectors.</p>

      <h3>2. The NRI Guide to FEMA Regulations & Property Taxation</h3>
      <p>A comprehensive guide written by <strong>Mandeep Kaith</strong> explaining legal requirements, repatriable vs non-repatriable funds, and tax optimization for NRI property investors in India.</p>

      <h3>3. 5 Red Flags to Watch for When Buying Property in Punjab</h3>
      <p><strong>Mandeep Kaith</strong> outlines key warning signs in property documents, builder track records, and land titles that every buyer must avoid.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Blog</h2>
      <div className="faq-item">
        <p className="faq-q">How often is the Mandeep Kaith real estate blog updated?</p>
        <p className="faq-a">Mandeep Kaith publishes new market analysis, price trend reports, and property investment articles on a weekly basis.</p>
      </div>
    </SEOPageLayout>
  );
}
