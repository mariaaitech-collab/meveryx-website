/**
 * MOCK / SAMPLE DATA — central content source for the public site.
 *
 * IMPORTANT: Every name, metric, quote, and company below is fictional sample
 * content so the site renders complete pages during development. Replace all
 * of it with real client-approved content before launch. Nothing here is a
 * real client endorsement or a real business metric.
 */

import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Cloud,
  CodeXml,
  Compass,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  Palette,
  PanelsTopLeft,
  Rocket,
  Search,
  Share2,
  Smartphone,
  TrendingUp,
} from "lucide-react";

/* ---------------------------------- Types --------------------------------- */

export type ServiceCategory = "Development" | "Design" | "Marketing" | "Cloud/AI";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  techStack: string[];
  process: { title: string; description: string }[];
  gradient: [string, string];
}

export interface FaqCategory {
  category: string;
  items: { question: string; answer: string }[];
}

export interface PricingTier {
  name: string;
  tagline: string;
  monthly: number;
  /** One-time project price; null means custom quote. */
  oneTime: number | null;
  popular: boolean;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  category: "Leadership" | "Developers" | "Designers";
  bio: string;
  initials: string;
  gradient: [string, string];
  socials: { label: string; href: string }[];
}

/* -------------------------------- Categories ------------------------------ */

export const serviceCategories: ServiceCategory[] = [
  "Development",
  "Design",
  "Marketing",
  "Cloud/AI",
];

