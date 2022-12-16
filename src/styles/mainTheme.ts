import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      base: "#2fdbbc",
      dark: "#1eae94",
      light: "#67e5ce",
    },
    ink: {
      dark: "#2d2d2d",
      gray: "#707070",
      light: "#f4f4f4",
      lightest: "#ffffff",
    },
    error: {
      base: "#f77272",
    },
    success: {
      base: "#67e5ce",
    },
  },
  borderRadius: {
    big: "20px",
    medium: "10px",
    small: "8px",
  },
  fontWeights: {
    bold: 700,
    regular: 400,
    medium: 500,
    semiBold: 600,
    light: 300,
  },
};

export default mainTheme;
