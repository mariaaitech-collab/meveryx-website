"use client";

import Image from "next/image";
import { useState } from "react";
import type { LeadershipMember } from "@/modules/about/aboutData";

/**
 * Renders a leadership member's photo using next/image with
 * format-agnostic fallback via onError. Falls back to an elegant
 * initials avatar if both formats fail.
 */
export function TeamPhoto({ member }: { member: LeadershipMember }) {
  const [failed, setFailed] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(member.imageSrc);

  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-xl bg-slate-100">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-logo-soft">
          <span className="font-heading text-5xl font-bold text-logo-gradient">
            {member.initials}
          </span>
        </div>
      ) : (
        <Image
          src={currentSrc}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => {
            if (currentSrc === member.imageSrc && member.fallbackSrc) {
              setCurrentSrc(member.fallbackSrc);
            } else {
              setFailed(true);
            }
          }}
        />
      )}
    </div>
  );
}
