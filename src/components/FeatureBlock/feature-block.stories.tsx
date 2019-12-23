import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { FeatureBlock } from './index';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import AddressBook from '../Icon/icons/AddressBook';

storiesOf("FeatureBlock", module)
  .add("Default", () => {
    const Icon = AddressBook;
    const title = text('Title', 'Feature');
    const copy = text('Copy', 'Exercitation nostrud proident reprehenderit adipisicing sint aliqua labore veniam irure commodo et dolore velit.');
    const link = text('Link URL', '/');
    const linkText = text('Link Text', 'Secondary Link');

    return (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[6, 3]}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </GridItem>
        <GridItem size={[6, 3]}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </GridItem>
        <GridItem size={[6, 3]}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </GridItem>
        <GridItem size={[6, 3]}>
          <FeatureBlock icon={<Icon />} title={title} copy={copy} link={link} linkText={linkText} />
        </GridItem>
      </Grid>
    </ThemeProvider>
  )});
