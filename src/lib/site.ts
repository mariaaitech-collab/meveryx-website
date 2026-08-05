/**
 * Global site configuration — single source of truth for nav, footer,
 * and metadata.
 */

export const site = {
  name: "Meveryx",
  tagline: "Innovation Meets Possibility",
  description:
    "A technology company in Peshawar, Pakistan helping businesses grow through custom software, design, AI automation, and digital marketing.",
  url: "https://meveryx.example.com", // TODO Phase 6: replace with real domain
  email: "meveryx@gmail.com", // Orders & support inbox
  // Display number. The footer strips non-digits for `tel:` links.
  phone: "+92 340 1217454",
  // WhatsApp chat number (country code + number, no +).
  whatsapp: "923401217454",
  address: "Peshawar, Pakistan",
  city: "Peshawar, Pakistan",
  hours: "Mon – Sat · 9:00 – 18:00",
  mapEmbedUrl: "https://www.google.com/maps?q=Peshawar,+Pakistan&output=embed",
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
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Order / Book a consultation", href: "/book-consultation" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;
