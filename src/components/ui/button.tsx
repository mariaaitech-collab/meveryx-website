import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "default" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
} & ComponentPropsWithoutRef<"button"> &
  Pick<ComponentPropsWithoutRef<"a">, "target" | "rel" | "download">;

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-logo-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_34px_-6px_rgba(158,27,155,0.65)] active:translate-y-0",
  secondary:
    "border border-slate-200 bg-white text-navy shadow-sm hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow active:translate-y-0",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-navy",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  default: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
