import React from "react";
import { storiesOf } from "@storybook/react";
import { Accordion, AccordionPanel, AccordionTrigger } from "./index";
import { Theme as ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';

storiesOf("Accordion", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Accordion
        open
        trigger={
          <AccordionTrigger start={<span>1</span>} end={<i>&rarr;</i>}>
            <p>AccordionTrigger One</p>
          </AccordionTrigger>
        }
        panel={
          <AccordionPanel bg="primary.base" p={3}>
            this is a styled component
          </AccordionPanel>
        }
      />

      <Accordion
        trigger={
          <AccordionTrigger start={<span>2</span>} end={<i>&rarr;</i>}>
            <p>AccordionTrigger Two</p>
          </AccordionTrigger>
        }
        panel={
          <AccordionPanel bg="secondary.base" p={3}>
            this is a styled component
          </AccordionPanel>
        }
      />
    </ThemeProvider>
  ));
