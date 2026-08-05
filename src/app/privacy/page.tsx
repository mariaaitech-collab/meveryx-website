import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalLayout, LegalList, LegalSection } from "@/components/common/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Meveryx handles the data you share on this website.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="The short version: we collect only what we need to respond to you, we never sell your data, and you can ask us to delete it at any time."
      updated="Sample draft — review by legal counsel before launch"
    >
      <LegalSection title="1. What this policy covers">
        <p>
          This policy explains what information Meveryx collects on this website,
          how we use it, and the choices you have. It applies to visitors,
          prospective clients, and anyone who contacts us through our forms.
        </p>
      </LegalSection>

      <LegalSection title="2. Information you provide to us">
        <p>We collect only the information you choose to share with us, which includes:</p>
        <LegalList
          items={[
            "Contact form: your name, email address, optional phone number, and your message.",
            "Order / consultation booking: your name, email, phone number, the service you selected, your budget, project details, and any notes you add.",
            "Direct correspondence: anything you send us by email, phone, or messaging services.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Information we collect automatically">
        <p>
          When you visit this site, our hosting provider records basic technical
          data such as the pages you request, your approximate region, and your
          browser type. We use this only to keep the site working and to
          understand which pages are useful.
        </p>
        <p>
          We do not currently use third-party advertising or analytics cookies.
          If that changes, we will update this policy before enabling them.
        </p>
      </LegalSection>

      <LegalSection title="4. How we use your information">
        <LegalList
          items={[
            "To reply to your enquiry and provide the service you asked about.",
            "To schedule and confirm consultation bookings.",
            "To keep records required for invoicing and contracts if we work together.",
            "To improve this website and our service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Sharing your information">
        <p>
          We do not sell or rent your personal information. We share it only
          where necessary to operate: with our hosting provider, email and
          scheduling services, and any sub-processors engaged to deliver your
          project — each bound by a data processing agreement.
        </p>
      </LegalSection>

      <LegalSection title="6. How long we keep it">
        <p>
          Enquiries are kept for as long as needed to respond, and for a
          reasonable period afterwards for follow-up. If we begin a project,
          contract-related records are kept for the period required by law.
        </p>
      </LegalSection>

      <LegalSection title="7. Your rights">
        <p>
          Depending on where you live, you may have the right to access, correct,
          or delete the personal information we hold about you, and to object to
          or restrict certain processing. To exercise any of these rights, email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
            {site.email}
          </a>{" "}
          and we&apos;ll respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
            {site.email}
          </a>{" "}
          or write to us at {site.address}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
