import { coreValues } from "@/modules/about/aboutData";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

/** The four core agency pillars. */
export function CoreValues() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {coreValues.map((value, i) => {
        const Icon = value.icon;
        return (
          <Reveal key={value.title} delay={(i % 4) * 0.08}>
            <Card className="gradient-card h-full p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-logo-soft text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
