import * as styledComponents from 'styled-components';
import { IDefaultTheme, colors } from '../theme';
import { ThemedStyledFunction } from 'styled-components';

const {
  default: styled,
  css,
  withTheme,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<IDefaultTheme>;
const { ServerStyleSheet } = styledComponents;

export type IThemeStyledFunction<T> = Omit<ThemedStyledFunction<T, IDefaultTheme, {}>, 'attrs'|'color'> & {
  color?: Exclude<keyof typeof colors, 'white'|'black'>;

};

export { css, ServerStyleSheet, createGlobalStyle, ThemeProvider, withTheme };
export default styled;
