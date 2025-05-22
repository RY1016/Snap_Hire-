export interface Photographer {
  id: string;
  name: string;
  categories: string[];
  price: string;
  rating: number;
  reviewCount: number;
  profilePicture: string;
  thumbnailUrl: string;
  about: string;
  serviceArea: string;
  pricingTiers: PricingTier[];
  portfolioImages: string[];
  reviews: Review[];
  availability?: {
    availableDays: string[];
    preferredHours: {
      start: string;
      end: string;
    };
    bookedDates: string[];
  };
}

export interface PricingTier {
  name: string;
  description: string;
}

export interface Review {
  clientName: string;
  comment: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  photographerId: string;
  photographerName: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  package: string;
}

export interface CategoryStats {
  name: string;
  count: number;
  priceRange: string;
  popularTimes: string;
}