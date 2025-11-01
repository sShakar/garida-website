const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 1.5s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInFromLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animationDelay: {
        200: "200ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        1000: "1000ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [
    // Plugin to add animation-delay utility
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        { values: theme("animationDelay") }
      );
    },
  ],
};

export default config;