/* --------------------------------- Services ------------------------------- */

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    category: "Development",
    tagline: "Fast, scalable websites and web apps built to convert.",
    description:
      "We design and engineer web applications that load fast, rank well, and scale with your business. From marketing sites to complex SaaS platforms, every build is production-grade from day one.",
    icon: CodeXml,
    benefits: [
      "Blazing-fast load times and Lighthouse-optimized builds",
      "SEO-friendly architecture from the first line of code",
      "Responsive on every screen, from 320px to 4K",
      "Scalable codebases that grow with your roadmap",
      "Analytics and monitoring baked in from launch",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    process: [
      { title: "Discover", description: "Workshops to define goals, users, and scope." },
      { title: "Design", description: "High-fidelity UI and a working prototype to validate." },
      { title: "Build", description: "Agile sprints with weekly demos and staging previews." },
      { title: "Launch", description: "Zero-downtime deploy, monitoring, and handover." },
    ],
    gradient: ["#00A8E8", "#2B3B95"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Development",
    tagline: "Native-quality mobile apps your users actually love.",
    description:
      "From iOS and Android to cross-platform, we ship mobile experiences that feel fast, native, and delightful — with the app store tooling, analytics, and updates to match.",
    icon: Smartphone,
    benefits: [
      "Single codebase with true native performance",
      "Offline-first sync and push notification strategy",
      "App Store and Play Store submission handled",
      "Crash reporting and remote updates from day one",
      "Biometric auth and secure storage by default",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin", "Firebase"],
    process: [
      { title: "Discover", description: "User journeys, platform strategy, and store positioning." },
      { title: "Design", description: "Native design systems and interactive prototypes." },
      { title: "Build", description: "Shippable milestones with TestFlight / Play test builds." },
      { title: "Launch", description: "Store submission, release monitoring, and iteration." },
    ],
    gradient: ["#2B3B95", "#9E1B9B"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "Design",
    tagline: "Interfaces designed around real user behavior.",
    description:
      "Research-led product design that turns complex workflows into clear, usable experiences. We validate with prototypes before a single line of production code.",
    icon: Palette,
    benefits: [
      "User research and usability testing included",
      "Design systems your engineers will thank you for",
      "Prototypes you can test with real users early",
      "Accessibility (WCAG) built into every screen",
      "Data-informed iterations, not guesswork",
    ],
    techStack: ["Figma", "Framer", "Maze", "Stark", "Storybook", "Zeplin"],
    process: [
      { title: "Research", description: "Interviews, audits, and analytics review." },
      { title: "Define", description: "User flows, sitemaps, and information architecture." },
      { title: "Design", description: "Wireframes to polished high-fidelity UI." },
      { title: "Validate", description: "Usability testing and refinement before handoff." },
    ],
    gradient: ["#8DC63F", "#00A8E8"],
  },
  {
    slug: "brand-identity",
    name: "Brand Identity",
    category: "Design",
    tagline: "Brands people remember and trust.",
    description:
      "Strategy-first branding: positioning, visual identity, and guidelines that keep your brand consistent across every touchpoint — from logo to launch deck.",
    icon: PanelsTopLeft,
    benefits: [
      "Positioning and messaging framework",
      "Logo suite and full visual identity",
      "Brand guidelines your whole team can use",
      "Template decks, social kits, and stationery",
      "Voice and tone guidance for every channel",
    ],
    techStack: ["Figma", "Illustrator", "Notion", "Canva", "Brandfetch", "Framer"],
    process: [
      { title: "Discover", description: "Stakeholder interviews and market analysis." },
      { title: "Define", description: "Positioning, personality, and brand strategy." },
      { title: "Design", description: "Logo explorations and identity systems." },
      { title: "Launch", description: "Guidelines, assets, and rollout support." },
    ],
    gradient: ["#9E1B9B", "#8DC63F"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "Marketing",
    tagline: "Full-funnel marketing that turns attention into revenue.",
    description:
      "A complete growth engine — strategy, content, paid, and email — coordinated so every channel compounds instead of competing.",
    icon: TrendingUp,
    benefits: [
      "Unified strategy across paid, organic, and email",
      "Attribution that shows what actually converts",
      "Monthly experiments with measurable hypotheses",
      "Creative testing at volume",
      "Reporting you can actually act on",
    ],
    techStack: ["Google Analytics", "HubSpot", "Meta Ads", "Google Ads", "Klaviyo", "Ahrefs"],
    process: [
      { title: "Audit", description: "Channel performance and funnel analysis." },
      { title: "Plan", description: "Quarterly roadmap with budgets and targets." },
      { title: "Execute", description: "Campaigns, content, and optimization sprints." },
      { title: "Report", description: "Transparent dashboards and monthly reviews." },
    ],
    gradient: ["#00A8E8", "#8DC63F"],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "Marketing",
    tagline: "Get found by people already searching for what you sell.",
    description:
      "Technical SEO, content strategy, and authority building that move rankings. We focus on searches with commercial intent — not vanity keywords.",
    icon: Search,
    benefits: [
      "Technical audits and Core Web Vitals fixes",
      "Content briefs optimized for real search intent",
      "Programmatic schema markup for rich results",
      "Local SEO for multi-location businesses",
      "Transparent rank and traffic reporting",
    ],
    techStack: ["Ahrefs", "Screaming Frog", "SEMrush", "Google Search Console", "Surfer", "GA4"],
    process: [
      { title: "Audit", description: "Technical, content, and backlink gap analysis." },
      { title: "Plan", description: "Keyword roadmap mapped to revenue potential." },
      { title: "Execute", description: "On-page, content, and authority building." },
      { title: "Report", description: "Rankings, traffic, and conversion tracking." },
    ],
    gradient: ["#8DC63F", "#9E1B9B"],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    category: "Marketing",
    tagline: "Pay-per-click campaigns that pay for themselves.",
    description:
      "Search, Shopping, and Performance Max campaigns engineered around profit — with tight tracking, ruthless keyword pruning, and creative that converts.",
    icon: MousePointerClick,
    benefits: [
      "Conversion tracking and attribution configured correctly",
      "Negative keyword hygiene to cut wasted spend",
      "Shopping feed optimization for product businesses",
      "Landing page feedback that lifts conversion rate",
      "Daily optimization and transparent spend reports",
    ],
    techStack: ["Google Ads", "Google Tag Manager", "GA4", "Search Ads 360", "Optmyzr", "Lighthouse"],
    process: [
      { title: "Audit", description: "Account structure, tracking, and spend review." },
      { title: "Build", description: "Campaign architecture and ad creative." },
      { title: "Launch", description: "Ramp spend with bid strategies and testing." },
      { title: "Scale", description: "Double down on winning keywords and audiences." },
    ],
    gradient: ["#00A8E8", "#2B3B95"],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    category: "Marketing",
    tagline: "Facebook & Instagram ads built for audience precision.",
    description:
      "Full-funnel Meta campaigns from cold acquisition to remarketing, powered by creative testing and pixel events that keep your data clean.",
    icon: Share2,
    benefits: [
      "Pixel and CAPI event setup done right",
      "Creative-first testing framework",
      "Lookalike and retargeting audiences that convert",
      "Budget pacing that respects your ROAS target",
      "Weekly creative refresh to fight ad fatigue",
    ],
    techStack: ["Meta Ads Manager", "Meta Pixel", "CAPI", "AdEspresso", "Canva", "GA4"],
    process: [
      { title: "Audit", description: "Pixel health, funnel, and creative review." },
      { title: "Build", description: "Campaign structure and audience matrix." },
      { title: "Test", description: "Structured creative experiments." },
      { title: "Scale", description: "Scale winners and reallocate budget weekly." },
    ],
    gradient: ["#2B3B95", "#9E1B9B"],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Marketing",
    tagline: "A content engine that builds community and demand.",
    description:
      "Organic social strategy, content calendars, and community management that keep your brand visible — and your audience engaged — every single day.",
    icon: Megaphone,
    benefits: [
      "Monthly content calendars across platforms",
      "Scroll-stopping creative and short-form video",
      "Community management and engagement rules",
      "Influencer and UGC coordination",
      "Performance reviews tied to real business goals",
    ],
    techStack: ["Buffer", "CapCut", "Canva", "Later", "Brandwatch", "Sprout Social"],
    process: [
      { title: "Strategy", description: "Platform mix, voice, and content pillars." },
      { title: "Create", description: "Batch content production and scheduling." },
      { title: "Engage", description: "Daily community and comments management." },
      { title: "Review", description: "Monthly analytics and content iteration." },
    ],
    gradient: ["#8DC63F", "#00A8E8"],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    category: "Cloud/AI",
    tagline: "Practical AI that removes busywork from your team.",
    description:
      "We build AI assistants, document pipelines, and workflow automations that save your team hours every week — deployed safely with your data guarded.",
    icon: Bot,
    benefits: [
      "Custom AI assistants trained on your docs and data",
      "Workflow automation across CRMs, email, and support",
      "Document processing: extraction, summarization, routing",
      "Human-in-the-loop review so output stays accurate",
      "Cost and token usage that scales with real usage",
    ],
    techStack: ["OpenAI", "LangChain", "Python", "n8n", "Supabase", "Vector DB"],
    process: [
      { title: "Discover", description: "Map repetitive workflows and data sources." },
      { title: "Design", description: "Prototype the AI flow with real documents." },
      { title: "Build", description: "Integrate, evaluate, and harden the pipeline." },
      { title: "Monitor", description: "Track accuracy, cost, and human reviews." },
    ],
    gradient: ["#9E1B9B", "#8DC63F"],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "Cloud/AI",
    tagline: "Infrastructure that scales, secures, and saves money.",
    description:
      "Cloud architecture, migrations, and DevOps that keep your systems fast, resilient, and cheap to run — on AWS, Azure, or GCP.",
    icon: Cloud,
    benefits: [
      "Architecture reviews and cost optimization",
      "Zero-downtime migrations to the cloud",
      "CI/CD pipelines and infrastructure as code",
      "Monitoring, alerting, and incident response",
      "Security hardening and compliance readiness",
    ],
    techStack: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Grafana"],
    process: [
      { title: "Assess", description: "Current state, costs, and risk review." },
      { title: "Architect", description: "Target architecture and migration plan." },
      { title: "Migrate", description: "Phased, zero-downtime cutover." },
      { title: "Operate", description: "Monitoring, cost guardrails, and support." },
    ],
    gradient: ["#00A8E8", "#8DC63F"],
  },
  {
    slug: "software-consulting",
    name: "Software Consulting",
    category: "Cloud/AI",
    tagline: "Senior engineering advice without the hire.",
    description:
      "On-demand senior architects and engineers who review your codebase, plan your roadmap, and mentor your team — for as long as you need.",
    icon: Lightbulb,
    benefits: [
      "Codebase and architecture audits with actionable reports",
      "Technology selection without vendor bias",
      "Roadmap and sprint planning with your team",
      "Senior engineer pair-programming sessions",
      "Interview support for your next technical hires",
    ],
    techStack: ["Architecture", "Code Review", "Roadmapping", "Mentoring", "Audits", "RFP Support"],
    process: [
      { title: "Listen", description: "Understand your product, team, and constraints." },
      { title: "Assess", description: "Focused audit of code, process, and architecture." },
      { title: "Advise", description: "Prioritized recommendations with rationale." },
      { title: "Support", description: "Hands-on help to implement and level up." },
    ],
    gradient: ["#8DC63F", "#9E1B9B"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/* ----------------------------------- FAQ ---------------------------------- */

export const faqs: FaqCategory[] = [
  {
    category: "Process & Delivery",
    items: [
      {
        question: "How long does a typical project take?",
        answer:
          "Most marketing websites ship in 3–6 weeks. Mobile apps and SaaS platforms typically run 8–16 weeks. We agree a milestone plan up front and show you working builds every week, so there are no surprises at the end.",
      },
      {
        question: "How do you manage projects day to day?",
        answer:
          "You get a dedicated project manager, a shared workspace, and weekly demo calls. We work in weekly sprints — you see progress every Friday, not once a quarter.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Every project includes a 30-day post-launch support window with prioritized fixes. After that, most clients move to a care plan covering maintenance, monitoring, and small improvements.",
      },
      {
        question: "Do you work with existing codebases?",
        answer:
          "Yes. About a third of our projects start from an existing codebase. We begin with a focused audit so we know exactly what we're inheriting before we touch anything.",
      },
    ],
  },
  {
    category: "Ordering & Payment",
    items: [
      {
        question: "How do you price projects?",
        answer:
          "Two ways: a fixed one-time project quote, or a monthly retainer for ongoing work. The pricing page shows both — and every estimate is itemized so you can see exactly what you're paying for.",
      },
      {
        question: "Are there any hidden costs?",
        answer:
          "No. Third-party costs (like ads spend, tools, or app store fees) are passed through at cost with receipts. Our fee is our fee.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes — 40% to book the start date, 30% at design sign-off, and 30% at launch. Milestone payments mean you never pay ahead of progress you can see.",
      },
      {
        question: "What if the scope changes mid-project?",
        answer:
          "Small changes ride with us. Anything that changes the plan gets scoped, quoted, and agreed in writing before we proceed. No surprise invoices.",
      },
    ],
  },
  {
    category: "Services & Tech",
    items: [
      {
        question: "What technologies do you build with?",
        answer:
          "We default to Next.js, React, and TypeScript on the frontend; Node.js or Python on the backend; and PostgreSQL for data. We choose tools based on your needs, not our comfort zone.",
      },
      {
        question: "Will I own the code and assets?",
        answer:
          "Yes — 100%. On final payment you receive full ownership of the codebase, design files, and documentation. We keep a license only if a project uses proprietary components, which we flag in the contract.",
      },
      {
        question: "How do you handle security?",
        answer:
          "Security is a checklist item, not an afterthought: OWASP-aligned code review, dependency scanning, secrets management, and parameterized queries throughout. Larger projects get an independent pen test.",
      },
      {
        question: "Can you work with our in-house team?",
        answer:
          "Happily. We've embedded with dozens of teams — pair-programming, code reviews, and architecture guidance. You keep the keys; we level you up.",
      },
    ],
  },
  {
    category: "Discovery",
    items: [
      {
        question: "What's included in a care plan?",
        answer:
          "Security patches, dependency updates, uptime monitoring, backups, and a prioritized ticket queue. We also keep the roadmap groomed so improvements stay cheap.",
      },
      {
        question: "How fast do you respond to issues?",
        answer:
          "Critical outages get a response within 2 business hours on business plans, 24/7 on enterprise plans. Non-critical tickets are triaged within one business day.",
      },
      {
        question: "Do you help with training and handover?",
        answer:
          "Always. We document everything and run a handover session with your team, so you're not dependent on us to make a change.",
      },
    ],
  },
];

/* --------------------------------- Pricing -------------------------------- */

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    tagline: "For early-stage teams that need a solid launch.",
    monthly: 1900,
    oneTime: 12000,
    popular: false,
    features: [
      "Landing page or MVP build",
      "Responsive, SEO-ready design",
      "Content management access",
      "Analytics & monitoring setup",
      "30-day post-launch support",
      "Email support (1 business day)",
    ],
  },
  {
    name: "Growth",
    tagline: "For scaling companies that want momentum.",
    monthly: 3900,
    oneTime: 28000,
    popular: true,
    features: [
      "Everything in Starter",
      "Custom web app or platform",
      "Dedicated project manager",
      "Weekly demos & sprint reports",
      "Marketing & SEO support",
      "Priority support (4h response)",
      "Care plan & monitoring included",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For teams with complex systems and high stakes.",
    monthly: 8500,
    oneTime: null,
    popular: false,
    features: [
      "Everything in Growth",
      "Dedicated senior engineering team",
      "Security audit & compliance support",
      "24/7 monitoring & incident response",
      "Architecture & roadmap consulting",
      "Custom SLAs and onboarding",
      "Multi-team workshops",
    ],
  },
];

/* ----------------------------------- Team --------------------------------- */

export const team: TeamMember[] = [
  {
    name: "Noah Bennett",
    role: "Co-Founder & CEO",
    category: "Leadership",
    bio: "Former product lead at a Series C startup. Obsessed with shipping products customers actually rely on.",
    initials: "NB",
    gradient: ["#00A8E8", "#2B3B95"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
  {
    name: "Amira Hassan",
    role: "Co-Founder & CTO",
    category: "Leadership",
    bio: "Full-stack engineer turned architect. Keeps the codebase boring, the deploys green, and the deadlines real.",
    initials: "AH",
    gradient: ["#9E1B9B", "#8DC63F"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Facebook", href: "https://www.facebook.com/share/193w85RG48/" },
    ],
  },
  {
    name: "Lucas Ferreira",
    role: "Head of Design",
    category: "Leadership",
    bio: "Designs interfaces that disappear so users can focus on their task. Fights for accessibility on every screen.",
    initials: "LF",
    gradient: ["#8DC63F", "#00A8E8"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
  {
    name: "Sofia Marino",
    role: "Senior Frontend Engineer",
    category: "Developers",
    bio: "React and TypeScript specialist. Ships interactive experiences that stay fast even with heavy data.",
    initials: "SM",
    gradient: ["#00A8E8", "#8DC63F"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
  {
    name: "Daniel Kim",
    role: "Backend & Cloud Engineer",
    category: "Developers",
    bio: "Builds the pipelines and infrastructure that keep products running at 2am. AWS certified, uptime obsessed.",
    initials: "DK",
    gradient: ["#2B3B95", "#9E1B9B"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
  {
    name: "Grace Nwosu",
    role: "AI Engineer",
    category: "Developers",
    bio: "Turns LLM prototypes into production pipelines with guardrails, evaluation, and cost discipline.",
    initials: "GN",
    gradient: ["#8DC63F", "#9E1B9B"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
  {
    name: "Tomás Rivera",
    role: "Product Designer",
    category: "Designers",
    bio: "Moves from user interviews to polished UI fast. Loves design systems that scale across products.",
    initials: "TR",
    gradient: ["#00A8E8", "#2B3B95"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
  {
    name: "Hana Sato",
    role: "Brand Designer",
    category: "Designers",
    bio: "Crafts identities that feel like the company behind them — strategy first, pixels second.",
    initials: "HS",
    gradient: ["#9E1B9B", "#8DC63F"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meveryxtech/" },
      { label: "Instagram", href: "https://www.instagram.com/meveryx_" },
    ],
  },
];

/* ------------------------------ Home page data ---------------------------- */

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
  { value: 12, suffix: "", label: "Service lines" },
  { value: 24, suffix: "/7", label: "Support & monitoring" },
];

export const processTimeline: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Discovery",
    description:
      "We dig into your goals, users, and constraints in a structured workshop. You leave with a clear scope and a plan you understand.",
    icon: Compass,
  },
  {
    title: "Solution Design",
    description:
      "Wireframes and architecture become a clickable design you can test. We refine until it feels right, then lock the spec and the budget.",
    icon: Lightbulb,
  },
  {
    title: "Build",
    description:
      "Weekly sprints, a staging URL you can visit, and demos every Friday. You watch your product take shape in real time.",
    icon: CodeXml,
  },
  {
    title: "Launch",
    description:
      "Zero-downtime deploy, monitoring, analytics, and a handover session. Then we stay close for the first 30 days.",
    icon: Rocket,
  },
];

export const techStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Tailwind CSS",
  "Figma",
  "Docker",
  "OpenAI",
  "Supabase",
];
