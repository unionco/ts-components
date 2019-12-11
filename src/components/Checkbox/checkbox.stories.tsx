import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Checkbox } from './index';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Label } from "../Label";
import { FormGroup } from "../FormGroup";

storiesOf("Checkbox", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 4]}>
          <FormGroup>
            <Checkbox id="checkbox-1" value="checkbox-1-label" name="checkbox-1" variant="medium" />
            <Label htmlFor="checkbox-1">Checkbox 1</Label>
          </FormGroup>
          <FormGroup>
            <Checkbox id="checkbox-2" value="checkbox-2-label" name="checkbox-2" checkedColor="primary" />
            <Label htmlFor="checkbox-2">Checkbox 2</Label>
          </FormGroup>
          <FormGroup>
            <Checkbox id="checkbox-3" value="checkbox-3-label" name="checkbox-3" disabled />
            <Label htmlFor="checkbox-3">Disabled</Label>
          </FormGroup>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))

  .add("Sizes", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 4]}>
          <FormGroup>
            <Checkbox id="checkbox-1" value="checkbox-1-label" name="checkbox-1" variant="medium" />
            <Label htmlFor="checkbox-1">Small</Label>
          </FormGroup>
          <FormGroup>
            <Checkbox id="checkbox-2" value="checkbox-2-label" name="checkbox-2" checkboxSize="medium" />
            <Label htmlFor="checkbox-2">Medium</Label>
          </FormGroup>
          <FormGroup>
            <Checkbox id="checkbox-3" value="checkbox-3-label" name="checkbox-3" checkboxSize="large" />
            <Label htmlFor="checkbox-3">Large</Label>
          </FormGroup>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
