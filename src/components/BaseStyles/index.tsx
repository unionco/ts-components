import { themeGet } from '@styled-system/theme-get';
import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    box-sizing: border-box;
    font-variant-numeric: lining-nums;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  html,
  li,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    margin: 0;
  }

  p {
    ${(props: any) => props.theme.fontSizes.base};
    ${(props: any) => props.theme.lineHeights.base};
    margin: 0;
  }

  h1.display {
    font-family: ${themeGet('fonts.display')};
    ${(props: any) => props.theme.fontSizes.xxlg};
    ${(props: any) => props.theme.lineHeights.xxlg};
  }

  h1,
  .h1 {
    font-family: ${themeGet('fonts.h1')};
    ${(props: any) => props.theme.fontSizes.xlg};
    ${(props: any) => props.theme.lineHeights.xlg};
  }

  h2,
  .h2 {
    font-family: ${themeGet('fonts.h2')};
    ${(props: any) => props.theme.fontSizes.lg};
    ${(props: any) => props.theme.lineHeights.lg};
  }

  h3,
  .h3 {
    font-family: ${themeGet('fonts.h3')};
    ${(props: any) => props.theme.fontSizes.md};
    ${(props: any) => props.theme.lineHeights.md};
  }

  h4,
  .h4 {
    font-family: ${themeGet('fonts.h4')};
    font-weight: 500;
    ${(props: any) => props.theme.fontSizes.base};
    ${(props: any) => props.theme.lineHeights.base};
  }

  h5,
  .h5 {
    font-family: ${themeGet('fonts.h5')};
    font-weight: 500;
    ${(props: any) => props.theme.fontSizes.sm};
    ${(props: any) => props.theme.lineHeights.sm};
  }

  .small {
    ${(props: any) => props.theme.fontSizes.xs};
    ${(props: any) => props.theme.lineHeights.xs};
  }

`;
