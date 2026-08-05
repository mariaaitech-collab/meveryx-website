"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  serviceCategories,
  services,
  type ServiceCategory,
} from "@/data/mockData";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";

const filters = ["All", ...serviceCategories] as const;

export function ServicesGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? services
        : services.filter((s) => s.category === (active as ServiceCategory)),
    [active],
  );

  return (
    <>
      {/* Filters */}
      <div
        role="tablist"
        aria-label="Filter services by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            role="tab"
            type="button"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
              active === filter
                ? "bg-logo-gradient text-white shadow-glow"
                : "border border-slate-200 bg-white text-slate-600 hover:border-primary/50 hover:text-navy",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((service) => (
          <motion.div
            layout
            key={service.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
