import { colors, IColors, IThemeColor } from './colors';
import {
  fonts,
  fontSizes,
  fontWeights,
  IFonts,
  IFontSizes,
  IFontWeights,
  ILineHeights,
  lineHeights
} from './typography';

const theme = {
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
  borders: [0, '1px solid'],
  radii: ['0', '3px', '6px'],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em'
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
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

export default theme;
export {
  theme,
  IColors,
  IFonts,
  IFontSizes,
  IFontWeights,
  ILineHeights,
  IThemeColor
};
export * from './constants';
