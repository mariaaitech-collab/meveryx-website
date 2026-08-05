import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { getService, services } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.name,
    description: service.tagline,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Service hero */}
      <Section className="relative overflow-hidden py-16 sm:py-24">
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-glow"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${service.gradient[0]}, ${service.gradient[1]})`,
                }}
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <Badge variant="primary">{service.category}</Badge>
              </div>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                {service.name}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/book-consultation" size="lg">
                  Order / Book this service
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Ask a question
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Benefits + tech */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Key benefits"
                title={`What you get with ${service.name.toLowerCase()}`}
              />
              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit, i) => (
                  <Reveal key={benefit} delay={i * 0.05}>
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-6 sm:p-8">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Technologies we use
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <Badge key={tech} className="px-3.5 py-1.5 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  We pick the right tool for your project — this is our default
                  toolkit, not a fixed requirement.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Process"
              title="How we deliver"
              description="A repeatable process that keeps projects on time and on budget."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <Card className="h-full p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-logo-gradient text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pb-20 pt-8 sm:pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card sm:px-14 sm:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200/60 blur-[100px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-200/60 blur-[100px]"
              />
              <div className="relative">
                <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                  Ready to start a {service.name.toLowerCase()} project?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-600">
                  Tell us your budget and requirements — we&apos;ll scope the
                  work, agree a timeline, and show you exactly what it costs.
                </p>
                <Button href="/book-consultation" size="lg" className="mt-8">
                  Order / Book a consultation
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
