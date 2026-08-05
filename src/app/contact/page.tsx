import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "@/modules/contact/ContactForm";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Send a message, call, or chat on WhatsApp — we'll come back with honest next steps within one business day."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form (module) */}
          <ContactForm />

          {/* Contact cards */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6 sm:p-8">
              <h2 className="font-heading text-lg font-bold text-navy">Contact details</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-primary">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">Orders &amp; support</span>
                      <span className="text-sm font-medium text-navy transition-colors group-hover:text-primary">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="group flex items-center gap-3.5"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-primary">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">Direct phone</span>
                      <span className="text-sm font-medium text-navy transition-colors group-hover:text-primary">
                        0340 1217454
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                      "Hi Meveryx! I'd like to discuss a project.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">WhatsApp / chat</span>
                      <span className="text-sm font-medium text-navy transition-colors group-hover:text-lime-600">
                        Chat now — instant reply
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-lime-700">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Location</span>
                    <span className="text-sm font-medium text-navy">{site.address}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-primary">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Working hours</span>
                    <span className="text-sm font-medium text-navy">{site.hours}</span>
                  </span>
                </li>
              </ul>

              <div className="mt-6 border-t border-slate-200/80 pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Follow us
                </p>
                <div className="mt-3 flex gap-2">
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
            </Card>

            {/* WhatsApp click-to-chat */}
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hi Meveryx! I'd like to discuss a project.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-lime/40 bg-lime-50 p-5 transition-all hover:border-lime-500/60 hover:shadow-[0_0_30px_-8px_rgba(101,163,13,0.45)]"
            >
              <span>
                <span className="block font-heading text-base font-semibold text-navy">
                  Prefer to chat?
                </span>
                <span className="mt-0.5 block text-sm text-slate-600">
                  Message us on WhatsApp at 0340 1217454
                </span>
              </span>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-logo-gradient text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>

            <Card className="overflow-hidden">
              <div className="p-6 pb-0 sm:p-8 sm:pb-0">
                <h2 className="font-heading text-lg font-bold text-navy">
                  Visit us in Peshawar
                </h2>
              </div>
              <div className="mt-4">
                <iframe
                  title="Meveryx office location — Peshawar, Pakistan"
                  src={site.mapEmbedUrl}
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
