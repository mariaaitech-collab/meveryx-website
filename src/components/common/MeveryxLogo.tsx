import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Meveryx logo — the exact brand icon (`/meveryx-icon.png`), cropped from the
 * client's asset to show only the ribbon mark on transparency. Never
 * approximated in code. Rendered with `next/image` for crisp scaling.
 */
export function MeveryxLogo({
  className = "h-10",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — ${site.tagline}`}
      className={cn(
        "inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        className,
      )}
    >
      <Image
        src="/meveryx-icon.png"
        alt="Meveryx"
        width={1154}
        height={864}
        priority
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
