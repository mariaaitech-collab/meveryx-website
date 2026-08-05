import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GradientTextProps = HTMLAttributes<HTMLSpanElement>;

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-accent to-lime bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}
