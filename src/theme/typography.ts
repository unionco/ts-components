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

export type IFontSizes = string[];

export const fonts: IFonts = {
  body: '"Helvetica Neue", sans-serif',
  heading: 'inherit',
};

export const fontSizes: IFontSizes = ['8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px'];

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
