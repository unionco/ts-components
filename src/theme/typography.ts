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
  body: '"Helvetica Neue", "Arial", sans-serif',
  heading: 'inherit',
};

export const fontSizes: IFontSizes = {
  xs: 'font-size: 8px',
  sm: 'font-size: 12px',
  base: 'font-size: 16px',
  lg: 'font-size: 12px', // h5
  xl: 'font-size: 16px', // h4
  '2xl': fontSize({ sm: 20, xl: 24 }), // h3
  '3xl': fontSize({ sm: 32, xl: 40 }), // h2
  '4xl': fontSize({ sm: 40, xl: 56 }), // h1
  '5xl': fontSize({ sm: 48, xl: 80 }), // h1.display
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
