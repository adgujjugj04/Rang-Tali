export interface Artist {
  id: string;
  name: string;
  role: 'Master Choreographer' | 'Dodhiya Specialist' | 'Folk Dance Trainer';
  description: string;
  image: string;
  tags: string[];
  experience: string;
}

export interface Batch {
  id: string;
  name: string;
  timing: string;
  description: string;
  price: string;
  recommended?: boolean;
  category: 'Beginner' | 'Intermediate' | 'Advanced' | 'Girls Only' | 'Custom / Weekend';
  spotsLeft: number;
  instructor: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  interest: 'Class Booking' | 'Girls-Only Session' | 'Special Workshop' | 'General Inquiry';
  message: string;
  timestamp: string;
  status: 'Received' | 'In Progress' | 'Contacted';
  batchId?: string;
  userPhoto?: string; // base64 preview for instant high-fidelity ID pass rendering
  experienceLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Class Practice' | 'Traditional Styles' | 'Choreography' | 'Festive Showcase';
  image: string;
}

