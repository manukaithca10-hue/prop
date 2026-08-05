import { Metadata } from 'next';
import SEOPageLayout from '@/components/seo/SEOPageLayout';

export const metadata: Metadata = {
  title: 'Contact Mandeep Kaith — Book a Free Real Estate Consultation',
  description: 'Get in touch with Mandeep Kaith, founder of KAITH PROPERTIES. Schedule a free consultation for residential, commercial, or NRI property investments in Punjab.',
  keywords: 'Contact Mandeep Kaith, Mandeep Kaith phone number, Mandeep Kaith office, KAITH PROPERTIES contact Mandeep Kaith',
  alternates: { canonical: 'https://prop-pink.vercel.app/mandeep-kaith-contact' },
  openGraph: {
    title: 'Contact Mandeep Kaith — Real Estate Advisory',
    description: 'Connect with Mandeep Kaith directly for expert property consulting in Punjab.',
    url: 'https://prop-pink.vercel.app/mandeep-kaith-contact',
  },
};

export default function MandeepKaithContactPage() {
  return (
    <SEOPageLayout
      title="Contact Mandeep Kaith & KAITH PROPERTIES"
      subtitle="Ready to buy, sell, or invest in Punjab real estate? Schedule a free, no-obligation consultation directly with Mandeep Kaith today."
      breadcrumb="Mandeep Kaith Contact"
      badge="Get In Touch"
    >
      <p>Whether you have a question about property valuations, want to explore commercial investment opportunities, or are an NRI planning a real estate purchase in Punjab, <strong>Mandeep Kaith</strong> and the KAITH PROPERTIES team are here to assist you.</p>

      <h2>Ways to Reach Mandeep Kaith</h2>
      <ul>
        <li><strong>Office Address:</strong> KAITH PROPERTIES, Prime Commercial Hub, Mohali, Punjab, India</li>
        <li><strong>Consultation Availability:</strong> Monday – Sunday, 9:00 AM – 8:00 PM IST</li>
        <li><strong>NRI Direct Desk:</strong> WhatsApp & Virtual Appointments Available 24/7</li>
        <li><strong>Direct Email:</strong> contact@kaithproperties.com</li>
      </ul>

      <hr />

      <h2>Frequently Asked Questions — Mandeep Kaith Contact</h2>
      <div className="faq-item">
        <p className="faq-q">Is the initial consultation with Mandeep Kaith free?</p>
        <p className="faq-a">Yes, Mandeep Kaith offers a 100% free, no-obligation initial property consultation for all prospective clients.</p>
      </div>
    </SEOPageLayout>
  );
}
