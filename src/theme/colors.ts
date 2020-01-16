export interface IThemeColor {
  base: string;
  contrast: string;
  shade: string;
  tint: string;
};

export interface IColors {
  black: string | string[];
  white: string | string[];
  primary: IThemeColor;
  secondary: IThemeColor;
  tertiary: IThemeColor;
  success: IThemeColor;
  warning: IThemeColor;
  danger: IThemeColor;
  dark: IThemeColor;
  medium: IThemeColor;
  light: IThemeColor;
}

export const colors: IColors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: {
    base: '#3880ff',
    contrast: '#FFFFFF',
    shade: '#3171e0',
    tint: '#4c8dff'
  },
  secondary: {
    base: '#0cd1e8',
    contrast: '#000000',
    shade: '#0bb8cc',
    tint: '#24d6ea',
  },
  tertiary: {
    base: '#7044ff',
    contrast: '#FFFFFF',
    shade: '#633ce0',
    tint: '#7e57ff',
  },
  success: {
    base: '#10dc60',
    contrast: '#FFFFFF',
    shade: '#0ec254',
    tint: '#28e070',
  },
  warning: {
    base: '#ffce00',
    contrast: '#FFFFFF',
    shade: '#e0b500',
    tint: '#ffd31a',
  },
  danger: {
    base: '#cf3737',
    contrast: '#FFFFFF',
    shade: '#d33939',
    tint: '#f25454',
  },
  dark: {
    base: '#222428',
    contrast: '#FFFFFF',
    shade: '#1e2023',
    tint: '#383a3e',
  },
  medium: {
    base: '#989aa2',
    contrast: '#FFFFFF',
    shade: '#86888f',
    tint: '#a2a4ab',
  },
  light: {
    base: '#f4f5f8',
    contrast: '#000000',
    shade: '#d7d8da',
    tint: '#f5f6f9',
  },
};
