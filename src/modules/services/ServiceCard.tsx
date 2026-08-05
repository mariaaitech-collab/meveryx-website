import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
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
      <h2 className="mt-4 font-heading text-lg font-semibold text-navy">
        {service.name}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.tagline}
      </p>
      <div className="mt-5 space-y-2.5">
        <Button href="/book-consultation" className="w-full" size="sm">
          Order / Book consultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <a
          href={`/services/${service.slug}`}
          className="inline-flex w-full items-center justify-center gap-1 rounded-xl border border-slate-200 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-navy"
        >
          Details
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
