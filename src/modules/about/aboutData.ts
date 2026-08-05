import type { LucideIcon } from "lucide-react";
import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react";

export type CoreValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  fallbackSrc: string;
  initials: string;
};

/** Format-agnostic image helper: returns [primarySrc, fallbackSrc] for a member. */
function teamImage(stem: string): { imageSrc: string; fallbackSrc: string } {
  return {
    imageSrc: `/team/${stem}.jpg`,
    fallbackSrc: `/team/${stem}.jpeg`,
  };
}

const maria = teamImage("maria-shafqat");
const zahra = teamImage("zahra-imran");
const muskan = teamImage("muskan-haroon");
const malika = teamImage("malika-akhbar");

/**
 * The core leadership team — exact, real members only.
 * Photos live at /public/team/. TeamPhoto component handles format
 * fallback via onError if the primary format is absent.
 */
export const leadership: LeadershipMember[] = [
  {
    name: "Maria Shafqat",
    role: "CEO & Founder",
    bio: "A visionary technical marketer and software engineer leading Meveryx with a commitment to long-term client growth, transparent communication, and quality-first software architecture.",
    ...maria,
    initials: "MS",
  },
  {
    name: "Zahra Imran",
    role: "Co-Founder & Lead UI/UX Designer",
    bio: "Specializing in human-centered design, Zahra crafts clean, intuitive, and visually engaging interfaces that align user experience with core business goals.",
    ...zahra,
    initials: "ZI",
  },
  {
    name: "Muskan Haroon",
    role: "Co-Founder & Project Manager",
    bio: "Overseeing project operations and agile execution, Muskan ensures seamless client communication, timely milestone delivery, and clear project updates.",
    ...muskan,
    initials: "MH",
  },
  {
    name: "Malika Akhbar",
    role: "IT Director",
    bio: "Directing technical infrastructure, system architecture, and quality control to ensure every software solution is secure, fast, and scalable.",
    ...malika,
    initials: "MA",
  },
];

/** The four core agency pillars. */
export const coreValues: CoreValue[] = [
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, open channels, and zero hidden technical jargon.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "Continued technical assistance and maintenance beyond initial delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality",
    description:
      "Clean architecture, rigorous testing, and responsive design.",
  },
  {
    icon: Compass,
    title: "Business-First Mindset",
    description:
      "Aligning technical development with real revenue and growth goals.",
  },
];
