import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

type LegalLayoutProps = {
  title: string;
  description: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, description, updated, children }: LegalLayoutProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={description} />
      <Container className="max-w-3xl py-16 sm:py-20">
        <p className="text-xs text-muted">Last updated: {updated}</p>
        <div className="mt-8 space-y-10">{children}</div>
      </Container>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
