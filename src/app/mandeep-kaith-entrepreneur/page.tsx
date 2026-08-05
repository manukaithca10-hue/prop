import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Entrepreneur — Founder & Business Visionary Punjab',
  description: 'Learn about Mandeep Kaith\'s entrepreneurial journey, leadership philosophy, business innovation, and how Mandeep Kaith built KAITH PROPERTIES into a market leader in Punjab.',
  keywords: 'Mandeep Kaith entrepreneur, Mandeep Kaith founder, Mandeep Kaith business leader, KAITH PROPERTIES founder Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-entrepreneur' },
  openGraph: {
    title: 'Mandeep Kaith — Entrepreneur & Business Leader',
    description: 'The story of Mandeep Kaith\'s entrepreneurial leadership, business innovation, and vision in building KAITH PROPERTIES.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-entrepreneur',
  },
};

export default function MandeepKaithEntrepreneurPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Entrepreneurial Journey & Leadership"
      subtitle="Discover how Canada Return entrepreneur Mandeep Kaith built KAITH PROPERTIES into a leading real estate venture through innovation, ethics, and visionary leadership."
      breadcrumb="Mandeep Kaith Entrepreneur"
      badge="Entrepreneurship"
    >
      <p>Entrepreneurship is about identifying gaps in the market and creating meaningful value through innovation, hard work, and ethical leadership. <strong>Mandeep Kaith</strong> embodies this entrepreneurial spirit. After completing his higher education and gaining international experience in Canada, <strong>Mandeep Kaith</strong> returned to Punjab to build KAITH PROPERTIES from the ground up.</p>

      <p>By blending Western real estate transparency with deep local market relationships, <strong>Mandeep Kaith</strong> pioneered a new model of property consulting in Punjab — one built on absolute client trust, technology adoption, and corporate professionalism.</p>

      <h2>Entrepreneurial Milestones of Mandeep Kaith</h2>

      <h3>1. Identifying the Market Gap</h3>
      <p>Upon returning from Canada, <strong>Mandeep Kaith</strong> observed that Punjab's property market suffered from lack of transparency and informal practices. He saw the opportunity to establish a professional, brand-driven consultancy.</p>

      <h3>2. Bootstrapping KAITH PROPERTIES</h3>
      <p><strong>Mandeep Kaith</strong> built KAITH PROPERTIES without external capital, relying entirely on client satisfaction, word-of-mouth referrals, and consistent execution to grow the business year over year.</p>

      <h3>3. Digital Transformation in Property Consulting</h3>
      <p><strong>Mandeep Kaith</strong> introduced virtual video walkthroughs, digital documentation, and online client portals, making property buying seamless for NRIs across Canada, the US, and Europe.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Entrepreneur</h2>
      <div className="faq-item">
        <p className="faq-q">What inspires Mandeep Kaith's business leadership?</p>
        <p className="faq-a">Mandeep Kaith is inspired by ethical business practices, global standards, and the desire to empower families and investors through sound real estate decisions.</p>
      </div>
    </SEOPageLayout>
  );
}
