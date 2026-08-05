import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow && (
        <Badge variant="primary" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
            center && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
