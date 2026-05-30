export interface ServiceItem {
  name: string;
  description: string;
  duration?: string;
  price?: string;
  features?: string[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  date: string;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: "hair" | "beauty" | "grooming" | "all";
  alt: string;
  title: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
