import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function PageHeader({ eyebrow, title, description, center = true }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className={`py-16 sm:py-20 ${center ? "mx-auto max-w-3xl text-center" : ""}`}>
        {eyebrow && (
          <Badge variant="primary" className="mb-4">
            {eyebrow}
          </Badge>
        )}
        <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
