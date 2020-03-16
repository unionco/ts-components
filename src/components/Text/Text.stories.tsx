import React from "react";
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import Text from './index';

storiesOf("Text", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <Text>Here is regular Text</Text>
        <Text variant="display">Display variant</Text>
        <Text as="p" variant="display">Display variant as a p tag</Text>
        <Text variant="h1">H1 - is regular Text</Text>
      </ThemeProvider>
    );
  });
