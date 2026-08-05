"use client";

import { ArrowRight, Check, PenLine } from "lucide-react";
import { useState } from "react";
import { pricingTiers } from "@/data/mockData";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "oneTime";

function formatPrice(value: number | null) {
  if (value === null) return "Custom";
  return `$${value.toLocaleString()}`;
}

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent pricing, custom quotes"
        description="Two ways to work with us: a monthly retainer for ongoing momentum, or a fixed one-time project quote. Every estimate is itemized — and if none of this fits, just type your own budget."
      />

      <Container className="py-16 sm:py-20">
        {/* Toggle */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
          >
            {(
              [
                { key: "monthly", label: "Monthly retainer" },
                { key: "oneTime", label: "One-time project" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.key}
                role="tab"
                type="button"
                aria-selected={billing === opt.key}
                onClick={() => setBilling(opt.key)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                  billing === opt.key
                    ? "bg-logo-gradient text-white shadow-glow"
                    : "text-slate-600 hover:text-navy",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tiers */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="h-full">
              <Card
                className={cn(
                  "gradient-card relative flex h-full flex-col p-8",
                  tier.popular && "border-primary/50 shadow-glow",
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-logo-gradient px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    Most popular
                  </span>
                )}

                <h2 className="font-heading text-xl font-bold text-navy">{tier.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tier.tagline}</p>

                <div className="mt-6">
                  <p className="font-heading text-4xl font-bold text-navy">
                    {billing === "monthly"
                      ? formatPrice(tier.monthly)
                      : formatPrice(tier.oneTime)}
                    <span className="text-base font-medium text-slate-500">
                      {billing === "monthly"
                        ? "/mo"
                        : tier.oneTime === null
                          ? ""
                          : " total"}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {billing === "monthly"
                      ? "Monthly retainer, pause or cancel anytime"
                      : "Fixed one-time project price, milestone billing"}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100">
                        <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/book-consultation"
                  variant={tier.popular ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get a quote for {tier.name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Custom budget CTA */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-200/50 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-200/60 blur-[100px]"
            />
            <div className="relative">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-logo-soft text-lime-700">
                <PenLine className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-heading text-2xl font-bold text-navy sm:text-3xl">
                None of these fit? Type your own budget.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                Every project is different. Head to the order page and type any
                amount that works for you —{" "}
                <span className="font-medium text-lime-700">$1,200</span>,{" "}
                <span className="font-medium text-lime-700">50,000 PKR</span>, or anything in
                between — and we&apos;ll build a custom quote around it.
              </p>
              <Button href="/book-consultation" size="lg" className="mt-8">
                Type your budget &amp; order
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <p className="mt-4 text-xs text-slate-400">
                Third-party costs (ads spend, tools, app store fees) pass through at cost.
                Prefer email? Reach us at {site.email}.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
