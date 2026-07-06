import { Artist, Batch, Testimonial, GalleryItem } from './types';

export const HERO_CONTENT = {
  headline: "Master The Art Of Garba With Rang Taali Academy",
  subheadline: "Join Gujarat’s premier training academy to learn traditional footwork, elegant styling, and high-energy choreography from state-champion instructors.",
  bgImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1600",
  trustBadges: [
    { text: "6 Daily Batches", icon: "Clock" },
    { text: "Girls-Only Slots", icon: "Users" },
    { text: "Air-Conditioned", icon: "Sparkles" },
    { text: "Live Dhol Training", icon: "Music" },
    { text: "Beginner to Pro", icon: "ShieldCheck" }
  ]
};

export const ABOUT_CONTENT = {
  title: "Why Learn With Rang Taali Academy?",
  description: "Rang Taali Academy is Gujarat’s ultimate Garba and Raas learning ecosystem. We don’t just teach dance steps; we build your confidence, posture, and rhythm to help you lead any circle. From absolute beginners starting with basic hand-claps to advanced performers mastering rapid spins and classical Dodhiya, we provide structured, high-energy sessions in premium, modern dance studios.",
  bullets: [
    "Six different batches between 6:00 PM and 10:00 PM to match your work schedule.",
    "Comfortable, dedicated Girls-Only sessions led entirely by senior female choreographers.",
    "High-fidelity dhol acoustic sound systems to practice with real-time festival rhythms.",
    "Wooden-sprung flooring to minimize joint fatigue during high-intensity Garba rounds."
  ],
  image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800",
  ctaText: "Explore Curriculum"
};

export const WHY_SPECIAL_CARDS = [
  {
    id: "special-1",
    title: "Elite Choreographers",
    description: "Learn from award-winning state-champion instructors with decades of combined folk dance performance experience.",
    icon: "Award"
  },
  {
    id: "special-2",
    title: "6 PM - 10 PM Batches",
    description: "Flexible hourly schedules designed specifically for working professionals, students, and active families.",
    icon: "Clock"
  },
  {
    id: "special-3",
    title: "Girls-Only Sessions",
    description: "Comfortable, highly energetic women-only batches led by elite female choreographers to build confidence.",
    icon: "Users2"
  },
  {
    id: "special-4",
    title: "Traditional Footwork",
    description: "In-depth training in traditional 2-Taali, 3-Taali, classical Dodhiya, Tippani, and ancient Raas loops.",
    icon: "Sparkles"
  },
  {
    id: "special-5",
    title: "Live Dhol Sessions",
    description: "Practice your steps to the pulse of live, authentic Gujarati dhol beats to experience authentic festival speed.",
    icon: "Music4"
  },
  {
    id: "special-6",
    title: "Student Showcase",
    description: "Participate in academy-exclusive showcase rounds, traditional dressing contests, and professional video shoots.",
    icon: "Video"
  }
];

export const ARTISTS_DATA: Artist[] = [
  {
    id: "artist-1",
    name: "Radhika Vyas",
    role: "Master Choreographer",
    description: "Winner of multiple state-level Garba trophies, Radhika specializes in traditional postures, grace, and coordinating the elite Girls-Only batches.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
    tags: ["Grace Specialist", "Traditional Expert", "Girls Batch Lead"],
    experience: "10+ Years Choreographing"
  },
  {
    id: "artist-2",
    name: "Hardik Patel",
    role: "Dodhiya Specialist",
    description: "Known across Gujarat for his lightning-fast footwork and high-energy spin variations, Hardik leads our advanced choreography and style batches.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
    tags: ["Speed King", "Dodhiya Master", "Energy Booster"],
    experience: "800+ Students Trained"
  },
  {
    id: "artist-3",
    name: "Surat Raas Dance Collective",
    role: "Folk Dance Trainer",
    description: "A professional troupe of award-winning dancers teaching authentic group synchronizations, dandiya tricks, and specialized performance patterns.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600",
    tags: ["Group Synchrony", "Dandiya Experts", "Showmanship"],
    experience: "National Folk Champions"
  }
];

export const METHODOLOGY_CARDS = [
  {
    id: "method-1",
    title: "Step-by-Step Breakdown",
    description: "We slow down complex movements into single-beat drills so you learn with high accuracy before picking up speed.",
    icon: "Layers"
  },
  {
    id: "method-2",
    title: "Posture & Body Control",
    description: "Continuous guidance on hand alignment, bent-knee posture, head tilts, and spin control to prevent dizziness.",
    icon: "Sparkles"
  },
  {
    id: "method-3",
    title: "Rhythm & Beat Practice",
    description: "Learn to recognize different dhol time-signatures so you can adapt your steps to any beat, slow or fast.",
    icon: "Music"
  },
  {
    id: "method-4",
    title: "Video Progress Analysis",
    description: "Review optional weekly recorded video check-ins with instructors to fine-tune your styling and correct minor errors.",
    icon: "Youtube"
  },
  {
    id: "method-5",
    title: "Synchronized Group Drills",
    description: "Practice dancing inside circles of varying sizes to master spacing, entry/exit styles, and collaborative routines.",
    icon: "Users"
  },
  {
    id: "method-6",
    title: "Stamina & Endurance Building",
    description: "Integrated endurance training so you can comfortably dance non-stop throughout the upcoming festival season.",
    icon: "TrendingUp"
  }
];

