import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Radio } from './index';
import { Label } from "../Label";
import { FormGroup } from "../FormGroup";

storiesOf("Radio", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <FormGroup>
        <Radio id="radio-1" value="radio-1-label" name="radio-group-1" defaultChecked variant="medium" />
        <Label htmlFor="radio-1">Radio 1</Label>
      </FormGroup>
      <FormGroup>
        <Radio id="radio-2" value="radio-2-label" name="radio-group-1" checkedColor="primary" />
        <Label htmlFor="radio-2">Radio 2</Label>
      </FormGroup>
      <FormGroup>
        <Radio id="radio-3" value="radio-3-label" name="radio-group-1" disabled />
        <Label htmlFor="radio-3">Disabled</Label>
      </FormGroup>
    </ThemeProvider>
  ))

  .add("Sizes", () => (
    <ThemeProvider>
      <BaseStyles />
        <FormGroup>
          <Radio id="radio-1" value="radio-1-label" name="radio-group-2" variant="medium" />
          <Label htmlFor="radio-1">Small</Label>
        </FormGroup>
        <FormGroup>
          <Radio id="radio-2" value="radio-2-label" name="radio-group-2" radioSize="medium" />
          <Label htmlFor="radio-2">Medium</Label>
        </FormGroup>
        <FormGroup>
          <Radio id="radio-3" value="radio-3-label" name="radio-group-2" radioSize="large" />
          <Label htmlFor="radio-3">Large</Label>
        </FormGroup>
    </ThemeProvider>
  ))