import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Section } from './index';
import { Container } from "../Container";
import { Intro } from '../Intro';
import {Button} from "../Button";

storiesOf("Section", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Section p={[2, 4, 8]} bg="light.base">
        <Container>
          <Intro
            centered
            copy={
              <div style={{ textAlign: 'center'}}>
                <h1>Section Intro</h1>
                <p>Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p>
              </div>
            }
            action={<Button variant="primary">See All</Button>}
          />
          <div style={{ padding: '50px 0' }}>
            Simple Section Wrapper w/Background Color
          </div>
        </Container>
      </Section>
      <br/>
      <br/>
      <Section p={[2, 4, 8]} image="https://placehold.it/600x200.png">
        <Container>
          <Intro
            copy={
              <div>
                <h1>Section Intro</h1>
                <p>Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.</p>
              </div>
            }
            action={<Button variant="primary">See All</Button>}
          />
          <div style={{ padding: '50px 0' }}>
            Simple Section Wrapper w/Background Image
          </div>
        </Container>
      </Section>
    </ThemeProvider>
  ));
