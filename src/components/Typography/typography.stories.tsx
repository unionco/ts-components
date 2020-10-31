import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import * as Typography from './index';

storiesOf('Typography', module)
  .add('Default', () => (
    <ThemeProvider>
      <BaseStyles />
      <Typography.Display>H1. Display Text</Typography.Display>
      <Typography.H1>H1. Heading Text</Typography.H1>
      <Typography.H2>H2. Heading Text</Typography.H2>
      <Typography.H3>H3. Heading Text</Typography.H3>
      <Typography.H4>H4. Heading Text</Typography.H4>
      <Typography.H5>H5. Heading Text</Typography.H5>
      <Typography.Paragraph>Paragraph</Typography.Paragraph>
      <Typography.SmallParagraph>Small Paragraph</Typography.SmallParagraph>
    </ThemeProvider>
  ))
  .add('As Others', () => (
    <ThemeProvider>
      <BaseStyles />
      <Typography.Display>H1. Display Text</Typography.Display>
      <Typography.H1 className="h5">H1. Heading Text</Typography.H1>
      <Typography.H2 className="h4">H2. Heading Text</Typography.H2>
      <Typography.H3 className="h3">H3. Heading Text</Typography.H3>
      <Typography.H4 className="h2">H4. Heading Text</Typography.H4>
      <Typography.H5 className="h1">H5. Heading Text</Typography.H5>
      <Typography.Paragraph>Paragraph</Typography.Paragraph>
      <Typography.SmallParagraph>Small Paragraph</Typography.SmallParagraph>
    </ThemeProvider>
  ));
