export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "850px",
        Desktop: "1440px",
      },
      
      colors: {
        "primary-dark-grey": " hsl(0, 0%, 63%)",
        "primary-black": "hsl(0, 0%, 0%)",
        "primary-white": "hsl(0, 0%, 100%)",
        "primary-very-dark-gray": " hsl(0, 0%, 27%)"

      },
    },
  },
  plugins: [],
};