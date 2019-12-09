import { fontSize } from '../utils/slopeCalc';

export interface IFonts {
  body: string;
  heading: string;
}

export interface IFontWeights {
  light: number;
  normal: number;
  bold: number;
}

export interface ILineHeights {
  condensedUltra: number;
  condensed: number;
  default: number;
}

export interface IFontSizes {
  [key: string]: any;
}

export const fonts: IFonts = {
  body: '"Helvetica Neue", sans-serif',
  heading: 'inherit',
};

export const fontSizes: IFontSizes = {
  xs: fontSize({ sm: 8, xl: 8 }),
  sm: fontSize({ sm: 12, xl: 12 }),
  base: fontSize({ sm: 16, xl: 16 }),
  lg: fontSize({ sm: 20, xl: 20 * 1.25 }),
  xl: fontSize({ sm: 24, xl: 24 * 1.25 }),
  '2xl': fontSize({ sm: 28, xl: 28 * 1.25 }),
  '3xl': fontSize({ sm: 32, xl: 32 * 1.25 }),
  '4xl': fontSize({ sm: 36, xl: 36 * 1.25 }),
  '5xl': fontSize({ sm: 48, xl: 48 * 1.25 }),
  '6xl': fontSize({sm: 64, xl: 64 * 1.25 }),
}

export const fontWeights: IFontWeights = {
  light: 300,
  normal: 400,
  bold: 600
};

export const lineHeights: ILineHeights = {
  condensedUltra: 1,
  condensed: 1.25,
  default: 1.5
};
