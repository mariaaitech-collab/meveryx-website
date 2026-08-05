"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const COLORS = ["#38BDF8", "#C084FC", "#9E1B9B", "#84CC16"];
const TINTS = ["#E0F2FE", "#F3E8FF", "#FDF4FF", "#ECFDF5"];

/**
 * Ambient scroll-driven background for the light theme: four soft pastel
 * orbs (sky, lavender, magenta, mint) that drift and shift as the page
 * scrolls. Fixed behind all content on every page.
 */
export function MovingBackground() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -520]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-80, -260]);
  const y4 = useTransform(scrollYProgress, [0, 1], [200, -420]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const orbs = [
    { color: COLORS[0], tint: TINTS[0], y: y1, className: "left-[8%] top-[-12rem] h-[30rem] w-[30rem]", anim: "animate-orb" },
    { color: COLORS[1], tint: TINTS[1], y: y2, className: "right-[4%] top-[6rem] h-[26rem] w-[26rem]", anim: "animate-orb-alt" },
    { color: COLORS[2], tint: TINTS[2], y: y3, className: "left-[28%] bottom-[-14rem] h-[32rem] w-[32rem]", anim: "animate-orb-alt" },
    { color: COLORS[3], tint: TINTS[3], y: y4, className: "right-[30%] bottom-[8rem] h-[22rem] w-[22rem]", anim: "animate-orb" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Faint grid texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {orbs.map((orb) => (
        <motion.div
          key={orb.color}
          className={`absolute ${orb.className}`}
          style={{ y: reduce ? undefined : orb.y }}
        >
          <div
            className={`h-full w-full rounded-full blur-[110px] ${orb.anim}`}
            style={{
              background: `radial-gradient(circle at center, ${orb.tint} 0%, ${orb.tint}99 45%, transparent 70%)`,
              opacity: 0.85,
            }}
          />
        </motion.div>
      ))}
      {/* Fade to the off-white at the bottom for readability */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#FAFAFA] to-transparent"
        style={{ scale: reduce ? undefined : scale }}
      />
      {/* Subtle 4-color waves along the bottom edge */}
      <svg
        className="absolute inset-x-0 bottom-0 h-24 w-full opacity-[0.14]"
        viewBox="0 0 1440 96"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 C240 20 480 100 720 60 C960 20 1200 100 1440 60 V96 H0 Z"
          fill="#00A8E8"
          className="animate-wave-slow"
        />
        <path
          d="M0 70 C240 36 480 104 720 70 C960 36 1200 104 1440 70 V96 H0 Z"
          fill="#2B3B95"
          className="animate-wave-slower"
        />
        <path
          d="M0 80 C240 52 480 108 720 80 C960 52 1200 108 1440 80 V96 H0 Z"
          fill="#9E1B9B"
          className="animate-wave-slow"
        />
        <path
          d="M0 90 C240 68 480 112 720 90 C960 68 1200 112 1440 90 V96 H0 Z"
          fill="#8DC63F"
          className="animate-wave-slower"
        />
      </svg>
      {/* Top vignette for nav readability */}
      <div className="absolute inset-x-0 top-0 h-[24vh] bg-gradient-to-b from-[#FAFAFA] to-transparent" />
    </div>
  );
}
