const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          " radial-gradient(50% 50% at 50% 50%, rgba(233, 134, 29, 0.3) 0%, rgba(201, 24, 34, 0) 100%)",
        "gradient-radial2":
          "linear-gradient(180deg, rgba(233, 134, 29, 0.09) 0%, rgba(226, 76, 10, 0.09) 100%)",
        "gradient-radial3": "linear-gradient(180deg, #E9861D 0%, #E24C0A 100%)",
        "radial-text":
          "linear-gradient(92.8deg, #E7862E 0.54%, #E24C0A 99.79%)",
        "radial-text2":
          "linear-gradient(91.87deg, #000000 -22.62%, #A80002 156.35%)",

        "radial-text3":
          "linear-gradient(90.18deg, #E9861D 0.09%, #E24C0A 99.83%)",
        "radial-text4": "linear-gradient(91.91deg, #E7862E 0%, #E24C0A 82.19%)",
        "radial-card": "linear-gradient(157.37deg, #E9861D 0%, #E24C0A 100%)",
        "radial-card2": "linear-gradient(135deg, #E9861D 0%, #DE1E25 100%)",
        "radial-button":
          "linear-gradient(91.23deg, #110401 -1.84%, #6C0101 133.92%)",
        "radial-button2": "linear-gradient(91.53deg, #E7862E 0%, #E75A2E 100%)",
        "radial-button3": "linear-gradient(91.53deg, #E7862E 0%, #E75A2E 100%)",
        "radial-button4": "linear-gradient(91.53deg, #2B1C16 0%, #492222 100%)",
        "radial-button5":
          "linear-gradient(138.96deg, #E9861D -0.2%, #E24C0A 117.27%)",
        "radial-button6":
          "linear-gradient(138.96deg, rgba(233, 134, 29, 0.08) -0.2%, rgba(226, 76, 10, 0.08) 117.27%",
        "radial-button7":
          "linear-gradient(138.96deg, rgba(233, 134, 29, 0.3) -0.2%, rgba(226, 76, 10, 0.3) 117.27%",
        "radial-border": "linear-gradient(270deg, #E9861D 0%, #E24C0A 100%)",
        "radial-color": "linear-gradient(111.09deg, #572E14 0%, #462313 100%)",
        "radial-button8": "linear-gradient(90deg, #E9861D 0%, #E24C0A 100%)",
      },
      colors: {
        brown: "#1E1E1E",
        creamy: "#36221B",
        bgBrown: "#2D1912",
        orange: "#E9861D",
        orangeLight: "#E7862E",
        shade: "rgba(255, 255, 255, 0.19)",
        shade2: "rgba(233, 134, 29, 0.19)",
        shade3: "rgba(233, 134, 29, 0.08)",
        shade4: "rgba(86, 53, 39, 0.24)",
        shade5: "rgba(233, 134, 29, 0.08)",
        shade6: " rgba(255, 255, 255, 0.09)",
        shade7: "rgba(233, 134, 29, 0.05)",
        shade8: "rgba(233, 134, 29, 0.1)",
        shade9: "rgba(80, 42, 20, 0.17)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
