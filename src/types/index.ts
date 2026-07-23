export type PropertyType = 
  | "LUXURY_VILLA"
  | "INDEPENDENT_HOUSE"
  | "PENTHOUSE"
  | "APARTMENT"
  | "COMMERCIAL_SHOP"
  | "OFFICE_SPACE"
  | "SHOWROOM"
  | "WAREHOUSE"
  | "FARM_HOUSE"
  | "PLOT";

export type PropertyStatus = "FOR_SALE" | "FOR_RENT" | "PENDING" | "SOLD" | "RENTED";

export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  location: string;
  address: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  pricePerSqFt?: number;
  propertyType: PropertyType;
  status: PropertyStatus;
  yearBuilt?: number;
  garageSpaces?: number;
  isFeatured?: boolean;
  isPremium?: boolean;
  isSold?: boolean;
  images: string[];
  videoUrl?: string;
  virtualTour360?: string;
  floorPlanUrl?: string;
  amenities: string[];
  facing?: string;
  agent: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    phone: string;
    email: string;
  };
  nearbyPlaces?: {
    name: string;
    distance: string;
    category: "School" | "Hospital" | "Airport" | "Mall" | "Metro" | "Dining";
  }[];
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  location: string;
  city: string;
  developer: string;
  completionYear: number;
  status: "UPCOMING" | "UNDER_CONSTRUCTION" | "COMPLETED";
  coverImage: string;
  gallery: string[];
  startingPrice: number;
  totalUnits: number;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  phone: string;
  email: string;
  whatsapp: string;
  bio: string;
  experienceYrs: number;
  rating: number;
  totalListings: number;
  languages: string[];
  specialties: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
}

export interface PropertyFilterState {
  searchQuery: string;
  city: string;
  propertyType: string;
  status: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  bathrooms: string;
  minArea: number;
  maxArea: number;
  sortBy: "price-asc" | "price-desc" | "newest" | "featured";
  amenities: string[];
}
