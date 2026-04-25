import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
      },
      colors: {
        accent:  "var(--accent)",
        accent2: "var(--accent2)",
        accent3: "var(--accent3)",
        muted:   "var(--muted)",
      },
    },
  },
  plugins: [],
};

export default config;
