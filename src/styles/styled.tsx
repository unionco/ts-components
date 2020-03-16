import * as styledComponents from 'styled-components';
import { ThemedStyledFunction } from 'styled-components';
import { IDefaultTheme, colors } from '../theme';

const {
  default: styled,
  css,
  withTheme,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<IDefaultTheme>;
const { ServerStyleSheet } = styledComponents;

// [TODO] Fix this to allow styled-system type color props, like `primary.base` ... this currently
// only allows the top level `primary` which won't return a color
export type IThemeStyledFunction<T> = Omit<ThemedStyledFunction<T, IDefaultTheme, {}>, 'attrs'|'color'> & {
  color?: Exclude<keyof typeof colors, 'white'|'black'>;
};

export { css, ServerStyleSheet, createGlobalStyle, ThemeProvider, withTheme };
export default styled;
