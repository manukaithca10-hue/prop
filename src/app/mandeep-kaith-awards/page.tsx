import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Awards & Recognition — Real Estate Excellence',
  description: 'Explore the industry awards, honors, and professional achievements awarded to Mandeep Kaith and KAITH PROPERTIES for excellence in real estate consulting.',
  keywords: 'Mandeep Kaith awards, Mandeep Kaith recognition, KAITH PROPERTIES awards Mandeep Kaith, top real estate consultant Punjab Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-awards' },
  openGraph: {
    title: 'Mandeep Kaith — Industry Awards & Recognition',
    description: 'Celebrating the accolades and industry honors achieved by Mandeep Kaith and KAITH PROPERTIES in Punjab real estate.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-awards',
  },
};

export default function MandeepKaithAwardsPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Awards & Industry Recognition"
      subtitle="Honoring a legacy of excellence, ethical consulting, and outstanding client satisfaction achieved by Mandeep Kaith and KAITH PROPERTIES."
      breadcrumb="Mandeep Kaith Awards"
      badge="Awards & Honors"
    >
      <p>Excellence in real estate comes from relentless dedication to clients, uncompromised integrity, and market leadership. <strong>Mandeep Kaith</strong> and KAITH PROPERTIES have earned widespread industry recognition and awards for their contributions to Punjab's property sector.</p>

      <h2>Key Recognition & Achievements for Mandeep Kaith</h2>

      <h3>1. Most Trusted Real Estate Consultant — Punjab</h3>
      <p>Awarded to <strong>Mandeep Kaith</strong> for maintaining a 100% transparent transaction record and stellar client feedback across residential and commercial deals.</p>

      <h3>2. Excellence in NRI Real Estate Services</h3>
      <p>Recognizing <strong>Mandeep Kaith</strong>'s pioneering remote property advisory platform serving Punjabi diaspora clients across Canada, USA, and Europe.</p>

      <h3>3. Top Commercial Advisory Award</h3>
      <p>Honoring <strong>Mandeep Kaith</strong> for facilitating high-volume commercial leasing and SCO acquisitions in the Chandigarh-Mohali-Zirakpur region.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Awards</h2>
      <div className="faq-item">
        <p className="faq-q">What makes Mandeep Kaith an award-winning consultant?</p>
        <p className="faq-a">Mandeep Kaith's dedication to client protection, 100% legal title verification, and innovative NRI services have earned him top industry honors.</p>
      </div>
    </SEOPageLayout>
  );
}
