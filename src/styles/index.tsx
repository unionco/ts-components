import React from 'react';
import { ThemeProvider as Provider } from './styled';
import { theme } from '../theme';

/**
 * A wrapper component for passing down the library theme context
 */
export const ThemeProvider = (props: any) => {
  return (
    <Provider theme={Object.assign({}, theme, props.theme)}>
      {props.children}
    </Provider>
  )
};

export { default as styled, css, ServerStyleSheet, createGlobalStyle } from './styled';
