import containerQueriesPlugin from "@tailwindcss/container-queries";
import bgPatternsPlugin from "tailwindcss-bg-patterns";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        160: "40rem",
      },
    },
  },
  plugins: [containerQueriesPlugin, bgPatternsPlugin],
};
