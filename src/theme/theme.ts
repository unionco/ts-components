import { colors, IColors } from './colors';
import { fonts, fontSizes, fontWeights, lineHeights, IFonts, IFontSizes, IFontWeights, ILineHeights } from './typography';
import { createColorMap, IColorVariant } from '../utils/index';
import { DefaultTheme } from 'styled-components';

const colorVariants = createColorMap(colors);

export interface IDefaultTheme
  extends DefaultTheme {
  // tslint:disable-next-line:prefer-array-literal
  borders: Array<number | string>;

  colors: IColors;

  gridColumns: number;
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

  buttons: IColorVariant;
  buttonFills?: {
    [key: string]: object;
  };
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

export const theme: IDefaultTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  gridColumns: 12,
  borders: [0, '1px solid'],
  radii: ['0', '3px', '6px'],
  shadows: {
    sm: '0 1px 1px rgba(27, 31, 35, 0.1)',
    md: '0 1px 5px rgba(27, 31, 35, 0.15)',
    lg: '0 1px 15px rgba(27, 31, 35, 0.15)',
    xl: '0 10px 50px rgba(27, 31, 35, 0.07)',
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  buttons: {
    ...colorVariants,
  },
  buttonFills: {
    clear: {
      background: 'rgba(0,0,0,0)',
      color: 'var(--neo-color-base)',
      ':hover': {
        background: '#eee',
      }
    },
    outline: {
      background: 'transparent',
      color: 'var(--neo-color-base)',
      border: '1px solid var(--neo-color-base)',
      ':hover': {
        background: 'var(--neo-color-base)',
        color: 'var(--neo-color-contrast)',
      }
    },
    solid: {
      background: 'var(--neo-color-base)',
      color: 'var(--neo-color-contrast)',
      ':hover': {
        opacity: 0.75
      }
    }
  },
  buttonSizes: {
    small: {
      fontSize: fontSizes[1],
      padding: `8px 16px`
    },
    medium: {
      fontSize: fontSizes[2],
      padding: `16px 24px`
    },
    large: {
      fontSize: fontSizes[4],
      padding: `24px 32px`
    }
  }
};
