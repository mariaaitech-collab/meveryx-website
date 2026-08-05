/**
 * Global Site Configuration
 * SEO Optimized Version
 */

export const site = {
  // Basic Information
  name: "Meveryx",

  tagline: "Innovation Meets Possibility",

  title:
    "Meveryx | Web Development, Mobile Apps, AI & Digital Marketing",

  description:
    "Meveryx is a software company in Pakistan providing professional Web Development, Mobile App Development, UI UX Design, Digital Marketing, SEO, AI Automation and Custom Software Solutions for startups and businesses.",

  keywords: [
    "Meveryx",
    "Software Company Pakistan",
    "Software House Peshawar",
    "Web Development",
    "Website Development",
    "React Developer",
    "Next.js",
    "Frontend Development",
    "Backend Development",
    "FastAPI",
    "Node.js",
    "UI UX Design",
    "Graphic Design",
    "Mobile App Development",
    "Android App Development",
    "iOS App Development",
    "SEO Services",
    "Digital Marketing",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "AI Automation",
    "Business Website",
    "Ecommerce Website",
    "Custom Software",
  ],

  url: "https://meveryx.vercel.app",

  email: "meveryx@gmail.com",

  phone: "+92 340 1217454",

  whatsapp: "923401217454",

  address: "Peshawar, Pakistan",

  city: "Peshawar",

  country: "Pakistan",

  hours: "Monday - Saturday | 9:00 AM - 6:00 PM",

  language: "en",

  locale: "en_PK",

  mapEmbedUrl:
    "https://www.google.com/maps?q=Peshawar,+Pakistan&output=embed",

  twitter: "@meveryx",

  facebook: "",

  instagram: "",

  linkedin: "",

  github: "",

  logo: "/meveryx-logo.png",

  favicon: "/favicon.ico",

  ogImage: "/meveryx-icon.png",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const mobileNavLinks = [
  ...navLinks,
  { label: "FAQ", href: "/faq" },
] as const;

export const footerCompanyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Book Consultation", href: "/book-consultation" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;