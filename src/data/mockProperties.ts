import { Property } from "@/types";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Imperial Sky Mansion & Penthouse",
    slug: "imperial-sky-mansion-penthouse",
    description: "An extraordinary triplex penthouse situated atop Mumbai's most exclusive luxury tower. Featuring 360-degree ocean views, a private infinity glass pool, personal private elevator, direct helipad access, and custom Italian marble finishes crafted by world-renowned architects.",
    price: 650000000, // 65 Cr
    currency: "INR",
    location: "Worli Sea Face, Mumbai",
    address: "77 Imperial Heights, Worli Sea Face",
    city: "Mumbai",
    state: "Maharashtra",
    bedrooms: 6,
    bathrooms: 8,
    areaSqFt: 14500,
    pricePerSqFt: 44827,
    propertyType: "PENTHOUSE",
    status: "FOR_SALE",
    yearBuilt: 2024,
    garageSpaces: 6,
    isFeatured: true,
    isPremium: true,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    virtualTour360: "https://my.matterport.com/show/?m=sample",
    amenities: [
      "Private Infinity Glass Pool",
      "Helipad Access",
      "Private Wine Cellar & Tasting Room",
      "Private High-Speed Elevator",
      "24/7 VIP Security Concierge",
      "Smart Home Automation",
      "Private Spa & Sauna",
      "Sea Facing Balcony"
    ],
    facing: "Arabian Sea Facing",
    agent: {
      id: "agent-1",
      name: "Vikramaditya Kaith",
      title: "Founder & Senior Managing Director",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      phone: "+91 98765 43210",
      email: "v.kaith@kaithproperties.com"
    },
    nearbyPlaces: [
      { name: "High Street Phoenix Mall", distance: "1.2 km", category: "Mall" },
      { name: "Bandra-Worli Sea Link", distance: "0.8 km", category: "Metro" },
      { name: "Lilavati Hospital", distance: "3.5 km", category: "Hospital" },
      { name: "Taj Mahal Palace Fine Dining", distance: "8.0 km", category: "Dining" }
    ]
  },
  {
    id: "prop-2",
    title: "Palais de Bellevue Luxury Beachfront Estate",
    slug: "palais-de-bellevue-estate",
    description: "A breathtaking Mediterranean beachfront villa sprawling over 2.5 acres of private coastal paradise in Goa. Comes complete with private boat dock, championship tennis court, heated plunge pools, and organic botanical gardens.",
    price: 420000000, // 42 Cr
    currency: "INR",
    location: "Anjuna Beach, Goa",
    address: "12 Seaside Boulevard, Anjuna",
    city: "Goa",
    state: "Goa",
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 11200,
    pricePerSqFt: 37500,
    propertyType: "LUXURY_VILLA",
    status: "FOR_SALE",
    yearBuilt: 2023,
    garageSpaces: 4,
    isFeatured: true,
    isPremium: true,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
    ],
    amenities: [
      "Private Boat Dock",
      "Championship Tennis Court",
      "Heated Plunge Pool",
      "Botanical Landscaped Gardens",
      "Outdoor Cinema & Lounge",
      "Solar Power Grid & Backup",
      "Chef's Commercial Kitchen"
    ],
    facing: "Sunset Beach Facing",
    agent: {
      id: "agent-2",
      name: "Sophia Al-Mansoor",
      title: "International Luxury Portfolio Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      phone: "+91 98111 22334",
      email: "s.almansoor@kaithproperties.com"
    },
    nearbyPlaces: [
      { name: "Goa International Airport", distance: "28 km", category: "Airport" },
      { name: "Thalassa Fine Mediterranean", distance: "2.1 km", category: "Dining" }
    ]
  },
  {
    id: "prop-3",
    title: "The Royal Golf Sanctuary Villa",
    slug: "royal-golf-sanctuary-villa",
    description: "An ultra-luxurious modern golf villa nestled in Golf Course Road, Gurgaon. Featuring double-height glass walls overlooking lush greens, private indoor heated pool, state-of-the-art home theater, and subterranean 6-car gallery.",
    price: 350000000, // 35 Cr
    currency: "INR",
    location: "Golf Course Road, Gurgaon",
    address: "Block A, DLF Golf Country Club",
    city: "Gurgaon",
    state: "Haryana",
    bedrooms: 5,
    bathrooms: 7,
    areaSqFt: 9800,
    pricePerSqFt: 35714,
    propertyType: "LUXURY_VILLA",
    status: "FOR_SALE",
    yearBuilt: 2024,
    garageSpaces: 6,
    isFeatured: true,
    isPremium: true,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80"
    ],
    amenities: [
      "Golf Course View",
      "Indoor Heated Pool",
      "Subterranean Car Gallery",
      "Private Dolby Atmos Cinema",
      "Cigar & Whiskey Lounge",
      "Automated Solar Glass"
    ],
    facing: "North-East Park Facing",
    agent: {
      id: "agent-1",
      name: "Vikramaditya Kaith",
      title: "Founder & Senior Managing Director",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      phone: "+91 98765 43210",
      email: "v.kaith@kaithproperties.com"
    }
  },
  {
    id: "prop-4",
    title: "The Golden Crest Commercial Flagship Tower",
    slug: "golden-crest-commercial-tower",
    description: "Iconic Grade-A ultra-luxury commercial showroom and office building situated in the prime business corridor of Central Bengaluru. Ideal for luxury retail flagships, private banks, or multinational headquarters.",
    price: 850000000, // 85 Cr
    currency: "INR",
    location: "UB City Corridor, Bengaluru",
    address: "45 Vittal Mallya Road",
    city: "Bengaluru",
    state: "Karnataka",
    bedrooms: 0,
    bathrooms: 12,
    areaSqFt: 22000,
    pricePerSqFt: 38636,
    propertyType: "COMMERCIAL_SHOP",
    status: "FOR_SALE",
    yearBuilt: 2024,
    garageSpaces: 20,
    isFeatured: false,
    isPremium: true,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
    ],
    amenities: [
      "Triple Height Atrium Lobby",
      "LEED Platinum Certified",
      "Multi-Tier High Speed Elevators",
      "24/7 Automated Security",
      "Rooftop Helipad",
      "Valet Parking Complex"
    ],
    agent: {
      id: "agent-3",
      name: "Rajeshwar Singhania",
      title: "Director of Commercial Real Estate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      phone: "+91 98999 88776",
      email: "r.singhania@kaithproperties.com"
    }
  },
  {
    id: "prop-5",
    title: "Elysium Hills Private Estate & Vineyard",
    slug: "elysium-hills-estate-vineyard",
    description: "An sprawling 8-acre private sanctuary in Lonavala featuring custom architectural stone residence, private organic vineyard, glass infinity pool hanging over the valley, and private helipad.",
    price: 280000000, // 28 Cr
    currency: "INR",
    location: "Khandala Heights, Lonavala",
    address: "Estate 9, Sunset Point Road",
    city: "Lonavala",
    state: "Maharashtra",
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 8500,
    pricePerSqFt: 32941,
    propertyType: "FARM_HOUSE",
    status: "FOR_SALE",
    yearBuilt: 2023,
    garageSpaces: 4,
    isFeatured: true,
    isPremium: true,
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
    ],
    amenities: [
      "Private Organic Vineyard",
      "Cliffside Infinity Pool",
      "Private Helipad",
      "Stargazing Observatory",
      "Staff Quarters Annex"
    ],
    agent: {
      id: "agent-2",
      name: "Sophia Al-Mansoor",
      title: "International Luxury Portfolio Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      phone: "+91 98111 22334",
      email: "s.almansoor@kaithproperties.com"
    }
  },
  {
    id: "prop-6",
    title: "The Sovereign Penthouse at Diplomatic Enclave",
    slug: "sovereign-penthouse-diplomatic-enclave",
    description: "Unrivaled luxury in New Delhi's prestigious Diplomatic Enclave. Features bullets-proof glass, private indoor garden courtyard, heated marble floors, and 24/7 dedicated butler concierge service.",
    price: 520000000, // 52 Cr
    currency: "INR",
    location: "Chanakyapuri, New Delhi",
    address: "18 Malcha Marg",
    city: "New Delhi",
    state: "Delhi",
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 10500,
    pricePerSqFt: 49523,
    propertyType: "PENTHOUSE",
    status: "FOR_RENT",
    yearBuilt: 2024,
    garageSpaces: 4,
    isFeatured: false,
    isPremium: true,
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
    ],
    amenities: [
      "High Security Diplomatic Zone",
      "Bulletproof Double Glazing",
      "Heated Marble Flooring",
      "Private Butler Concierge",
      "Rooftop Glass Pavilion"
    ],
    agent: {
      id: "agent-1",
      name: "Vikramaditya Kaith",
      title: "Founder & Senior Managing Director",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      phone: "+91 98765 43210",
      email: "v.kaith@kaithproperties.com"
    }
  }
];
