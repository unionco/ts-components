import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { LinkList } from "./index";
import { LinkListItem } from "../LinkListItem";
import { Flex, FlexItem } from "../Flex";
import { Copy } from '../Copy';
import { Button } from '../Button';

const copy = {
  heading: 'Long headline for two lines for attention and evolving',
  copy: '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Sciis natoque penatibus et magnis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.</p>'
};

storiesOf("Link List", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Flex>
          <FlexItem basis="50%">
            <Copy {...copy} action={
                <Button variant="primary">Primary CTA</Button>
            } />
          </FlexItem>
          <FlexItem basis="50%">
            <LinkList>
              <LinkListItem>Retail</LinkListItem>
              <LinkListItem>Healthcare</LinkListItem>
              <LinkListItem>Manufacturing</LinkListItem>
              <LinkListItem>Food Safety</LinkListItem>
              <LinkListItem>Supply Chain</LinkListItem>
            </LinkList>
          </FlexItem>
        </Flex>
      </ThemeProvider>
    );
  });
