/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionDuration: {
        0: "0ms",
        2000: "7000ms",
      },

      spacing: {
        "25p": "25%",
        "35p": "35%",
        "50p": "50%",
        "75p": "75%",
        "84.5vh": "84.5vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },

      boxShadow: {
        "light-xl": "0 15px 30px -15px rgba(256, 256, 256, 0.3)",
        "light-2xl": "-1px 6px 13px 0px rgba(0,0,0,0.44)",
        "light-3xl":
          "0 25px 60px rgba(255,255,255, 0.1), 0 19px 30px rgba(255,255,255, 0.1)",
        "light-4xl":
          "0 45px 100px rgba(220,220,220, 0.3), 0 16px 40px rgba(220,220,252205, 0.3)",
        "violet-5xl": "0px 6px 58px -8px rgba(184,193,236,0.36)",
      },
      colors: {
        bgc1: "#232946",
        bg_light1: "rgb(222 222 222)",
        labels: "#357ba5",
        insta:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        changewidth: "width 2s ease-in-out infinite",
        spin: "spin 8s linear infinite",
        absoluteright: "absoluteright 4s ease-in infinite",
        translateright: "translateright 1.5s ease-in-out infinite",
      },
      keyframes: {
        absoluteright: {
          "0%,100%": {
            right: "0px",
          },
          "50%": {
            right: "-30px",
          },
        },
      },
      spacing: {
        "20p": "27%",
        "65p": "65%",
        w5p: "450px",
        "50p": "45%",
        "90p": "90%",
        img: "450px",
      },
    },
  },
  plugins: [],
};
