import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Container } from "../Container";
import { InputRef } from './index';
import { Flex, FlexItem } from "../Flex";
import { Section } from "../Section";

storiesOf("Text Input", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Section p={10}>
        <Container>
          <Flex pb={6}>
            <FlexItem basis="50%">
              <InputRef
                id="name"
                type="text"
                label="Name"
                value="Franco Valdes"
                error="Name is required"
                onChange={() => console.log('change')}
              />
            </FlexItem>
          </Flex>
          <Flex pb={6}>
            <FlexItem basis="50%">
              <InputRef
                id="email"
                type="email"
                label="Email"
                value="franco@union.co"
                floating={true}
                onChange={() => console.log('change')}
              />
            </FlexItem>
          </Flex>
        </Container>
      </Section>
    </ThemeProvider>
  ));
