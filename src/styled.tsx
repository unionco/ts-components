import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<styledComponents.DefaultTheme>;
const { ServerStyleSheet } = styledComponents;

export { css, ServerStyleSheet, ThemeProvider };
export default styled;
