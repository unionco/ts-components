import { get } from 'lodash';
import { IColors } from '../theme/colors';
import { IDefaultTheme } from '../theme/theme';
import { css } from '../styles/styled';

export interface IColorVariant {
  [key: string]: object;
}

export const colorThemeNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark', 'medium', 'light'];

export function createColorMap(colors: IColors): IColorVariant {
  const colorVariants: IColorVariant = {};
  colorThemeNames.map((color: string) => {
    colorVariants[color] = {
      background: get(colors, `${color}.base`),
      color: get(colors, `${color}.contrast`),
    }
  });
  return colorVariants;
}

export function getVariantCSS(theme: IDefaultTheme, path: string) {
  return css(get(theme, path));
}

export function isBrowser() {
  return typeof window !== 'undefined';
}

export { maxWidth, fontSize } from './slopeCalc';
export { themeGet } from '@styled-system/theme-get';
