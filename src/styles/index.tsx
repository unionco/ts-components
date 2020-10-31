import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider as Provider } from 'styled-components';
import { theme } from '../theme/theme';

/**
 * A wrapper component for passing down the library theme context
 */
export const ThemeProvider = (props: { theme?: DefaultTheme; children: ReactNode | ReactNode[] }) => {
  return <Provider theme={Object.assign({}, theme, props.theme)}>{props.children}</Provider>;
};

export { default as styled, css, ServerStyleSheet, createGlobalStyle, withTheme } from 'styled-components';
