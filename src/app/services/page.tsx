import { ServicesGrid } from "@/modules/services/ServicesGrid";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to grow, under one roof"
        description="Development, design, marketing, and AI — pick a discipline, tell us your budget, and order your project in one step."
      />

      <Container className="py-16 sm:py-20">
        <ServicesGrid />
      </Container>
    </>
  );
}
