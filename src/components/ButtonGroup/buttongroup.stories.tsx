import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Button } from '../Button';
import { ButtonGroup } from './index';

storiesOf("Button Group", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <ButtonGroup>
        <Button variant="primary" disabled>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="tertiary">Tertiary Button</Button>
      </ButtonGroup>
    </ThemeProvider>
  ))
  .add("Column", () => (
    <ThemeProvider>
      <BaseStyles />
      <ButtonGroup layout="column">
        <Button variant="primary" disabled>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="tertiary">Tertiary Button</Button>
      </ButtonGroup>
    </ThemeProvider>
  ))
  .add("Condensed", () => (
    <ThemeProvider>
      <BaseStyles />
      <ButtonGroup condensed={true}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </ButtonGroup>
    </ThemeProvider>
  ))
