import { Project, ExperienceItem, ToolItem } from './types';

export const portfolioOwner = {
  name: "Rohit Choudhary",
  title: "UX/UI Designer",
  bio: "Creating intuitive, visually engaging experiences that solve user problems, enhance usability, and align design decisions with business goals effectively.",
  detailedBio: "I’m a creative UX/UI Designer with 1+ years of experience building digital products, specializing in user-centered design that balances aesthetics, usability, and functionality to create seamless and engaging user experiences.",
  journey: "My journey started with curiosity about how websites look and work. As a beginner, I now help startups and businesses turn ideas into simple, user-friendly, and thoughtful design solutions.",
  metrics: [
    { value: "1+", label: "Years Exp." },
    { value: "10+", label: "Projects" },
    { value: "8+", label: "Happy Clients" }
  ],
  socials: {
    behance: "https://www.behance.net/rohitchoudhary2226", // Primary Behance profile entry point
    linkedin: "https://www.linkedin.com/in/rohit-choudhary-ux/", // Placeholder or real
    github: "https://github.com/rohitjat2666-a11y", // GitHub profile link
    email: "rohitjat2666@gmail.com",
    phone: "+91 9664003112",
    location: "Jaipur, India",
    university: "VGU, Jaipur (Vivekananda Global University)"
  }
};

export const services = [
  {
    id: "serv-1",
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces",
    icon: "Layout"
  },
  {
    id: "serv-2",
    title: "Prototyping",
    description: "Creating interactive prototypes for testing and feedback",
    icon: "Zap"
  },
  {
    id: "serv-3",
    title: "Design Systems",
    description: "Building consistent components and reusable design patterns",
    icon: "Cpu"
  },
  {
    id: "serv-4",
    title: "Responsive Design",
    description: "Designing seamless experiences across mobile, tablet, and desktop",
    icon: "MonitorPhone"
  }
];

export const toolsList: ToolItem[] = [
  { name: "Figma", category: "design", color: "#F24E1E", iconName: "figma" },
  { name: "Framer", category: "prototyping", color: "#0055FF", iconName: "framer" },
  { name: "Illustrator", category: "design", color: "#FF9A00", iconName: "adobe-ai" },
  { name: "Photoshop", category: "design", color: "#31A8FF", iconName: "adobe-ps" },
  { name: "InDesign", category: "design", color: "#FF3366", iconName: "adobe-id" },
  { name: "After Effects", category: "prototyping", color: "#9999FF", iconName: "adobe-ae" },
  { name: "PowerPoint", category: "productivity", color: "#D83B01", iconName: "powerpoint" },
  { name: "Canva", category: "productivity", color: "#00C4CC", iconName: "canva" },
  { name: "Word", category: "productivity", color: "#2B579A", iconName: "word" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2026 - Present",
    role: "B.Des. UX/UI Student",
    company: "VGU, Jaipur",
    location: "Jaipur, India",
    description: "Currently in the 4th semester, second year, with a focus on UX, communication design, and user-centered problem solving.",
    type: "experience"
  },
  {
    id: "exp-2",
    period: "2025",
    role: "UX Design Intern",
    company: "Codec Technologies",
    location: "Remote / Hybrid",
    description: "Worked on UI design, wireframing, and design support for digital products while collaborating with the development team.",
    type: "experience"
  },
  {
    id: "exp-3",
    period: "2024",
    role: "B.Des. 1st Year Student",
    company: "VGU, Jaipur",
    location: "Jaipur, India",
    description: "Built a strong foundation in design principles, visual communication, and basic UX concepts. Explored typography, color theory, and user-centered thinking through academic projects.",
    type: "experience"
  },
  {
    id: "edu-1",
    period: "2024 - 2028",
    role: "B.Des. in User Experience and Communication",
    company: "Vivekananda Global University",
    location: "Jaipur, India",
    description: "Specialized in Human-Computer Interaction. Led the college design club and won multiple hackathons. Building clean spatial UI/UX designs and graphic assets.",
    type: "education"
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-vitaflow",
    title: "VitaFlow App",
    description: "The VitaFlow App was designed to bridge the gap between blood donors and seekers with a fast, human-centered mobile solution.",
    longDescription: "A comprehensive digital case study designed to reduce emergency medical delays. VitaFlow allows seekers to find matching donor credentials locally with transparent real-time request tracking, medical checks checklist, and visual analytics of surrounding bloodbanks. Focus was laid on red alert visual prioritization and high-accessibility forms on standard mobile viewports.",
    image: "vitaflow",
    behanceUrl: "https://www.behance.net/gallery/246522713/Vita-Flow-Blood-Donation-App-Case-Study",
    tags: ["Figma", "Survey form", "Keynote", "Research"],
    category: "App",
    tools: ["Figma", "Research", "Keynote", "Survey form"],
    deliverables: ["User Persona Maps", "Wireframe Workflows", "High Fidelity UI Components", "Interactive Figma Prototype"],
    metrics: "UX flows reduced navigation friction by 32% during stress testing"
  },
  {
    id: "proj-mealmitra",
    title: "MealMitra Application",
    description: "MealMitra delivers convenient, healthy, home-cooked meals by connecting customers with skilled local home cooks everywhere.",
    longDescription: "Designed for busy students and professionals away from home, MealMitra presents an authentic, healthy alternative to commercial fast food. The design centers on warmth, culinary heritage, and security with comprehensive visual stories of home kitchens, nutritional cards, order scheduling, and feedback workflows styled dynamically.",
    image: "mealmitra",
    behanceUrl: "https://www.behance.net/gallery/246526175/MealMitra-Home-Cooked-Meal-Delivery-AppCase-Study",
    tags: ["Research", "Photoshop", "Figma", "Food"],
    category: "App",
    tools: ["Figma", "Photoshop", "User Research", "Food Journey Mapping"],
    deliverables: ["Information Architecture", "Kitchen Storytelling Grid", "Mobile App UI Layout", "Icon Design System"],
    metrics: "Achieved a 94% culinary authenticity visual rating in user surveys"
  },
  {
    id: "proj-narrativeposters",
    title: "Visual Narrative Posters",
    description: "Poster design combines compelling graphics, typography, and color to clearly communicate a powerful, specific message.",
    longDescription: "A curated range of high-impact visual posters combining structural typography with vibrant digital artwork. Each poster addresses a core message: navigating digital fatigue, user-interface mental-models, and spatial design philosophy. Special attention was given to grid alignment, complementary chromatic pairings, and clean focal ratios.",
    image: "narrative",
    behanceUrl: "https://www.behance.net/gallery/246521593/Visual-Narrative-Key-Art-DesignPoster-Design",
    tags: ["Photoshop", "Illustrator", "PowerPoint"],
    category: "Graphics",
    tools: ["Photoshop", "Illustrator", "PowerPoint"],
    deliverables: ["Vector Illustrations", "Typography Hierarchy Layout", "Color Exploration Sheets"],
    metrics: "Exhibited in VGU Visual Arts Meet with notable creative mentions"
  }
];
