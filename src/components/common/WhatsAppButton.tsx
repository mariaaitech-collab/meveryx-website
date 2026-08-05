"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Floating WhatsApp button — visible on every page, bottom-right.
 * Soft "breathe" pulse + glowing gradient hover.
 */
export function WhatsAppButton() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hi Meveryx! I'd like to discuss a project.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Meveryx on WhatsApp"
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.9 }}
      animate={reduce ? false : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reduce ? undefined : { scale: 1.06, y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-logo-gradient p-1.5 text-white shadow-glow transition-shadow hover:shadow-[0_0_38px_-4px_rgba(158,27,155,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      {/* breathing halo */}
      <span
        aria-hidden="true"
        className="absolute -inset-1 rounded-full bg-logo-gradient opacity-30 blur-md transition-opacity group-hover:opacity-60"
      />
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-lime ring-2 ring-white" />
      </span>
      <span className="hidden pr-3 text-sm font-semibold transition-opacity sm:block sm:opacity-0 sm:group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

