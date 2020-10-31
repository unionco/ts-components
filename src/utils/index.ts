import { get } from 'lodash';
import { css, Colors, DefaultTheme } from 'styled-components';

export interface IColorVariant {
  [key: string]: any;
}

export const colorThemeNames = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'danger',
  'dark',
  'medium',
  'light',
];

export function createColorMap(colors: Colors): IColorVariant {
  const colorVariants: IColorVariant = {};
  colorThemeNames.map((color: string) => {
    colorVariants[color] = {
      background: get(colors, `${color}.base`),
      color: get(colors, `${color}.contrast`),
    };
  });
  return colorVariants;
}

export function getVariantCSS(theme: DefaultTheme, path: string) {
  return css(get(theme, path));
}

export function isBrowser() {
  return typeof window !== 'undefined';
}

export { maxWidth, fontSize } from './slopeCalc';
export { themeGet } from '@styled-system/theme-get';
