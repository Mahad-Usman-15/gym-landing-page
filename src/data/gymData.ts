import { Coach, Feature, Program, PricingPlan, FaqItem } from '../types';

export const CLUB_STATS = [
  { label: 'MEMBERS TRANSFORMED', value: '1000+', icon: 'check-circle-2' },
  { label: 'CERTIFIED TRAINERS', value: 'CERTIFIED TRAINERS', icon: 'award' },
  { label: 'MEMBER RATING', value: '4.9 MEMBER RATING', icon: 'star' },
];

export const STANDARD_FEATURES: Feature[] = [
  {
    id: 'expert-trainers',
    title: 'EXPERT TRAINERS',
    description: 'Internationally certified professionals obsessed with your progress and safety.',
    iconName: 'dumbbell',
  },
  {
    id: 'personalized-plans',
    title: 'PERSONALIZED PLANS',
    description: 'Cookie-cutter programs fail. We build protocols based on your specific biomechanics.',
    iconName: 'clipboard-list',
  },
  {
    id: 'modern-equipment',
    title: 'MODERN EQUIPMENT',
    description: 'State-of-the-art functional and isolation machinery imported for peak performance.',
    iconName: 'cpu',
  },
  {
    id: 'support-system',
    title: 'SUPPORT SYSTEM',
    description: 'A community of high-achievers holding you accountable every step of the way.',
    iconName: 'users',
  },
];

export const GYM_PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'STRENGTH TRAINING',
    subtitle: 'Compound power & barbell biomechanics',
    description: 'Master the core compound lifts—squat, bench press, deadlift, and overhead press—with individualized biomechanical bar-path analysis and progressive overload cycles.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    duration: '60 Min Sessions',
    intensity: 'High / Heavy',
    target: 'Max Strength & Bone Density',
    benefits: ['CNS conditioning', 'Tendon & joint resilience', 'Linear periodization'],
  },
  {
    id: 'fat-burn-workout',
    title: 'FAT BURN WORKOUT',
    subtitle: 'Metabolic conditioning & EPOC burn',
    description: 'High-density anaerobic threshold protocols and kettlebell complexes engineered to trigger maximum post-exercise oxygen consumption and rapid body recomposition.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    duration: '45 Min High-Paced',
    intensity: 'Maximum Output',
    target: 'Fat Loss & Cardiovascular Endurance',
    benefits: ['Accelerated lipolysis', 'VO2 max enhancement', 'Zero muscle wasting'],
  },
  {
    id: 'muscle-building',
    title: 'MUSCLE BUILDING',
    subtitle: 'Hypertrophy & isolation mastery',
    description: 'Targeted muscle hypertrophy utilizing imported pin-loaded machines, cable crossover stations, and tempo-controlled eccentric tension to optimize muscular symmetry.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    duration: '60 Min Focused',
    intensity: 'Moderate-High Volume',
    target: 'Aesthetic Symmetry & Muscle Mass',
    benefits: ['Volume landmark tracking', 'Optimized recovery curves', 'Targeted pump mechanics'],
  },
];

