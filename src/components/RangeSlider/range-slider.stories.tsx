import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import RangeSlider from "./index";
import { Container, Section } from '../index';
// import { select } from "@storybook/addon-knobs";

storiesOf("Range Slider", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <RangeSlider
              min={0}
              minLabel="0 ft"
              max={120}
              maxLabel="120 ft"
              trackColor="primary.base"
            />
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
  .add("Custom Handle", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <RangeSlider
              min={0}
              minLabel="0 ft"
              max={120}
              maxLabel="120 ft"
              Handle={({ props }) => (
                <h1 {...props}>H</h1>
              )}
            />
          </Container>
        </Section>
      </ThemeProvider>
    );
  });
