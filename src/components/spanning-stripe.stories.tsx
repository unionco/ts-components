import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../index';
import { BaseStyles } from './BaseStyles';
import { ButtonGroup, Grid, GridItem, Button, FormGroup, Input } from './index';
import { Eyebrow } from "./Eyebrow";
import { Flex } from "./Flex";

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
          <Flex style={{ height: '100%' }} alignCenter>
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
          <Flex style={{ width: '700px', margin: '0 auto'}} alignItemsCenter center column contentCenter>
            <Eyebrow>Eyebrow Text</Eyebrow>
            <h2>Definition Card</h2>
            <p style={{ textAlign: 'center', padding: '16px 0'}}>Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines</p>
            <FormGroup>
              <Input id="first-name" name="first-name" placeholder="First Name" />
            </FormGroup>
          </Flex>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ));
