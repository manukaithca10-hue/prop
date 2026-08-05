import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Mandeep Kaith Media & Press — In the News & Interviews',
  description: 'Read news coverage, media features, market commentary, and interviews with Mandeep Kaith, founder of KAITH PROPERTIES.',
  keywords: 'Mandeep Kaith media, Mandeep Kaith press, Mandeep Kaith news, Mandeep Kaith interviews KAITH PROPERTIES',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-media' },
  openGraph: {
    title: 'Mandeep Kaith — Media, Press & News',
    description: 'Press releases, news coverage, and property market commentary by Mandeep Kaith.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-media',
  },
};

export default function MandeepKaithMediaPage() {
  return (
    <SEOPageLayout
      title="Mandeep Kaith — Media, Press & Market Commentary"
      subtitle="Explore news coverage, press releases, expert articles, and media interviews featuring Mandeep Kaith and KAITH PROPERTIES."
      breadcrumb="Mandeep Kaith Media"
      badge="Press & News"
    >
      <p>As a recognized thought leader in Punjab's real estate sector, <strong>Mandeep Kaith</strong> is regularly featured in property publications, media outlets, and industry forums sharing insights on market trends, NRI investment opportunities, and urban development.</p>

      <h2>Media Coverage Highlights for Mandeep Kaith</h2>

      <h3>1. Punjab Real Estate Growth Feature</h3>
      <p><strong>Mandeep Kaith</strong> was featured discussing the rapid transformation of Airport Road Mohali into North India's top commercial destination.</p>

      <h3>2. Canada Return Entrepreneur Spotlight</h3>
      <p>A personal feature on how <strong>Mandeep Kaith</strong> returned from Canada to revolutionize property consulting standards in Punjab.</p>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Media</h2>
      <div className="faq-item">
        <p className="faq-q">How can journalists contact Mandeep Kaith for interviews?</p>
        <p className="faq-a">Media professionals can reach out directly to Mandeep Kaith via the press inquiry form on KAITH PROPERTIES.</p>
      </div>
    </SEOPageLayout>
  );
}
