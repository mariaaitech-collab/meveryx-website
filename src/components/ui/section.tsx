import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Subtle alternating background for section separation. */
  surface?: boolean;
};

export function Section({ className, surface = false, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-24",
        surface && "bg-surface",
        className,
      )}
      {...props}
    />
  );
}
