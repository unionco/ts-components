// @ts-ignore
import React from 'react';
import { themeGet } from '@styled-system/theme-get';
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
    ${props => props.theme.fontSizes.base};
    ${props => props.theme.lineHeights.base};
    margin: 0;
  }

  h1.display {
    font-family: ${themeGet('fonts.display')};
    ${props => props.theme.fontSizes.xxlg};
    ${props => props.theme.lineHeights.xxlg};
  }

  h1,
  .h1 {
    font-family: ${themeGet('fonts.h1')};
    ${props => props.theme.fontSizes.xlg};
    ${props => props.theme.lineHeights.xlg};
  }

  h2,
  .h2 {
    font-family: ${themeGet('fonts.h2')};
    ${props => props.theme.fontSizes.lg};
    ${props => props.theme.lineHeights.lg};
  }

  h3,
  .h3 {
    font-family: ${themeGet('fonts.h3')};
    ${props => props.theme.fontSizes.md};
    ${props => props.theme.lineHeights.md};
  }

  h4,
  .h4 {
    font-family: ${themeGet('fonts.h4')};
    font-weight: 500;
    ${props => props.theme.fontSizes.base};
    ${props => props.theme.lineHeights.base};
  }

  h5,
  .h5 {
    font-family: ${themeGet('fonts.h5')};
    font-weight: 500;
    ${props => props.theme.fontSizes.sm};
    ${props => props.theme.lineHeights.sm};
  }

  .small {
    ${props => props.theme.fontSizes.xs};
    ${props => props.theme.lineHeights.xs};
  }

`;
