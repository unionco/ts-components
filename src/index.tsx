import React from 'react';
import { ServerStyleSheet, ThemeProvider } from './utils/primitives';
import { default as defaultTheme } from './theme';

export type ITheme = keyof typeof defaultTheme;
export { defaultTheme as BaseTheme };
export { ServerStyleSheet };

/**
 * Export all types
 */
export {
  IColors,
  IFonts,
  IFontSizes,
  IFontWeights,
  ILineHeights,
  IThemeColor
} from './theme';

/**
 * Export all components
 */
export * from './components';

/**
 * A wrapper component for passing down the library theme context
 */
export const Theme = (props: any) => {
  return (
    <ThemeProvider theme={Object.assign({}, defaultTheme, props.theme)}>
      {props.children}
    </ThemeProvider>
  )
};
