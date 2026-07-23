import { Project } from "@/types";

export const MOCK_PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "The Royal Kaith Residences",
    slug: "royal-kaith-residences",
    tagline: "Architectural Grandeur Above the Skyline",
    description: "A pinnacle of luxury living in South Mumbai. Designed by international master architects, offering ultra-luxury sky villas, personal private pools, and bespoke white-glove concierge service.",
    location: "Worli, Mumbai",
    city: "Mumbai",
    developer: "KAITH DEVELOPMENTS",
    completionYear: 2026,
    status: "UNDER_CONSTRUCTION",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
    ],
    startingPrice: 450000000, // 45 Cr
    totalUnits: 48
  },
  {
    id: "proj-2",
    name: "Kaith Riviera Beachfront Mansions",
    slug: "kaith-riviera-mansions",
    tagline: "Uncompromised Oceanfront Living",
    description: "Private gated estate enclave of 12 ultra-exclusive mansions on the pristine sands of North Goa with private docks and infinity lap pools.",
    location: "North Goa Coast",
    city: "Goa",
    developer: "KAITH DEVELOPMENTS",
    completionYear: 2025,
    status: "UPCOMING",
    coverImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80"
    ],
    startingPrice: 380000000, // 38 Cr
    totalUnits: 12
  },
  {
    id: "proj-3",
    name: "Skyline Crest Diplomatic Towers",
    slug: "skyline-crest-towers",
    tagline: "The Pinnacle of Corporate & Private Luxury",
    description: "Completed landmark residential skyscraper in Golf Course Road, featuring 5-star spa, private private helipad, and Michelin-star private dining club.",
    location: "Golf Course Road, Gurgaon",
    city: "Gurgaon",
    developer: "KAITH DEVELOPMENTS",
    completionYear: 2024,
    status: "COMPLETED",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
    ],
    startingPrice: 320000000, // 32 Cr
    totalUnits: 60
  }
];
