import { Fonts, FontSizes, FontWeights, LineHeights } from 'styled-components';
import { fontSize, lineHeight } from '../utils/slopeCalc';

export const fonts: Fonts = {
  body: '"Helvetica Neue", "Arial", sans-serif',
  heading: 'inherit',
  display: 'inherit',
  h1: 'inherit',
  h2: 'inherit',
  h3: 'inherit',
  h4: 'inherit',
  h5: 'inherit',
};

export const fontSizes: FontSizes = {
  xs: fontSize({ sm: 8, xl: 8 }),
  sm: fontSize({ sm: 12, xl: 12 }),
  base: fontSize({ sm: 16, xl: 16 }),
  md: fontSize({ sm: 20, xl: 24 }),
  lg: fontSize({ sm: 32, xl: 40 }),
  xlg: fontSize({ sm: 40, xl: 56 }),
  xxlg: fontSize({ sm: 48, xl: 80 }),
};

export const lineHeights: LineHeights = {
  xs: lineHeight({ sm: 8 * 2, xl: 8 * 2 }),
  sm: lineHeight({ sm: 12 * 2, xl: 12 * 2 }),
  base: lineHeight({ sm: 16 * 1.5, xl: 16 * 1.5 }),
  md: lineHeight({ sm: 20 * 1.4, xl: 24 * 1.4 }),
  lg: lineHeight({ sm: 32 * 1.25, xl: 40 * 1.2 }),
  xlg: lineHeight({ sm: 40 * 1, xl: 56 * 1.1 }),
  xxlg: lineHeight({ sm: 48 * 1, xl: 80 * 1 }),
};

export const fontWeights: FontWeights = {
  light: 300,
  normal: 400,
  bold: 600,
};
