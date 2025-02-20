/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
     sm: "640px",
     md: "840px",
     lg: "1024px",
     xl:"1280px"
    },
    extend: {
      
    }
  },
  plugins: [],
};
