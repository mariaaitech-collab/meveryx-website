import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "accent" | "lime";
};

const variantClasses = {
  default: "bg-slate-100 text-slate-600",
  primary: "bg-sky-100 text-sky-700",
  accent: "bg-fuchsia-100 text-fuchsia-800",
  lime: "bg-lime-100 text-lime-700",
};

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
