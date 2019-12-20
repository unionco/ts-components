import React from "react";
import { storiesOf } from "@storybook/react";
// import { select } from "@storybook/addon-knobs";
import { ThemeProvider, Grid, GridItem } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Select } from './index';
import { Option } from '../Option';

storiesOf("Select", module)
  .add("Default", () => {
    // const size = select('Size', ['small', 'medium', 'large'], 'medium');
    // const fill = select('Fill', ['default', 'full', 'thick'], 'default');

    return (
      <ThemeProvider>
        <BaseStyles />
        <Grid py={8}>
          <GridItem size={[12]} px={8}>
            <Select label="States" id="states" name="states">
              <Option>Select a state</Option>
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
          </GridItem>
          <GridItem size={[12]} px={8}>
            <Select label="Floating States" id="states" name="states" position="floating">
              <Option></Option>
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
          </GridItem>
          <GridItem size={[12]} px={8}>
            <Select disabled label="Disabled States" id="states" name="states" position="floating">
              <Option></Option>
              <Option value="alabama">Alabama</Option>
              <Option value="alaska">Alaska</Option>
              <Option value="arizona">Arizona</Option>
              <Option value="arkansas">Arkansas</Option>
              <Option value="california">California</Option>
            </Select>
          </GridItem>
        </Grid>
      </ThemeProvider>
    );
  });
