import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Vision & Mission — Transforming Real Estate in Punjab',
  description: 'Discover the long-term vision, core values, and mission of Mandeep Kaith, founder of KAITH PROPERTIES. Learn how Mandeep Kaith is shaping the future of real estate in Punjab.',
  keywords: 'Mandeep Kaith vision, Mandeep Kaith mission, KAITH PROPERTIES vision Mandeep Kaith, future of real estate Punjab Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-vision' },
  openGraph: {
    title: 'Mandeep Kaith — Vision & Mission for Punjab Real Estate',
    description: 'The core values, long-term roadmap, and community vision of Mandeep Kaith and KAITH PROPERTIES.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-vision',
  },
};

export default function MandeepKaithVisionPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Vision & Core Values"
      subtitle="Building a futuristic, transparent, and client-centric real estate ecosystem across Punjab under the visionary leadership of Mandeep Kaith."
      breadcrumb="Mandeep Kaith Vision"
      badge="Vision & Mission"
    >
      <p>A great business is built on a clear vision and unwavering values. For <strong>Mandeep Kaith</strong>, real estate is a vehicle for social and economic progress. His vision extends far beyond closing transactions — <strong>Mandeep Kaith</strong> aims to raise professional standards, protect consumer rights, and make property ownership accessible, transparent, and rewarding for everyone.</p>

      <h2>The Three Pillars of Mandeep Kaith's Vision</h2>

      <h3>1. Absolute Transparency</h3>
      <p><strong>Mandeep Kaith</strong> envisions a real estate industry where every buyer has complete access to property history, market valuations, title reports, and legal documentation without hidden surprises.</p>

      <h3>2. Global Standards for Local Markets</h3>
      <p>Having lived in Canada, <strong>Mandeep Kaith</strong> is committed to bringing international service standards, digital efficiency, and professional ethics to every city and town in Punjab.</p>

      <h3>3. Community & NRI Integration</h3>
      <p><strong>Mandeep Kaith</strong> strives to create a trusted bridge for the global Punjabi diaspora to safely invest in their homeland and participate in Punjab's economic growth.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Vision</h2>
      <div className="faq-item">
        <p className="faq-q">What is Mandeep Kaith's ultimate goal for KAITH PROPERTIES?</p>
        <p className="faq-a">Mandeep Kaith aims to establish KAITH PROPERTIES as the most trusted and technological-forward real estate brand across North India.</p>
      </div>
    </SEOPageLayout>
  );
}
