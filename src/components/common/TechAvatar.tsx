/**
 * TechAvatar — professional tech illustration used as Malika Akhbar's
 * avatar (IT Director). A clean, branded SVG (not a photo) that matches
 * the 4 logo colors.
 */

type TechAvatarProps = {
  className?: string;
};

export function TechAvatar({ className }: TechAvatarProps) {
  return (
    <svg
      viewBox="0 0 200 250"
      role="img"
      aria-label="Professional tech avatar illustration"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="200" height="250" rx="24" fill="#FFFFFF" />
      {/* Gradient accent */}
      <rect width="200" height="6" fill="url(#meveryx-grad)" />

      <defs>
        <linearGradient id="meveryx-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A8E8" />
          <stop offset="0.33" stopColor="#2B3B95" />
          <stop offset="0.66" stopColor="#9E1B9B" />
          <stop offset="1" stopColor="#8DC63F" />
        </linearGradient>
      </defs>

      {/* Head */}
      <circle cx="100" cy="95" r="52" fill="#E0F2FE" />
      <circle cx="100" cy="95" r="40" fill="#F8FAFC" />
      {/* Hair */}
      <path
        d="M60 88c2-22 14-38 40-38s38 16 40 38c-10-6-24-9-40-9s-30 3-40 9z"
        fill="#0F172A"
      />
      {/* Face */}
      <circle cx="82" cy="98" r="4" fill="#0F172A" />
      <circle cx="118" cy="98" r="4" fill="#0F172A" />
      <path d="M90 116c6 5 14 5 20 0" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* Torso — indigo suit */}
      <path
        d="M46 250c4-52 22-74 54-74s50 22 54 74H46z"
        fill="#2B3B95"
      />
      <path
        d="M74 250c2-40 10-56 26-56s24 16 26 56H74z"
        fill="#00A8E8"
      />
      {/* Collar */}
      <path d="M100 176l-12 16 12 10 12-10-12-16z" fill="#FFFFFF" />

      {/* Lapel highlight */}
      <path d="M100 188l14 8v54h-14v-62z" fill="#9E1B9B" opacity="0.85" />

      {/* Code bracket accent */}
      <path
        d="M88 226l-8 6 8 6M112 226l8 6-8 6"
        stroke="#8DC63F"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
