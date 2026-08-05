import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Services — Complete Real Estate & Property Advisory',
  description: 'Explore the full range of real estate services offered by Mandeep Kaith and KAITH PROPERTIES: property search, valuation, NRI legal advisory, commercial leasing, and portfolio management.',
  keywords: 'Mandeep Kaith services, Mandeep Kaith real estate services, KAITH PROPERTIES services Mandeep Kaith, property advisory services Punjab Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-services' },
  openGraph: {
    title: 'Mandeep Kaith — Real Estate Services & Advisory',
    description: 'Comprehensive property services by Mandeep Kaith: buying, selling, NRI services, valuation, and commercial leasing.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-services',
  },
};

export default function MandeepKaithServicesPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Comprehensive Real Estate Services"
      subtitle="End-to-end property advisory, valuation, legal due diligence, commercial leasing, and NRI portfolio management led by Mandeep Kaith."
      breadcrumb="Mandeep Kaith Services"
      badge="Full-Service Advisory"
    >
      <p>At KAITH PROPERTIES, <strong>Mandeep Kaith</strong> offers an all-inclusive suite of real estate services tailored to meet the needs of homebuyers, business owners, investors, and NRI clients. With <strong>Mandeep Kaith</strong> managing every detail, property transactions become effortless, secure, and rewarding.</p>

      <h2>Core Real Estate Services by Mandeep Kaith</h2>

      <h3>1. Residential Property Acquisition & Sales</h3>
      <p>Whether buying your first apartment or selling a luxury villa, <strong>Mandeep Kaith</strong> manages everything: property valuation, professional staging, targeted marketing, site viewings, price negotiation, and registry transfer.</p>

      <h3>2. Commercial Real Estate & Leasing</h3>
      <p><strong>Mandeep Kaith</strong> assists corporate tenants and retail brands in finding high-visibility SCO showrooms, office floors, and warehouse facilities, while managing lease agreements and landlord-tenant relations.</p>

      <h3>3. NRI Property Desk & Remote Management</h3>
      <p>Designed specifically by <strong>Mandeep Kaith</strong> for overseas Indians, this service covers virtual property tours, power of attorney (POA) guidance, tenant management, rent collection, property maintenance, and tax clearance.</p>

      <h3>4. Property Valuation & Legal Due Diligence</h3>
      <p><strong>Mandeep Kaith</strong> provides certified property valuation reports and conducts 30-year title searches, mutation checks, and RERA verification to ensure zero legal liability for clients.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Services</h2>
      <div className="faq-item">
        <p className="faq-q">Does Mandeep Kaith assist with property registration and stamp duty in Punjab?</p>
        <p className="faq-a">Yes, Mandeep Kaith handles complete documentation, stamp duty calculation, appointment scheduling, and registration at the sub-registrar office.</p>
      </div>
    </SEOPageLayout>
  );
}
