module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mycustomtheme: {
          "primary": "#E63946",            
          "primary-focus": "#B32B37",
          "primary-content": "#FFFFFF",

          "secondary": "#F08080",
          "secondary-focus": "#C46C6C",
          "secondary-content": "#FFFFFF",

          "accent": "#FFB6B9",
          "accent-focus": "#D9A0A3",
          "accent-content": "#000000",

          "neutral": "#F8F8F8",
          "neutral-focus": "#D9D9D9",
          "neutral-content": "#1F1F1F",

          "base-100": "#FFFFFF",           // Primary background
          "base-200": "#F8F8F8",           // Secondary background
          "base-300": "#FFE5E5",           // Soft red highlight
          "base-content": "#1F1F1F",       // Default text

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
        mycustomdark: {
          "primary": "#B32B37",
          "primary-focus": "#7A1D23",
          "primary-content": "#FFFFFF",

          "secondary": "#C46C6C",
          "secondary-focus": "#834545",
          "secondary-content": "#FFFFFF",

          "accent": "#D9A0A3",
          "accent-focus": "#9C6B6B",
          "accent-content": "#000000",

          "neutral": "#1F1F1F",
          "neutral-focus": "#111111",
          "neutral-content": "#F8F8F8",

          "base-100": "#121212",           // Dark background
          "base-200": "#1F1F1F",
          "base-300": "#2A2A2A",
          "base-content": "#F8F8F8",       // Light text

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        }
      },
      "light",
      "dark",
    ],
    darkTheme: "mycustomdark",  // Use your custom dark theme as default dark
  },
};
