import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";
import { leadership } from "@/modules/about/aboutData";
import { TeamMemberCard } from "@/modules/about/TeamMemberCard";
import { CoreValues } from "@/modules/about/CoreValues";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Meveryx"
        title="We Don't Just Build Code. We Build Long-Term Success."
        description="A dedicated long-term growth partner — deep business understanding, crystal-clear communication, uncompromised technical quality, and real post-launch support."
      />

      {/* Mission narrative */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 leading-relaxed text-slate-600 shadow-card sm:p-10">
              <p className="font-heading text-lg font-semibold text-navy">
                A partner, not a vendor.
              </p>
              <p className="mt-4">
                Unlike conventional software houses that treat client projects
                as quick, transactional coding jobs, {site.name} operates as a
                dedicated long-term growth partner.
              </p>
              <p className="mt-4">
                We prioritize deep business understanding, crystal-clear
                communication, uncompromised technical quality, and post-launch
                support. Every product we build is designed to deliver measurable
                business value, long-term scalability, and true market impact.
              </p>
              <p className="mt-4">
                We don&apos;t just hand over code and walk away — we stay invested
                in your success long after launch.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Core values */}
      <Section surface>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="What we stand for"
              title="Our core values"
              description="Four pillars guide every engagement we take on."
            />
          </Reveal>
          <CoreValues />
        </Container>
      </Section>

      {/* Leadership team */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="The core team"
              title="Meet the leadership"
              description="The people steering Meveryx — led from Peshawar, Pakistan."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.08}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
