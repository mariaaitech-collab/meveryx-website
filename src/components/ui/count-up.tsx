"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

/**
 * Animates a number from 0 to `value` when scrolled into view.
 * Uses a motion value (not React state), so no re-render churn.
 */
export function CountUp({ value, suffix = "", prefix = "", duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const v = Math.round(latest);
    return `${prefix}${v.toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
