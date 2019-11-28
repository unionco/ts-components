// @ts-ignore
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { default as defaultTheme } from '../../theme';
import { TYPOGRAPHY, COMMON } from '../../theme/constants';

const GlobalStyle = createGlobalStyle`
  :root {
    --base-font: ${(props: any) => props.theme.fonts.body};
    --heading-font: ${(props: any) => props.theme.fonts.heading};
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
  }
  p {
    margin: 0;
  }
`;

const Base = (props: any) => {
  const { color, lineHeight, fontFamily, theme = defaultTheme, ...rest } = props;
  return (
    <div {...rest}>
      <GlobalStyle {...props} />
      {props.children}
    </div>
  )
};

export const BaseStyles = styled(Base)`
  ${TYPOGRAPHY} ${COMMON};
`;
