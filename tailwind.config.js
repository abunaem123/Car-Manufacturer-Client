module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {},

  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F0A500",
          secondary: "#1B1A17",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
