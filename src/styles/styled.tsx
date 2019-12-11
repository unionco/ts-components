import * as styledComponents from 'styled-components';
import { IDefaultTheme } from '../theme';
import { ThemedStyledFunction } from 'styled-components';

const {
  default: styled,
  css,
  withTheme,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<IDefaultTheme>;
const { ServerStyleSheet } = styledComponents;

export type IThemeStyledFunction<T> = Omit<ThemedStyledFunction<T, IDefaultTheme, {}>, 'attrs'> & { color?: string; }; // <--

export { css, ServerStyleSheet, createGlobalStyle, ThemeProvider, withTheme };
export default styled;
