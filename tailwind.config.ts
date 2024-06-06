import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "tt-blue": "hsl(246, 80%, 60%)",
        "tt-light-red-work": "hsl(15, 100%, 70%)",
        "tt-soft-blue-play": "hsl(195, 74%, 62%)",
        "tt-light-red-study": "hsl(348, 100%, 68%)",
        "tt-lime-green-exercise": "hsl(145, 58%, 55%)",
        "tt-violet-social": "hsl(264, 64%, 52%)",
        "tt-soft-orange-care": "hsl(43, 84%, 65%)",

        // Neutral
        "tt-very-dark-blue": "hsl(226, 43%, 10%)",
        "tt-dark-blue": "hsl(235, 46%, 20%)",
        "tt-desaturated-blue": "hsl(235, 45%, 61%)",
        "tt-pale-blue": "hsl(236, 100%, 87%)",
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        rubik: ["Rubik", "san-serif"],
      },
      fontWeight: {
        normal: "300",
        semibold: "400",
        bold: "500",
      },
      screens: {
        sm: "880px",
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [],
};
export default config;
