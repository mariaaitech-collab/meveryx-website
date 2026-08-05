import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalLayout, LegalList, LegalSection } from "@/components/common/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you engage Meveryx for services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The practical terms that apply to enquiries, quotes, and engagements with Meveryx. For any signed project, the project contract takes precedence."
      updated="Sample draft — review by legal counsel before launch"
    >
      <LegalSection title="1. Our services">
        <p>
          Meveryx provides software development, design, marketing, and related
          consulting services. This website describes our services and lets you
          request a consultation or a quote; a request for a quote is not, by
          itself, a contract.
        </p>
      </LegalSection>

      <LegalSection title="2. Quotes, estimates, and payments">
        <LegalList
          items={[
            "Fixed quotes are valid for 30 days unless stated otherwise.",
            "Project fees are typically billed in milestones (e.g. 40% to book, 30% at design sign-off, 30% at launch).",
            "Third-party costs — ads spend, tools, subscriptions, and app store fees — are passed through at cost with receipts.",
            "Monthly retainers are billed in advance and can be paused or cancelled with reasonable notice.",
            "Invoices are due within 14 days; work may pause if an invoice remains unpaid.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Scope and changes">
        <p>
          Every engagement has a written scope. Small changes are absorbed as
          part of the collaboration. Any change that materially alters the scope
          is documented, priced, and agreed in writing before work begins. We
          never bill for undocumented changes.
        </p>
      </LegalSection>

      <LegalSection title="4. Your responsibilities">
        <LegalList
          items={[
            "Provide access, content, and decisions in a timely manner.",
            "Own or have rights to all content and assets you supply.",
            "Ensure that any services we build on your behalf comply with applicable law.",
            "Keep us informed of any deadlines or business constraints that affect the work.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          Upon full payment, you own the deliverables we create for you — code,
          designs, copy, and documentation — unless a deliverable uses a
          licensed third-party component, which we will always flag. We retain
          the right to describe the work and to use anonymized case details in
          our portfolio, subject to your written approval where required.
        </p>
      </LegalSection>

      <LegalSection title="6. Confidentiality">
        <p>
          We keep your business information confidential, both during and after
          an engagement, and we expect the same of you. We do not share
          non-public details of your project with third parties without your
          permission.
        </p>
      </LegalSection>

      <LegalSection title="7. Warranties and limitation of liability">
        <p>
          We deliver work in a professional manner and to the agreed scope. We
          do not guarantee any specific business outcome, including revenue,
          rankings, or traffic figures. To the maximum extent permitted by law,
          our total liability for any claim arising from a project is limited to
          the fees paid for that project.
        </p>
      </LegalSection>

      <LegalSection title="8. Termination">
        <p>
          Either party may end an engagement on written notice. On termination
          you pay for work completed up to that point; you receive ownership of
          the deliverables you&apos;ve paid for, and we are released from
          unperformed work.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These terms are governed by the laws of the Islamic Republic of
          Pakistan. Meveryx is based in Peshawar, Pakistan. Disputes will first
          be addressed through good-faith negotiation before any formal action.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
