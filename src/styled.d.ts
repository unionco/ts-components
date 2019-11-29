// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface IColors {
    black: string | string[];
    white: string | string[];
    primary: IThemeColor;
    secondary: IThemeColor;
    tertiary: IThemeColor;
    success: IThemeColor;
    warning: IThemeColor;
    danger: IThemeColor;
    dark: IThemeColor;
    medium: IThemeColor;
    light: IThemeColor;
  }

  export interface IThemeColor {
    base: string;
    contrast: string;
    shade: string;
    tint: string;
  }

  export interface IFonts {
    body: string;
    heading: string;
  }

  export interface IFontWeights {
    light: number;
    normal: number;
    bold: number;
  }

  export type IFontSizes = string[];

  export interface ILineHeights {
    condensedUltra: number;
    condensed: number;
    default: number;
  }

  // tslint:disable-next-line:interface-name
  export interface DefaultTheme {
    // tslint:disable-next-line:prefer-array-literal
    borders: Array<number | string>;

    colors: IColors;

    breakpoints: string[];

    fonts: IFonts;
    fontSizes: IFontSizes;
    fontWeights: IFontWeights;
    lineHeights: ILineHeights;

    maxWidths: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    }

    radii: string[];
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    }

    space: string[];

    buttonSizes: {
      small: {
        fontSize: string;
        padding: string;
      },
      medium: {
        fontSize: string;
        padding: string;
      },
      large: {
        fontSize: string;
        padding: string;
      }
    }
  }
}
