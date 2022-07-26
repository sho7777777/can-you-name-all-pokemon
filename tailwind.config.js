const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective": {
      perspective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    }
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  plugins: [Myclass],
}
