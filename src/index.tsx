import React from 'react';
import { ThemeProvider } from './styled';
import { theme } from './theme';

export { theme as BaseTheme };

/**
 * Export styled wrapper and theme provider
 */
export * from './styled';

/**
 * Export all components
 */
export * from './components';

/**
 * A wrapper component for passing down the library theme context
 */
export const Theme = (props: any) => {
  return (
    <ThemeProvider theme={Object.assign({}, theme, props.theme)}>
      {props.children}
    </ThemeProvider>
  )
};
