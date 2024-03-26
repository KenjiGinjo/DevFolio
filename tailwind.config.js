/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { width: "0", height: "0", opacity: "0.5" },
          "100%": { width: "300%", height: "300%", opacity: "0" },
        },
      },
      animation: {
        wave: "wave 0.6s linear",
      },
    },
  },
};
