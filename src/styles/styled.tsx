import * as styledComponents from 'styled-components';
import { IDefaultTheme } from '../theme';

const {
  default: styled,
  css,
  withTheme,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<IDefaultTheme>;
const { ServerStyleSheet } = styledComponents;

export { css, ServerStyleSheet, createGlobalStyle, ThemeProvider, withTheme };
export default styled;
