import type { Config } from "tailwindcss";

/**
 * Meveryx Design Tokens — light theme built on the logo palette.
 *
 * Brand ribbon colors: Cyan #00A8E8, Indigo #2B3B95, Magenta #9E1B9B, Lime #84CC16.
 * Soft pastel tints: sky #E0F2FE/#38BDF8, lavender #F3E8FF/#C084FC, mint #ECFDF5.
 * High-contrast slate text #0F172A on off-white #FAFAFA.
 * Loaded by app/globals.css via `@config "../tailwind.config.ts"`.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/modules/**/*.{ts,tsx}",
    "./src/schemas/**/*.{ts,tsx}",
    "./src/types/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand cyan — primary actions, links
        primary: {
          DEFAULT: "#00A8E8",
          foreground: "#FFFFFF",
        },
        // Brand magenta — gradient partner, accents
        accent: {
          DEFAULT: "#9E1B9B",
          foreground: "#FFFFFF",
        },
        // Brand indigo — third logo color
        indigo: "#2B3B95",
        // Brand lime — small highlight accents only
        lime: "#84CC16",
        // Slate text / headings (high contrast)
        navy: "#0F172A",
        // Cards
        card: "#FFFFFF",
        // Section alternation (off-white)
        surface: "#F8FAFC",
        // Borders / dividers
        border: "#E2E8F0",
        // Secondary text
        muted: "#64748B",
      },
      fontFamily: {
        // Headings = Poppins (600–700)
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        // Body = Inter (400–500)
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
      },
      boxShadow: {
        // soft, never harsh
        soft: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 4px 12px -4px rgb(15 23 42 / 0.06)",
        card: "0 1px 2px 0 rgb(15 23 42 / 0.05), 0 8px 24px -8px rgb(15 23 42 / 0.08)",
        // hover-glow for primary actions — cyan
        glow: "0 0 0 1px rgb(0 168 232 / 0.15), 0 8px 24px -6px rgb(0 168 232 / 0.35)",
        // secondary glow — magenta
        "glow-lg":
          "0 0 0 1px rgb(158 27 155 / 0.18), 0 12px 32px -8px rgb(158 27 155 / 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
