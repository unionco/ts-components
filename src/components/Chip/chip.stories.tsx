import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Chip } from './index';
import { Icon } from '../Icon';
import { ArrowRight, Download } from '../Icon/icons';

storiesOf("Chip", module)
  .add("Rounded", () => (
    <ThemeProvider>
      <BaseStyles />
      <Chip variant="primary" shape="round" clickable>Click Chip</Chip>
      <Chip variant="primary" shape="round" clickable end={<i>&times;</i>}>Click Chip</Chip>
      <Chip variant="primary" shape="round" clickable start={<i>&times;</i>}>Click Chip</Chip>
    </ThemeProvider>
  ))
  .add("Block", () => (
    <ThemeProvider>
      <BaseStyles />
      <Chip variant="primary" clickable>Click Chip</Chip>
      <Chip variant="primary" clickable end={<i>&times;</i>}>Click Chip</Chip>
      <Chip variant="primary" clickable start={<i>&times;</i>}>Click Chip</Chip>
    </ThemeProvider>
  ))
  .add("Circle", () => (
    <ThemeProvider>
      <BaseStyles />
      <Chip variant="primary" shape="circle" clickable />
      <Chip variant="primary" shape="circle" clickable><Icon icon={<ArrowRight />} /></Chip>
      <Chip variant="primary" shape="circle" clickable><Icon icon={<Download />} /></Chip>
    </ThemeProvider>
  ))
  .add("Colors", () => (
    <ThemeProvider>
      <BaseStyles />
      <Chip shape="round" clickable end={<i>&times;</i>} variant="primary">Primary Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="secondary">Secondary Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="tertiary">Tertiary Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="success">Success Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="warning">Warning Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="danger">Danger Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="dark">Dark Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="medium">Medium Chip</Chip>
      <Chip shape="round" clickable end={<i>&times;</i>} variant="light">Light Chip</Chip>
    </ThemeProvider>
  ))
  .add("Outline", () => (
    <ThemeProvider>
      <BaseStyles />
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="primary">Primary Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="secondary">Secondary Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="tertiary">Tertiary Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="success">Success Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="warning">Warning Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="danger">Danger Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="dark">Dark Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="medium">Medium Chip</Chip>
      <Chip shape="round" clickable outline end={<i>&times;</i>} variant="light">Light Chip</Chip>
    </ThemeProvider>
  ));
