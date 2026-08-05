"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { MeveryxLogo } from "@/components/common/MeveryxLogo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/ui/magnetic";

const ROTATING = ["web apps", "mobile apps", "AI systems", "brand identities", "growth engines"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  // Rotate the animated headline word.
  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(
      () => setIndex((i) => (i + 1) % ROTATING.length),
      2600,
    );
    return () => window.clearInterval(t);
  }, [reduce]);

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      {/* Floating pastel blurs behind the hero */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-0 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-[110px] animate-orb" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 -z-10 h-72 w-72 rounded-full bg-fuchsia-200/50 blur-[110px] animate-orb-alt" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-56 w-96 -translate-x-1/2 rounded-full bg-lime-100/60 blur-[110px]" />

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Custom logo display */}
        <motion.div variants={item} className="flex justify-center">
          <MeveryxLogo className="h-28 w-auto sm:h-32" />
        </motion.div>

        <motion.div variants={item} className="mt-6">
          <Badge variant="lime" className="px-4 py-1.5 text-sm">
            {site.tagline}
          </Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl"
        >
          We craft{" "}
          <span className="relative inline-block min-w-[7.5rem] text-left align-baseline sm:min-w-[10rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING[index]}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-logo-gradient inline-block whitespace-nowrap"
              >
                {ROTATING[index]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          for ambitious businesses
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
        >
          Meveryx is a technology agency in Peshawar, Pakistan. One senior team —
          strategy, design, engineering, and marketing — from first idea to a
          product that actually performs.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button href="/book-consultation" size="lg">
              Order / Book Consultation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Magnetic>
          <Button href="/services" size="lg" variant="secondary">
            Our Services
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-6 text-sm text-slate-500">
          Free consultation · No commitment · Replies within one business day
        </motion.p>
      </motion.div>
    </div>
  );
}
