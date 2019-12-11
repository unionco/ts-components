import React from "react";
import { storiesOf } from "@storybook/react";
import { Accordion, AccordionPanel, AccordionTrigger } from "./index";
import { ThemeProvider } from '../../index';
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
          <AccordionPanel p={4}>
            <p>this is a styled component</p>
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
          <AccordionPanel p={4}>
            <p>this is a styled component</p>
          </AccordionPanel>
        }
      />
    </ThemeProvider>
  ));
