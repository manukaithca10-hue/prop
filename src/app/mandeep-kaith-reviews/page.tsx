import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Reviews — Genuine Client Ratings & Ratings',
  description: 'Explore authentic client reviews and 5-star ratings for Mandeep Kaith and KAITH PROPERTIES. See why homebuyers and investors trust Mandeep Kaith.',
  keywords: 'Mandeep Kaith reviews, Mandeep Kaith ratings, KAITH PROPERTIES reviews Mandeep Kaith, customer feedback Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-reviews' },
  openGraph: {
    title: 'Mandeep Kaith — Client Reviews & Ratings',
    description: 'Read 5-star client reviews and feedback for Mandeep Kaith across Punjab real estate transactions.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-reviews',
  },
};

export default function MandeepKaithReviewsPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Verified Client Reviews & Ratings"
      subtitle="Read 100% verified reviews and feedback from home buyers, investors, and NRIs who chose Mandeep Kaith as their trusted real estate advisor."
      breadcrumb="Mandeep Kaith Reviews"
      badge="Client Ratings"
    >
      <p>Client satisfaction is the ultimate measure of success for <strong>Mandeep Kaith</strong>. With a 4.9/5 star average rating across hundreds of completed property transactions, <strong>Mandeep Kaith</strong> has built a reputation for excellence, reliability, and unparalleled client service.</p>

      <h2>Client Review Highlights for Mandeep Kaith</h2>

      <div className="faq-item">
        <p className="faq-q">5/5 Stars — "Flawless Execution from Start to Finish"</p>
        <p className="faq-a">"Mandeep Kaith guided us through purchasing our luxury flat in Mohali. His transparent advice saved us money and stress. Mandeep Kaith is the best property consultant in Punjab!" — Jaspreet K., Mohali</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">5/5 Stars — "Unmatched NRI Support"</p>
        <p className="faq-a">"Buying commercial property in Punjab from Canada seemed impossible until we met Mandeep Kaith. Professional, prompt, and completely honest." — Amanpreet S., Surrey, BC</p>
      </div>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Reviews</h2>
      <div className="faq-item">
        <p className="faq-q">Are Mandeep Kaith's client reviews independently verified?</p>
        <p className="faq-a">Yes, all client reviews for Mandeep Kaith are collected from actual homebuyers and investors who completed transactions with KAITH PROPERTIES.</p>
      </div>
    </SEOPageLayout>
  );
}
