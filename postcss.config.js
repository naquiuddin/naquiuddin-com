module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
    "postcss-font-magician": {
      variants: {
        Lato: {
          "300": [],
          "400": [],
          "700": [],
        },
        Roboto: {
          "300": [],
          "400": [],
          "700": [],
        },
      },
      foundries: ["google"],
    },
  },
};
