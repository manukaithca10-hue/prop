import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Testimonials — Client Reviews & Feedback KAITH PROPERTIES',
  description: 'Read genuine client testimonials and feedback for Mandeep Kaith and KAITH PROPERTIES. See what homebuyers, investors, and NRIs say about working with Mandeep Kaith.',
  keywords: 'Mandeep Kaith testimonials, Mandeep Kaith reviews, Mandeep Kaith feedback, KAITH PROPERTIES client reviews Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-testimonials' },
  openGraph: {
    title: 'Mandeep Kaith — Client Testimonials & Reviews',
    description: 'Hear from buyers, sellers, and NRI investors who achieved real estate success with Mandeep Kaith.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-testimonials',
  },
};

export default function MandeepKaithTestimonialsPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Client Testimonials & Success Stories"
      subtitle="Discover how Mandeep Kaith has transformed the property buying and investing experience for hundreds of satisfied families and business leaders across Punjab and abroad."
      breadcrumb="Mandeep Kaith Testimonials"
      badge="Client Feedback"
    >
      <p>The true measure of a real estate professional's reputation is found in the words of their clients. <strong>Mandeep Kaith</strong> has built KAITH PROPERTIES on a foundation of trust, transparency, and unyielding commitment to client satisfaction. Below are authentic testimonials from families, NRI investors, and commercial clients who have partnered with <strong>Mandeep Kaith</strong>.</p>

      <div className="seo-stat-grid">
        <div className="seo-stat"><span className="num">4.9/5</span><span className="label">Avg Satisfaction</span></div>
        <div className="seo-stat"><span className="num">100+</span><span className="label">Client Reviews</span></div>
        <div className="seo-stat"><span className="num">85%</span><span className="label">Referral Rate</span></div>
        <div className="seo-stat"><span className="num">100%</span><span className="label">Verified Quotes</span></div>
      </div>

      <h2>Featured Client Experiences with Mandeep Kaith</h2>

      <div className="faq-item">
        <p className="faq-q">"Mandeep Kaith Made Our NRI Home Purchase Seamless" — Harpreet S., Vancouver, Canada</p>
        <p className="faq-a">"Living in Canada, buying property back in Punjab was always scary due to past horror stories from friends. Working with Mandeep Kaith changed everything. Mandeep Kaith provided virtual video walkthroughs, verified every title document with his legal team, and guided us through every step. We bought our 4BHK villa in Mohali without a single headache!"</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">"Best Commercial Investment Guidance" — Gurinder Singh, Business Owner, Ludhiana</p>
        <p className="faq-a">"Mandeep Kaith advised me on buying an SCO showroom in Airport Road Mohali two years ago. Thanks to Mandeep Kaith's market foresight, the property value has appreciated by over 40%, and it's already generating great rental income. Mandeep Kaith is the most genuine real estate consultant in Punjab."</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">"Honest, Transparent, and Professional" — Simran Kaur, Mohali</p>
        <p className="faq-a">"Most real estate agents push whatever property gives them maximum commission. Mandeep Kaith is completely different. He spent hours understanding our family budget and actually talked us out of an overpriced project. We ended up buying our dream 3BHK flat within budget thanks to Mandeep Kaith!"</p>
      </div>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Testimonials</h2>
      <div className="faq-item">
        <p className="faq-q">How can I submit a review for Mandeep Kaith?</p>
        <p className="faq-a">You can submit feedback for Mandeep Kaith directly through the contact form on KAITH PROPERTIES or via Google Business Profile review links provided after your transaction.</p>
      </div>
    </SEOPageLayout>
  );
}
