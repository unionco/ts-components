import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider, ButtonGroup, Button } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Copy } from '../Copy';
import { Flex, FlexItem } from "../Flex";

const copy = {
  eyebrow: 'Eyebrow',
  heading: 'Long headline for two lines for attention and evolving',
  subheading: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  copy: '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus..</p>'
};

storiesOf("Copy", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Flex>
          <FlexItem basis="50%">
            <Copy {...copy} action={
              <ButtonGroup>
                <Button variant="primary">Primary CTA</Button>
                <Button variant="primary" fill="clear">Secondary CTA</Button>
              </ButtonGroup>
            } />
          </FlexItem>
        </Flex>
      </ThemeProvider>
    );
  });