export const COACHES: Coach[] = [
  {
    id: 'asad-malik',
    name: 'ASAD MALIK',
    role: 'Head Coach',
    experience: 'Head Coach · 12+ Years',
    certifications: 'ACE & NASM Certified',
    specialization: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80',
    bio: 'Former national athlete with over a decade designing elite conditioning regimens for competitive powerlifters and corporate executives in Karachi.',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    instagram: '@asadmalik_kc',
  },
  {
    id: 'sana-khan',
    name: 'SANA KHAN',
    role: 'Senior Master Coach',
    experience: '8+ Years Experience',
    certifications: 'ISSA Certified Trainer',
    specialization: 'Female Transformation Specialist',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80',
    bio: 'Pioneer in female strength conditioning in Pakistan, specializing in postpartum recovery, PCOS hormonal management, and functional lean hypertrophy.',
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat'],
    instagram: '@sanakhan_fitness',
  },
  {
    id: 'zubair-ahmed',
    name: 'ZUBAIR AHMED',
    role: 'Performance Coach',
    experience: '6+ Years Experience',
    certifications: 'Level 3 PT Certified',
    specialization: 'Hypertrophy & Fat Loss',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    bio: 'Specialist in metabolic conditioning, high-volume bodybuilding splits, and sustainable nutritional remodeling for drastic body transformations.',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
    instagram: '@zubair_fitpak',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tierSubtitle: 'SELF-GUIDED',
    pricePKR: 15000,
    period: '/mo',
    ctaText: 'SELECT PLAN',
    features: [
      { text: 'Full Gym Access', included: true },
      { text: 'Locker Rooms & Sauna', included: true },
      { text: 'Free Group Classes (2/wk)', included: true },
      { text: 'Personal Trainer Sessions', included: false },
    ],
    billingCycles: {
      monthly: 15000,
      quarterly: 40000,
      annual: 144000,
    },
  },
  {
    id: 'transformation',
    name: 'TRANSFORMATION',
    badge: 'MOST POPULAR',
    tierSubtitle: 'GUIDED RESULTS',
    pricePKR: 35000,
    period: '/mo',
    popular: true,
    ctaText: 'JOIN PROGRAM',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: '8 PT Sessions / Month', included: true },
      { text: 'Custom Nutrition Plan', included: true },
      { text: 'Weekly Check-ins', included: true },
    ],
    billingCycles: {
      monthly: 35000,
      quarterly: 95000,
      annual: 340000,
    },
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tierSubtitle: 'ELITE TIER',
    pricePKR: 60000,
    period: '/mo',
    ctaText: 'SELECT PLAN',
    features: [
      { text: 'Unlimited Gym Access', included: true },
      { text: 'Unlimited PT Sessions', included: true },
      { text: 'Daily Macro Adjustments', included: true },
      { text: 'Priority Facility Booking', included: true },
    ],
    billingCycles: {
      monthly: 60000,
      quarterly: 165000,
      annual: 580000,
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'IS THIS GYM SUITABLE FOR BEGINNERS?',
    answer: 'Absolutely. Every new member starts with a mandatory fitness assessment and a custom orientation to ensure safety and confidence.',
  },
  {
    id: 'faq-2',
    question: 'DO YOU PROVIDE DIET GUIDANCE?',
    answer: 'Yes. Our Transformation and Premium tiers include custom nutrition plans and weekly macro adjustments tailored to your results.',
  },
  {
    id: 'faq-3',
    question: 'WHAT HAPPENS AFTER BOOKING?',
    answer: 'A coach will reach out via WhatsApp or call within 24 hours to confirm your time slot and provide pre-visit instructions.',
  },
  {
    id: 'faq-4',
    question: 'CAN I VISIT BEFORE JOINING?',
    answer: "Your first visit is a free assessment. You'll get to experience the facility, meet our staff, and see the environment before making any commitment.",
  },
  {
    id: 'faq-5',
    question: 'DO YOU HAVE FEMALE-FRIENDLY OPTIONS?',
    answer: 'Yes, we have dedicated ladies-only hours and female personal trainers to ensure a comfortable and private training environment.',
  },
];

export const LOCATIONS = [
  { id: 'dha6', name: 'DHA Phase 6 (Main Flagship)', address: 'Plot 42-C, Khayaban-e-Shahbaz, DHA Phase 6, Karachi', hours: '06:00 AM – 11:30 PM' },
  { id: 'clifton4', name: 'Clifton Block 4', address: 'Sea View Road, Block 4 Clifton, Karachi', hours: '06:00 AM – 11:00 PM' },
  { id: 'tipu', name: 'Tipu Sultan Road', address: 'Main Tipu Sultan Rd, KDA Scheme 1, Karachi', hours: '06:30 AM – 10:30 PM' },
  { id: 'gulshan', name: 'Gulshan-e-Iqbal', address: 'Block 6, Main University Road, Karachi', hours: '06:00 AM – 11:00 PM' },
];

export const FACILITY_AMENITIES = [
  {
    title: 'Custom Biomechanics Zone',
    description: 'Prime Fitness and Eleiko calibrated power racks, Olympic barbells, and dumbbell runs up to 60kg.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Infrared Recovery & Cedar Sauna',
    description: 'Deep heat muscle decompression, active lymphatic drainage, and post-lift thermal recovery.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Dedicated Ladies Performance Wing',
    description: 'Private, fully-equipped gym floor with female coaches, dedicated locker suites, and specialized gear.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Metabolic & Turf Track',
    description: 'Indoor sprint turf, Rogue sleds, assault air runners, Concept2 rowers, and SkiErgs.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=700&q=80',
  },
];
