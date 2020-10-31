import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Flex, FlexItem } from './index';

storiesOf('Flex', module).add('Default', () => (
  <ThemeProvider>
    <BaseStyles />
    <Flex full={true}>
      <FlexItem basis="30%">Flex Item</FlexItem>
      <FlexItem basis="25%">Flex Item</FlexItem>
      <FlexItem basis="25%">Flex Item</FlexItem>
      <FlexItem basis="25%">Flex Item</FlexItem>
    </Flex>
  </ThemeProvider>
));
