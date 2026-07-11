export const clubTypes = [
  { name: "Academic clubs", description: "Course-based, faculty, and interest groups focused on learning and skills." },
  { name: "Cultural clubs", description: "Communities that celebrate culture, language, faith, and identity." },
  { name: "Business clubs", description: "Entrepreneurship, finance, consulting, and professional development." },
  { name: "Creative clubs", description: "Arts, media, design, music, and performance groups." },
  { name: "Community clubs", description: "Service, advocacy, wellness, and campus community organizations." },
  { name: "Competitive teams", description: "Competitive academic, athletic, and project-based teams." },
];

export const categories = [
  "Academic", "Athletic", "Cultural", "Engineering",
  "Faith", "Health", "Community", "Arts", "Social"
];

export const learningPoints = [
  {
    title: "Discovery in one place",
    description: "Students want one place to find clubs, events, and roles.",
  },
  {
    title: "Operations without the scatter",
    description: "Club leaders want easier ways to manage members, events, and announcements.",
  },
  {
    title: "Trust through permissions",
    description: "Permissions and role-based access are important for trust.",
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
    description: "Assign tasks, set deadlines, track progress. Boards built for club executives who need clear ownership.",
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
    description: "Belong to multiple clubs? Switch between them in one account without mixing notifications or tasks.",
    color: "purple",
    mockType: "multi",
  },
  {
    icon: "BarChart2",
    title: "Admin Dashboard",
    description: "Track membership activity, event participation, and task progress from one club workspace overview.",
    color: "orange",
    mockType: "admin",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Join the testing group",
    description: "Share a bit about yourself — student or club leader — so we can invite you into early testing.",
    icon: "Plus",
  },
  {
    step: "02",
    title: "Get oriented",
    description: "We'll walk you through the product or give you guided access based on what you want to try.",
    icon: "UserPlus",
  },
  {
    step: "03",
    title: "Try real workflows",
    description: "Explore clubs and events as a student, or manage members, announcements, and tasks as a club leader.",
    icon: "MessageSquare",
  },
  {
    step: "04",
    title: "Share feedback",
    description: "Tell us what works and what doesn't. Early testing helps us improve before a wider rollout.",
    icon: "Globe",
  },
];

export const problems = [
  {
    icon: "MessageCircle",
    title: "Communication Is Scattered",
    description: "Your club runs across iMessage, WhatsApp, Instagram DMs, and email blasts. Important updates get buried. New members miss everything.",
  },
  {
    icon: "ClipboardList",
    title: "Tasks Fall Through Cracks",
    description: "Someone was supposed to book the venue. Someone else forgot to send the sponsorship email. Nobody is sure who owns what.",
  },
  {
    icon: "Calendar",
    title: "Events Are Stressful to Plan",
    description: "Google Forms for RSVPs, a separate calendar link, reminder emails you send manually. There's no single source of truth.",
  },
];

export const navLinks = [
  { label: "Features", href: "/#/features" },
  { label: "For Students", href: "/#/", hash: "for-students" },
  { label: "For Clubs", href: "/#/for-clubs" },
  { label: "Demo", href: "/#/", hash: "app-showcase" },
  { label: "About", href: "/#/about" },
];
