const { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } = require("next/dist/server/api-utils")
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
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 20s infinite'
      },
      keyframes: {
        slide: {
          '0%': {
            transform: "translateX(0)"
          },
          '20%': {
            transform: "translateX(0)"
          },
          '25%': {
            transform: "translateX(-100%)"
          },
          '40%': {
            transform: "translateX(-100%)"
          },
          '45%': {
            transform: "translateX(-200%)"
          },
          '60%': {
            transform: "translateX(-200%)"
          },
          '65%': {
            transform: "translateX(-300%)"
          },
          '80%': {
            transform: "translateX(-300%)"
          },
          '85%': {
            transform: "translateX(-400%)"
          },
          '100%': {
            transform: "translateX(-400%)"
          }
        }
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  plugins: [Myclass],
}
