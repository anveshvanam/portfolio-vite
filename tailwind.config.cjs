/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/dq9eefxnb/image/upload/v1680014945/vecteezy_abstract-background-design-background-texture-design-with_18752867_l4isik.jpg')",
      },
    },
  },
  plugins: [],
};
