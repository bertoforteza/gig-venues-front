import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        dark: string;
        light: string;
      };
      ink: {
        dark: string;
        gray: string;
        light: string;
        lightest: string;
      };
      success: {
        base: string;
      };
      error: {
        base: string;
      };
    };

    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      light: number;
    };

    borderRadius: {
      big: string;
      medium: string;
      small: string;
    };
  }
}
