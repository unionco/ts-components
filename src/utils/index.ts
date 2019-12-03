import { IColors } from '../theme/colors';
import { get } from 'lodash';

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
