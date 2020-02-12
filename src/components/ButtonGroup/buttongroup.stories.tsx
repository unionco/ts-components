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

      <p>Color Variants</p>
      <ButtonGroup>
        <Button variant="primary" disabled>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="tertiary">Tertiary Button</Button>
      </ButtonGroup>

      <br />

      <p>Fill Variants</p>
      <ButtonGroup>
        <Button variant="primary" fill="solid">Solid Primary</Button>
        <Button variant="primary" fill="outline">Outline Primary</Button>
        <Button variant="primary" fill="clear">Clear Primary</Button>
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
