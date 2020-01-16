import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { ThemeProvider } from '../index';
import { BaseStyles, Container, Grid, GridItem, Section, Option, Select, Input, Textarea } from './index';

storiesOf("Forms", module)
  .add("Default", () => {
    const floating = boolean('Floating Placeholders', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section p={10}>
          <Container>
            <Grid m={-2}>
              <GridItem p={2} size={[12, 6]}>
                <Input
                  id="firstname"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  required
                  floating={floating}
                  onChange={() => console.log('change')}
                />
              </GridItem>
              <GridItem p={2} size={[12, 6]}>
                <Input
                  id="lastname"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  required
                  floating={floating}
                  onChange={() => console.log('change')}
                />
              </GridItem>

              <GridItem p={2} size={[12]}>
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  required
                  floating={floating}
                  onChange={() => console.log('change')}
                />
              </GridItem>

              <GridItem p={2} size={[12, 4]}>
                {/* <Input
                  id="organization"
                  type="text"
                  label="Organization"
                  placeholder="Organization"
                  floating={floating}
                  onChange={() => console.log('change')}
                /> */}
                <Select label="State" id="states" name="states" position={floating ? "floating" : "stacked"}>
                  <Option>Select a state</Option>
                  <Option value="alabama">Alabama</Option>
                  <Option value="alaska">Alaska</Option>
                  <Option value="arizona">Arizona</Option>
                  <Option value="arkansas">Arkansas</Option>
                  <Option value="california">California</Option>
                </Select>
              </GridItem>
              <GridItem p={2} size={[12, 4]}>
                <Input
                  id="phone"
                  type="text"
                  label="Phone Number"
                  placeholder="Phone Number"
                  floating={floating}
                  onChange={() => console.log('change')}
                />
              </GridItem>
              <GridItem p={2} size={[12, 4]}>
                <Input
                  id="website"
                  type="url"
                  label="Website"
                  placeholder="Website"
                  floating={floating}
                  onChange={() => console.log('change')}
                />
              </GridItem>

              <GridItem p={2} size={[12]}>
                <Textarea
                  id="message"
                  rows={10}
                  label="Tell us about your project"
                  placeholder="Tell us about your project"
                  required
                  floating={floating}
                  onChange={() => console.log('change')}
                />
              </GridItem>
            </Grid>
          </Container>
        </Section>
      </ThemeProvider>
    );
  });
