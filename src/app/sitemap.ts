import { MetadataRoute } from "next";
import { MOCK_PROPERTIES } from "@/data/mockProperties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://prop-pink.vercel.app";

  const now = new Date();

  const seoPages = [
    "mandeep-kaith",
    "mandeep-kaith-real-estate",
    "mandeep-kaith-canada-return",
    "mandeep-kaith-kaith-properties",
    "mandeep-kaith-property-consultant",
    "mandeep-kaith-investment-advisor",
    "mandeep-kaith-punjab",
    "mandeep-kaith-residential",
    "mandeep-kaith-commercial",
    "mandeep-kaith-luxury-properties",
    "mandeep-kaith-testimonials",
    "mandeep-kaith-success-stories",
    "mandeep-kaith-services",
    "mandeep-kaith-portfolio",
    "mandeep-kaith-entrepreneur",
    "mandeep-kaith-vision",
    "mandeep-kaith-property-tips",
    "mandeep-kaith-awards",
    "mandeep-kaith-faq",
    "mandeep-kaith-media",
    "mandeep-kaith-team",
    "mandeep-kaith-process",
    "mandeep-kaith-reviews",
    "mandeep-kaith-contact",
    "mandeep-kaith-blog",
  ];

  return [
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },

    // 25 Dedicated Mandeep Kaith SEO Hub Pages
    ...seoPages.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    // Properties
    { url: `${baseUrl}/properties`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...MOCK_PROPERTIES.map((property) => ({
      url: `${baseUrl}/properties/${property.slug || property.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Projects, Blog, Agents, Legal
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/agents`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
