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
      <Section p={[1, 5, 10]} background="light">
        <Container>
          <Intro
            alignCenter
            justifyCenter
            column
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
      <Section p={[1, 5, 10]} background="light" image="https://placehold.it/600x200.png">
        <Container>
          <Intro
            alignCenter
            justifyBetween
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
