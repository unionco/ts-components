// @ts-ignore
import React from 'react';
import { createGlobalStyle } from '../../styles';
import { theme as defaultTheme } from '../../theme';

const GlobalStyle = createGlobalStyle`
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
    font-family: var(--base-font);
  }
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    margin: 0;
    line-height: 1.25;
  }
  p {
    line-height: 1.9;
    margin: 0;
  }

  h1.display {
    ${props => props.theme.fontSizes['6xl']};
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

export const BaseStyles = (props: any) => {
  const { color, lineHeight, fontFamily, theme = defaultTheme, ...rest } = props;
  return (
    <div {...rest}>
      <GlobalStyle {...props} />
      {props.children}
    </div>
  )
};
