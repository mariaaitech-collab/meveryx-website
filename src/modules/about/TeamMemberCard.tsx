import type { LeadershipMember } from "@/modules/about/aboutData";
import { TeamPhoto } from "@/modules/about/TeamPhoto";

/**
 * Leadership team card — white card, 340px photo with hover zoom,
 * gradient top accent bar, and a soft cyan role badge.
 */
export function TeamMemberCard({ member }: { member: LeadershipMember }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-100 transition-shadow hover:shadow-lg">
      {/* Gradient top accent bar (Cyan → Indigo → Magenta → Lime) */}
      <div className="nav-underline h-1 w-full" aria-hidden="true" />

      <div className="p-4">
        <TeamPhoto member={member} />

        <div className="mt-4">
          <span className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-[#00A8E8]">
            {member.role}
          </span>
          <h3 className="mt-2.5 font-heading text-lg font-semibold text-navy">
            {member.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
