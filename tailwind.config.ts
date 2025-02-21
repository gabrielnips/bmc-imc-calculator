import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary100: "var(--primary-100)",
        primary200: "var(--primary-200)",
        primary300: "var(--primary-300)",
        primary400: "var(--primary-400)",
        primary450: "var(--primary-400)",
        primary500: "var(--primary-500)",
        primary550: "var(--primary-550)",
        primary600: "var(--primary-600)",
      },
    },
  },
  plugins: [],
} satisfies Config;
