module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Lato"],
      body: ["Roboto"],
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    borderStyle: ["responsive", "hover", "focus"],
    borderWidth: ['responsive', 'hover', 'focus'],
    border: ['responsive', 'hover', 'focus'],
    transitionProperty: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
  },
  plugins: [],
};