export const CLASS_BENEFITS = [
  "Comprehensive step-by-step curriculum for all skill levels",
  "Expert feedback from state-champion certified choreographers",
  "Spacious air-conditioned premium dance floors with high-impact wooden-sprung structure",
  "Comfortable and private Girls-Only batches with dedicated female leads",
  "Live dhol players during advanced sessions to practice with real rhythms",
  "Complimentary video shoots and digital portfolio of your choreography showcase",
  "Priority entry and special pricing on local community Garba festival bookings"
];

export const BATCH_DATA: Batch[] = [
  {
    id: "batch-beginners",
    name: "Beginners Essential Batch",
    timing: "6:00 PM - 7:00 PM (Mon - Fri)",
    description: "Perfect for absolute beginners. We build your foundation, posture, and teach basic 2-Taali and 3-Taali with gentle rhythms.",
    price: "₹2,500 / month",
    category: "Beginner",
    spotsLeft: 8,
    instructor: "Radhika Vyas",
    benefits: [
      "2-Taali & 3-Taali Basics",
      "Hand clap & foot timing drills",
      "Rhythm speed adjustment training",
      "Comfortable slower tempo pace"
    ]
  },
  {
    id: "batch-girls",
    name: "Girls-Only Special Session",
    timing: "6:30 PM - 7:30 PM (Mon - Fri)",
    description: "Exclusive women-only batch focusing on grace, circular coordination, and styling. Led entirely by senior female choreographers in a secure setting.",
    price: "₹3,000 / month",
    recommended: true,
    category: "Girls Only",
    spotsLeft: 5,
    instructor: "Radhika Vyas & Anjali Dave",
    benefits: [
      "100% Women-Only Environment",
      "Focus on graceful body loops & styling",
      "Advanced circular synchronizations",
      "Dandiya techniques included"
    ]
  },
  {
    id: "batch-dodhiya",
    name: "Traditional Dodhiya Batch",
    timing: "7:00 PM - 8:00 PM (Mon - Fri)",
    description: "Intermediate level training. Master the famous traditional Dodhiya variations (6, 12, 18 steps) and circular group formations.",
    price: "₹2,800 / month",
    category: "Intermediate",
    spotsLeft: 12,
    instructor: "Hardik Patel",
    benefits: [
      "Classic Dodhiya variations",
      "Tippani step integrations",
      "Inward & outward loop control",
      "Group coordination practice"
    ]
  },
  {
    id: "batch-fitness",
    name: "High-Energy Garba Fitness",
    timing: "8:00 PM - 9:00 PM (Mon - Fri)",
    description: "Cardio-intensive fast-paced batch designed to build extreme physical stamina, rapid footwork, and core endurance for Navratri.",
    price: "₹2,500 / month",
    category: "Advanced",
    spotsLeft: 15,
    instructor: "Hardik Patel & Team",
    benefits: [
      "High-tempo cardio choreography",
      "Stamina & agility builders",
      "Rapid spin control drill",
      "Calorie-burning rhythmic routine"
    ]
  },
  {
    id: "batch-advanced",
    name: "Advanced Style & Choreography",
    timing: "9:00 PM - 10:00 PM (Mon - Fri)",
    description: "For experienced dancers. Master complex fusion styles, rapid multiple spins, modern styling, and specialized solo showcase routines.",
    price: "₹3,500 / month",
    category: "Advanced",
    spotsLeft: 6,
    instructor: "Hardik Patel",
    benefits: [
      "Rapid triple-spins mastery",
      "Fusion Garba choreographies",
      "Solo showmanship training",
      "Video portfolio recording session"
    ]
  },
  {
    id: "batch-weekend",
    name: "Weekend Couples & Private Workshop",
    timing: "Saturdays & Sundays (7:30 PM - 9:30 PM)",
    description: "Unspecified specialized customized batch. Perfect for couples, families, private friend groups, or children seeking custom choreographies.",
    price: "₹4,000 / couple",
    category: "Custom / Weekend",
    spotsLeft: 4,
    instructor: "Radhika Vyas & Hardik Patel",
    benefits: [
      "Customized private pace & style",
      "Ideal for busy working professionals",
      "Couple-specific coordination loops",
      "Family & kids friendly choreography"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Intensive 3-Taali Practice Session",
    category: "Class Practice",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gal-2",
    title: "Girls-Only Special Batch Synergy",
    category: "Choreography",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gal-3",
    title: "Dandiya Spinning Masterclass",
    category: "Traditional Styles",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gal-4",
    title: "End of Month Student Showcase",
    category: "Festive Showcase",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gal-5",
    title: "Traditional Attire Practice Day",
    category: "Traditional Styles",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gal-6",
    title: "Dodhiya Coordination Footwork Drill",
    category: "Class Practice",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Krupa Patel",
    role: "IT Professional (Girls-Only Batch)",
    review: "I was an absolute beginner and terrified of joining massive festival circles. The Girls-Only batch at Rang Taali gave me such a comfortable, supportive environment. Now I can dance confidently for hours!",
    rating: 5,
    avatar: "KP"
  },
  {
    id: "test-2",
    name: "Rohan Shah",
    role: "Regular Student (Dodhiya Batch)",
    review: "Hardik sir’s Dodhiya tutorials are incredible. He breaks down the complex 12-step and 18-step traditional routines so cleanly. The wooden studio flooring is also super friendly on the knees!",
    rating: 5,
    avatar: "RS"
  },
  {
    id: "test-3",
    name: "Ami & Jignesh",
    role: "Weekend Couples Batch",
    review: "The custom couples' session was exactly what we needed. We learned beautiful synchronized choreography that we cannot wait to show off this Navratri. Highly recommended for couples!",
    rating: 5,
    avatar: "AJ"
  }
];
