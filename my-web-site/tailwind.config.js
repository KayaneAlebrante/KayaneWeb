export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
    extend: {
    "colors": {
        "primary": "#FD2360",
        "secondary": "#CFDEEB",
        "tertiary": "#F05671",
        "error": "#A0000C",
        "neutral": "#FFCED1",
        "neutral-variant": "#FFE5E6",
        "light": {
            "primary": "#8F4953",
            "secondary": "#226488",
            "tertiary": "#8F4952",
            "error": "#904A43",
            "background": "#FFF8F7",
            "surface": "#FFF8F7",
            "onPrimary": "#FFFFFF",
            "onSecondary": "#FFFFFF",
            "onTertiary": "#FFFFFF",
            "onError": "#FFFFFF",
            "onBackground": "#22191A",
            "onSurface": "#22191A"
        },
        "dark": {
            "primary": "#FFB2BA",
            "secondary": "#93CDF6",
            "tertiary": "#FFB2B9",
            "error": "#FFB4AB",
            "background": "#1A1112",
            "surface": "#1A1112",
            "onPrimary": "#561D26",
            "onSecondary": "#00344C",
            "onTertiary": "#561D26",
            "onError": "#561E19",
            "onBackground": "#F0DEDF",
            "onSurface": "#F0DEDF"
        }
    }
    }
    }
  },
  plugins: [],
}