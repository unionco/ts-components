// @ts-ignore
import React from 'react';
import { createGlobalStyle } from '../../styles';

export const BaseStyles = createGlobalStyle`
  :root {
    --base-font: ${(props) => props.theme.fonts.body};
    --heading-font: ${(props) => props.theme.fonts.heading};
  }
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
    font-family: var(--base-font);
  }
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-family: var(--heading-font);
    margin: 0;
    line-height: 1.25;
  }
  p {
    line-height: 1.9;
    margin: 0;
  }

  /* [NOTE] These sizes are duplicated in the Typography component */
  h1.display {
    ${props => props.theme.fontSizes['5xl']};
  }
  h1 {
   ${props => props.theme.fontSizes['4xl']};
  }
  h2 {
   ${props => props.theme.fontSizes['3xl']};
  }
  h3 {
   ${props => props.theme.fontSizes['2xl']};
  }
  h4 {
   ${props => props.theme.fontSizes['xl']};
  }
  h5 {
   ${props => props.theme.fontSizes['lg']};
  }

`;