import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Section } from './index';

storiesOf("Section", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Section p={[1, 5, 10]} background="light">
        Simple Section Wrapper w/Background Color
      </Section>
      <br/>
      <br/>
      <Section p={[1, 5, 10]} background="light" image="https://placehold.it/600x200.png">
        Simple Section Wrapper w/Background Image
      </Section>
    </ThemeProvider>
  ));
