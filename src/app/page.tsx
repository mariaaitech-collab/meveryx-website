import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { faqs, processTimeline, services } from "@/data/mockData";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccordionItem } from "@/components/ui/accordion";
import { Hero } from "@/components/common/Hero";

export default function Home() {
  const homeFaqs = faqs.flatMap((c) => c.items).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden py-20 sm:py-28">
        <Container className="relative">
          <Hero />
        </Container>
      </Section>

      {/* 4-step workflow */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="How we work"
              title="A clear path from idea to launch"
              description="Four steps, weekly demos, no black boxes. You see progress — and understand every decision — along the way."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processTimeline.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="relative">
                    {i < processTimeline.length - 1 && (
                      <div
                        className="absolute left-14 top-7 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-primary/50 via-accent/50 to-transparent lg:block"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-logo-gradient text-white shadow-glow">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white bg-navy text-xs font-semibold text-lime-300">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Services overview */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Core services"
              title="Everything you need to grow, under one roof"
              description="Development, design, marketing, and AI — delivered by one senior team so nothing gets lost in handoffs."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                  <a href={`/services/${service.slug}`} className="group block h-full">
                    <Card className="gradient-card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white shadow-md"
                          style={{
                            backgroundImage: `linear-gradient(to bottom right, ${service.gradient[0]}, ${service.gradient[1]})`,
                          }}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                        {service.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {service.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
                        Learn more
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Card>
                  </a>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/services" variant="secondary">
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              center
              eyebrow="FAQ"
              title="Questions, answered"
              description="The short version — head to the FAQ page for the full list."
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-border bg-white px-6 shadow-card">
              {homeFaqs.map((item) => (
                <AccordionItem key={item.question} title={item.question}>
                  {item.answer}
                </AccordionItem>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Button href="/faq" variant="secondary">
              See all FAQs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Direct contact banner */}
      <Section className="pb-20 pt-8 sm:pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-[100px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-200/60 blur-[100px]"
              />
              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                    Talk to us directly
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-slate-600">
                    Based in {site.address}. Tell us what you want to build and
                    we&apos;ll come back with honest next steps — usually within
                    one business day.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button href="/book-consultation" size="lg">
                      Order / Book a consultation
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Button>
                    <Button
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="lg"
                      variant="secondary"
                    >
                      <MessageCircle className="h-5 w-5 text-lime" aria-hidden="true" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-surface p-5 transition-colors hover:border-primary/50"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-primary">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-500">Direct phone</span>
                        <span className="font-heading text-lg font-semibold text-navy group-hover:text-primary">
                          0340 1217454
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-surface p-5 transition-colors hover:border-primary/50"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-primary">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-500">Orders &amp; support</span>
                        <span className="font-heading text-lg font-semibold text-navy group-hover:text-primary">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-surface p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-logo-soft text-lime-700">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">Location</span>
                      <span className="font-heading text-lg font-semibold text-navy">
                        {site.address}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
