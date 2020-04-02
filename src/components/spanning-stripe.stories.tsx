import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../index';
import { BaseStyles } from './BaseStyles';
import { ButtonGroup, Eyebrow, Flex, TextInput, Grid, GridItem, Button, FormGroup } from './index';

storiesOf("Spanning Stripe", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 6]}>
          <Eyebrow>Eyebrow Text</Eyebrow>
          <h2 style={{ padding: '0 0 16px'}}>Definition Card</h2>
          <p>Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines</p>
        </GridItem>
        <GridItem size={[12, 4]} offSet={[0, 2]}>
          <Flex alignCenter>
            <ButtonGroup>
              <Button variant="primary">Primary Action CTA</Button>
              <Button variant="primary" fill="clear">Secondary Action CTA</Button>
            </ButtonGroup>
          </Flex>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ))
  .add("With Form", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 12]}>
          <Flex alignCenter center column contentCenter>
            <Eyebrow>Eyebrow Text</Eyebrow>
            <h2>Definition Card</h2>
            <p style={{ textAlign: 'center', padding: '16px 0'}}>Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines</p>
            <FormGroup>
              <TextInput id="first-name" name="first-name" placeholder="First Name" />
            </FormGroup>
          </Flex>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ));
