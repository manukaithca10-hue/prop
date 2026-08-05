import { MetadataRoute } from "next";
import { MOCK_PROPERTIES } from "@/data/mockProperties";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use NEXT_PUBLIC_SITE_URL if set, otherwise fall back to the Vercel deployment URL.
  // Set this env variable in Vercel dashboard → Settings → Environment Variables.
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://prop-pink.vercel.app";

  const now = new Date();

  return [
    // ── Core pages ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // ── Properties ──────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/properties`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...MOCK_PROPERTIES.map((property) => ({
      url: `${baseUrl}/properties/${property.slug || property.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // ── Projects ────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ── Blog ────────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ── Agents ──────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/agents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Legal / Support ─────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
