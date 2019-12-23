import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { FeatureBlock } from './index';
import { Flex, FlexItem } from '../Flex';
import AddressBook from '../Icon/icons/AddressBook';

storiesOf("FeatureBlock", module)
  .add("Default", () => {
    const Icon = AddressBook;
    const title = text('Title', 'Feature');
    const copy = text('Copy', 'Exercitation nostrud proident reprehenderit adipisicing sint aliqua labore veniam irure commodo et dolore velit.');
    const link = text('Link URL', '/');
    const linkText = text('Link Text', 'Secondary Link');
    const columnSize = select('Column Size', ['25%', '33.333%', '50%'], '50%')
    const wrap = boolean('Wrap', true)

    return (
    <ThemeProvider>
      <BaseStyles />
      <Flex wrap={wrap}>
        <FlexItem basis={columnSize}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </FlexItem>
        <FlexItem basis={columnSize}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </FlexItem>
        <FlexItem basis={columnSize}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </FlexItem>
        <FlexItem basis={columnSize}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </FlexItem>
      </Flex>
    </ThemeProvider>
  )});
