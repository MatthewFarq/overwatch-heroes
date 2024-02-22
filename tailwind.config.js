tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "skeu-sm": [
          "0px 0px 0px 1px rgba(0, 0, 0, 0.07)",
          "0px 1.5px 1px 0px rgba(255, 255, 255, 0.75) inset",
          "0px 1.5px 1px 0px rgba(0, 0, 0, 0.1)",
        ],
        "skeu-lg": [
          "0px 2px 12px 4px rgba(0, 0, 0, 0.1)",
          "0px 1.5px 1px 0px rgba(255, 255, 255, 0.75) inset",
          "0px 4px 16px 0px rgba(0, 0, 0, 0.1)",
        ],
      },
    },
  },
};
