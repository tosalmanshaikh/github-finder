module.exports = {
   content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
   theme: {
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [require("daisyui")],

   daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
   },
};
