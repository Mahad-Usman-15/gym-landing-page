export interface Coach {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string;
  specialization: string;
  image: string;
  bio?: string;
  availableDays?: string[];
  instagram?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  intensity: string;
  target: string;
  benefits: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tierSubtitle: string;
  pricePKR: number;
  period: string;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  ctaText: string;
  billingCycles?: {
    monthly: number;
    quarterly: number;
    annual: number;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  ageGroup: string;
  fitnessGoal: string;
  preferredLocation: string;
  preferredDate?: string;
  preferredTime?: string;
  selectedCoach?: string;
}
