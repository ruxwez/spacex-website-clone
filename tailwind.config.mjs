/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "87.5rem",
      },
      keyframes: {
        arrowAnimation: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "20%": { opacity: 1, transform: "translateY(-10px)" },
          "40%": { opacity: 1, transform: "translateY(10px)" },
		  "80%": { opacity: 0, transform: "translateY(10px)" },
		  "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
      },
	  animation: {
		"arrow-down": "arrowAnimation 3s infinite",
	  }
    },
    container: {
      center: true,
      padding: "2.25rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
