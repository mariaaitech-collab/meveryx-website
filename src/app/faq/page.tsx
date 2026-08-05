import { faqs } from "@/data/mockData";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything clients usually ask before they work with us — discovery, ordering & payment, process & delivery, and services & tech."
      />

      <Section>
        <Container className="max-w-3xl">
          {faqs.map((category, ci) => (
            <div key={category.category} className={ci > 0 ? "mt-14" : ""}>
              <Reveal>
                <SectionHeading title={category.category} />
              </Reveal>
              <Reveal className="mt-6">
                <div className="rounded-2xl border border-border bg-white px-6">
                  {category.items.map((item) => (
                    <AccordionItem key={item.question} title={item.question}>
                      {item.answer}
                    </AccordionItem>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}

          <Reveal className="mt-14 text-center">
            <h2 className="font-heading text-2xl font-bold">Still have questions?</h2>
            <p className="mt-2 text-muted">
              Ask us anything — no obligation, no pressure.
            </p>
            <Button href="/contact" className="mt-6">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
