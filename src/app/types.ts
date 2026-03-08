export type LocationType = 'hotel' | 'restaurant' | 'attraction';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  coordinates: [number, number]; // [lat, lng]
  hasQuiz: boolean;
  description: string;
  address: string;
  phone: string;
  videoUrl?: string;
  // For restaurants
  hours?: string;
  menuUrl?: string;
  websiteUrl?: string;
  // For hotels
  bookingUrl?: string;
  lowSeasonPrice?: string;
  highSeasonPrice?: string;
}

export interface QuizQuestion {
  locationId: string;
  question: string;
  answer: string;
}

export interface UserProgress {
  stamps: string[]; // Array of location IDs where quiz was completed
}
