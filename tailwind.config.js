import containerQueriesPlugin from "@tailwindcss/container-queries";
import bgPatternsPlugin from "tailwindcss-bg-patterns";
import typographyPlugin from "@tailwindcss/typography";
import headlessUiPlugin from "@headlessui/tailwindcss";

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
  plugins: [
    containerQueriesPlugin,
    bgPatternsPlugin,
    typographyPlugin,
    headlessUiPlugin({ prefix: "ui" }),
  ],
};
