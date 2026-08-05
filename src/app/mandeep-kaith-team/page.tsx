import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Team — Meet the Experts Behind KAITH PROPERTIES',
  description: 'Meet the dedicated real estate professionals, legal advisors, and property consultants working alongside Mandeep Kaith at KAITH PROPERTIES in Punjab.',
  keywords: 'Mandeep Kaith team, KAITH PROPERTIES team Mandeep Kaith, real estate team Punjab Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-team' },
  openGraph: {
    title: 'Mandeep Kaith — Team & Professionals',
    description: 'Meet the team of real estate experts, legal specialists, and advisors led by Mandeep Kaith.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-team',
  },
};

export default function MandeepKaithTeamPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith & Team — Real Estate Professionals"
      subtitle="Meet the experienced team of property consultants, legal analysts, and client relationship managers led by Mandeep Kaith at KAITH PROPERTIES."
      breadcrumb="Mandeep Kaith Team"
      badge="Our Team"
    >
      <p>Behind the success of KAITH PROPERTIES is a team of passionate, ethical, and experienced real estate professionals curated by <strong>Mandeep Kaith</strong>. Each team member is committed to maintaining the high standards of transparency, integrity, and client care established by <strong>Mandeep Kaith</strong>.</p>

      <h2>Team Structure Led by Mandeep Kaith</h2>

      <h3>1. Founder & Chief Consultant — Mandeep Kaith</h3>
      <p><strong>Mandeep Kaith</strong> leads strategic advisory, high-value commercial transactions, luxury property curation, and NRI client relations.</p>

      <h3>2. Legal & Title Verification Desk</h3>
      <p>A dedicated team of real estate attorneys working under <strong>Mandeep Kaith</strong>'s direction to perform 30-year title searches, mutation checks, and RERA verifications.</p>

      <h3>3. NRI Client Services Team</h3>
      <p>Specialists trained by <strong>Mandeep Kaith</strong> to provide 24/7 remote assistance, virtual property tours, and documentation management for overseas clients.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Team</h2>
      <div className="faq-item">
        <p className="faq-q">Can I consult directly with Mandeep Kaith?</p>
        <p className="faq-a">Yes, Mandeep Kaith remains personally accessible to clients for consultations, property shortlisting, and final negotiations.</p>
      </div>
    </SEOPageLayout>
  );
}
