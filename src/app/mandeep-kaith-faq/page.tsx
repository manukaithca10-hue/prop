import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith FAQ — Complete Real Estate Questions Answered',
  description: 'Find answers to all your real estate questions with Mandeep Kaith. Learn about property buying, selling, NRI investments, legal title checks, and fees with Mandeep Kaith.',
  keywords: 'Mandeep Kaith FAQ, Mandeep Kaith questions, real estate FAQ Punjab Mandeep Kaith, property guidance Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-faq' },
  openGraph: {
    title: 'Mandeep Kaith — Frequently Asked Real Estate Questions',
    description: 'Comprehensive answers to common real estate questions curated by Mandeep Kaith for property buyers, sellers, and NRIs.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-faq',
  },
};

export default function MandeepKaithFAQPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Frequently Asked Questions"
      subtitle="Everything you need to know about buying, selling, and investing in Punjab real estate, answered directly by Mandeep Kaith."
      breadcrumb="Mandeep Kaith FAQ"
      badge="Comprehensive FAQ"
    >
      <p>Got questions about buying a home, investing in commercial property, or managing real estate transactions in Punjab? <strong>Mandeep Kaith</strong> provides clear, straightforward answers to the most common questions asked by clients.</p>

      <h2>General Questions About Mandeep Kaith</h2>
      <div className="faq-item">
        <p className="faq-q">Who is Mandeep Kaith?</p>
        <p className="faq-a">Mandeep Kaith is a Canada Return entrepreneur, graduate, and founder of KAITH PROPERTIES, specializing in luxury residential, commercial, and NRI property investments in Punjab.</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">Why should I choose Mandeep Kaith over traditional brokers?</p>
        <p className="faq-a">Mandeep Kaith offers complete transparency, 100% legal title verification, zero hidden charges, and global professional standards learned during his time in Canada.</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">How do I start working with Mandeep Kaith?</p>
        <p className="faq-a">You can book a free initial consultation with Mandeep Kaith via the KAITH PROPERTIES contact page or phone line.</p>
      </div>

      <h2>NRI Property Questions Answered by Mandeep Kaith</h2>
      <div className="faq-item">
        <p className="faq-q">Can NRIs buy commercial and residential property in Punjab?</p>
        <p className="faq-a">Yes, NRIs holding Indian passports or OCI cards can freely buy residential and commercial properties in India under FEMA guidelines. Mandeep Kaith assists with all documentation.</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">How does Mandeep Kaith handle virtual property inspections for NRIs?</p>
        <p className="faq-a">Mandeep Kaith conducts live 4K video tours, drone aerial surveys, and detailed neighborhood assessments for overseas clients.</p>
      </div>

      <hr />
    </SEOPageLayout>
  );
}
