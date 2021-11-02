module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        brandorange: "#ed7102",
        brandteal: "#009ea6",
        brandpink: "#e13f79",
        brandpurple: "#2f255b",
      },
    },
  },
  variants: {
    aspectRatio: ["responsive"],
    extend: {
      backgroundColor: ["odd"],
      backgroundOpacity: ["odd"],
    },
  },
  plugins: [],
}
