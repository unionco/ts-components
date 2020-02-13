import { fontSize, lineHeight } from '../utils/slopeCalc';

export interface IFonts {
  body: string;
  heading: string;
  display?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
}

export interface IFontWeights {
  light: number;
  normal: number;
  bold: number;
}

export interface IFontSizes {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xlg: string;
  xxlg: string;
}

export interface ILineHeights {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xlg: string;
  xxlg: string;
}

export const fonts: IFonts = {
  body: '"Helvetica Neue", "Arial", sans-serif',
  heading: 'inherit',
  display: 'inherit',
  h1: 'inherit',
  h2: 'inherit',
  h3: 'inherit',
  h4: 'inherit',
  h5: 'inherit',
};

export const fontSizes: IFontSizes = {
  xs: fontSize({ sm: 8, xl: 8 }),
  sm: fontSize({ sm: 12, xl: 12 }),
  base: fontSize({ sm: 16, xl: 16 }),
  md: fontSize({ sm: 20, xl: 24 }),
  lg: fontSize({ sm: 32, xl: 40 }),
  xlg: fontSize({ sm: 40, xl: 56 }),
  xxlg: fontSize({sm: 48, xl: 80 }),
}

export const lineHeights: ILineHeights = {
  xs: lineHeight({ sm: 8 * 2, xl: 8 * 2 }),
  sm: lineHeight({ sm: 12 * 2, xl: 12 * 2 }),
  base: lineHeight({ sm: 16 * 1.5, xl: 16 * 1.5 }),
  md: lineHeight({ sm: 20 * 1.4, xl: 24 * 1.4 }),
  lg: lineHeight({ sm: 32 * 1.25, xl: 40 * 1.2 }),
  xlg: lineHeight({ sm: 40 * 1, xl: 56 * 1.1 }),
  xxlg: lineHeight({ sm: 48 * 1, xl: 80 * 1 }),
}

export const fontWeights: IFontWeights = {
  light: 300,
  normal: 400,
  bold: 600
};
