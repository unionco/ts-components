import { DefaultTheme } from 'styled-components';
import { get } from 'lodash';
import { colors } from './colors';
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights
} from './typography';

export * from './constants';

const colorThemeNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark', 'medium', 'light'];
const colorVariants: { [key: string]: object } = {};
colorThemeNames.map((color: string) => {
  colorVariants[color] = {
    background: get(colors, `${color}.base`),
    color: get(colors, `${color}.contrast`),
  }
});

export const theme: DefaultTheme = {
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
    sm: '0 1px 1px rgba(27, 31, 35, 0.1)',
    md: '0 1px 5px rgba(27, 31, 35, 0.15)',
    lg: '0 1px 15px rgba(27, 31, 35, 0.15)',
    xl: '0 10px 50px rgba(27, 31, 35, 0.07)',
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  buttons: {
    ...colorVariants,
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
