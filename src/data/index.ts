export const clubs = [
  { name: "Muslim Students' Association", category: "Faith", members: 312, emoji: "🕌" },
  { name: "Off-Campus University Students", category: "Community", members: 248, emoji: "🏠" },
  { name: "Girl Talk Guelph", category: "Health", members: 187, emoji: "💬" },
  { name: "Gryphon Racing", category: "Engineering", members: 96, emoji: "🏎️" },
  { name: "The Wildlife Club", category: "Academic", members: 143, emoji: "🦁" },
  { name: "Guelph Coding Society", category: "Academic", members: 204, emoji: "💻" },
  { name: "Guelph Debate Club", category: "Academic", members: 118, emoji: "🎤" },
  { name: "International Students Club", category: "Cultural", members: 389, emoji: "🌍" },
  { name: "Guelph Women in STEM", category: "Academic", members: 167, emoji: "🔬" },
  { name: "Guelph Fitness & Wellness", category: "Athletic", members: 221, emoji: "💪" },
];

export const categories = [
  "Academic", "Athletic", "Cultural", "Engineering",
  "Faith", "Health", "Community", "Arts", "Social"
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "President, Guelph Coding Society",
    avatar: "PS",
    avatarColor: "#C8102E",
    quote: "Before GCC, we were juggling 4 different apps just to run our club. Now everything is in one place — announcements, tasks, events. Our exec team actually shows up prepared to meetings now.",
    stats: "84% reduction in missed tasks",
  },
  {
    name: "James Okafor",
    role: "VP Communications, MSA Guelph",
    avatar: "JO",
    avatarColor: "#D4A017",
    quote: "The member directory alone was worth it. We went from 'does anyone know who signed up?' to having a real database with roles and contact info. The channel system keeps our general and exec convos separate.",
    stats: "3x faster event planning",
  },
  {
    name: "Anya Lee",
    role: "Events Coordinator, Girl Talk Guelph",
    avatar: "AL",
    avatarColor: "#4ADE80",
    quote: "I used to dread planning events because of the coordination overhead. With the event calendar and RSVPs built in, I can see exactly who's coming and send reminders in one click. GCC is genuinely a game changer.",
    stats: "2.4x higher event attendance",
  },
];

export const features = [
  {
    icon: "MessageSquare",
    title: "Team Channels",
    description: "Organized conversations by topic — #general, #exec, #events, #announcements. No more buried messages in group chats.",
    color: "red",
    mockType: "chat",
  },
  {
    icon: "CheckSquare",
    title: "Task Tracker",
    description: "Assign tasks, set deadlines, track progress. Kanban boards built for club executives who actually get things done.",
    color: "gold",
    mockType: "tasks",
  },
  {
    icon: "Calendar",
    title: "Event Calendar",
    description: "RSVP management, reminders, and venue details — all in one shareable calendar your whole club can see.",
    color: "blue",
    mockType: "calendar",
  },
  {
    icon: "Users",
    title: "Member Directory",
    description: "Know exactly who's in your club, their roles, and how to reach them. No more lost email threads.",
    color: "green",
    mockType: "directory",
  },
  {
    icon: "Layers",
    title: "Multi-Club Support",
    description: "Belong to 3 clubs? Switch between them instantly. One account, every club, zero confusion.",
    color: "purple",
    mockType: "multi",
  },
  {
    icon: "BarChart2",
    title: "Admin Dashboard",
    description: "Track membership growth, engagement metrics, and event attendance. Make data-driven decisions for your club.",
    color: "orange",
    mockType: "admin",
  },
];

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for small clubs just getting started.",
    badge: null,
    features: [
      "Up to 30 members",
      "3 channels",
      "Basic task tracker",
      "Event calendar",
      "Member directory",
      "Mobile app access",
    ],
    cta: "Start for Free",
    ctaVariant: "ghost" as const,
    featured: false,
  },
  {
    name: "Club Pro",
    price: "$9",
    period: "per month",
    description: "For growing clubs that need more power.",
    badge: "Most Popular",
    features: [
      "Unlimited members",
      "Unlimited channels",
      "Advanced task management",
      "RSVP & event management",
      "Custom member roles",
      "Analytics dashboard",
      "Priority support",
      "@uoguelph.ca verification",
    ],
    cta: "Start Free Trial",
    ctaVariant: "red" as const,
    featured: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "contact us",
    description: "For the Student Association or multiple clubs at scale.",
    badge: null,
    features: [
      "All Pro features",
      "Campus-wide deployment",
      "SSO integration",
      "Custom branding",
      "Dedicated account manager",
      "SLA guarantees",
      "Data export & compliance",
    ],
    cta: "Contact Us",
    ctaVariant: "gold" as const,
    featured: false,
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Create Your Club",
    description: "Sign up with your @uoguelph.ca email and create your club profile in under 2 minutes.",
    icon: "Plus",
  },
  {
    step: "02",
    title: "Invite Your Exec",
    description: "Send invite links to your executive team. They join instantly and get their roles assigned.",
    icon: "UserPlus",
  },
  {
    step: "03",
    title: "Set Up Channels",
    description: "Create channels for different topics. Announcements, events, committees — you decide the structure.",
    icon: "MessageSquare",
  },
  {
    step: "04",
    title: "Open to Members",
    description: "Share your club link. Members join, browse events, and stay in the loop — all in one place.",
    icon: "Globe",
  },
];

export const problems = [
  {
    icon: "MessageCircle",
    title: "Communication Is Scattered",
    description: "Your club runs across iMessage, WhatsApp, Instagram DMs, and email blasts. Important updates get buried. New members miss everything.",
    pain: "Average 3.7 apps per club",
  },
  {
    icon: "ClipboardList",
    title: "Tasks Fall Through Cracks",
    description: "Someone was supposed to book the venue. Someone else forgot to send the sponsorship email. Nobody is sure who owns what.",
    pain: "64% of exec tasks go untracked",
  },
  {
    icon: "Calendar",
    title: "Events Are Stressful to Plan",
    description: "Google Forms for RSVPs, a separate calendar link, reminder emails you send manually. There's no single source of truth.",
    pain: "2.3 hrs wasted per event",
  },
];

export const navLinks = [
  { label: "Features", href: "/#/features" },
  { label: "How It Works", href: "/#/how-it-works" },
  { label: "Pricing", href: "/#/pricing" },
  { label: "For Clubs", href: "/#/for-clubs" },
  { label: "About", href: "/#/about" },
];
