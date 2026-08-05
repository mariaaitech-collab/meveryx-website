import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, footerCompanyLinks, footerLegalLinks } from "@/lib/site";
import { services } from "@/data/mockData";
import { Container } from "@/components/ui/container";
import { MeveryxLogo } from "@/components/common/MeveryxLogo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/common/social-icons";

const socials = [
  {
    label: "Instagram",
    ariaLabel: "Visit Meveryx on Instagram",
    href: "https://www.instagram.com/meveryx_?igsh=MXBrNGVyYTVzZzJycQ==",
    Icon: InstagramIcon,
    hoverText: "hover:text-[#9E1B9B]",
    hoverBorder: "hover:border-[#9E1B9B]/50",
  },
  {
    label: "Facebook",
    ariaLabel: "Visit Meveryx on Facebook",
    href: "https://www.facebook.com/share/193w85RG48/",
    Icon: FacebookIcon,
    hoverText: "hover:text-[#2B3B95]",
    hoverBorder: "hover:border-[#2B3B95]/50",
  },
  {
    label: "LinkedIn",
    ariaLabel: "Visit Meveryx on LinkedIn",
    href: "https://www.linkedin.com/company/meveryxtech/",
    Icon: LinkedInIcon,
    hoverText: "hover:text-[#00A8E8]",
    hoverBorder: "hover:border-[#00A8E8]/50",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-xl">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MeveryxLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {site.tagline}. {site.description}
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ label, ariaLabel, href, Icon, hoverText, hoverBorder }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${hoverBorder} ${hoverText}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-600 transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-400">
              Contact us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-lime"
                >
                  WhatsApp: 0340 1217454
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{site.hours}</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hi Meveryx! I'd like to discuss a project.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-logo-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-200">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {site.name}. Peshawar, Pakistan. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-cyan-700"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
