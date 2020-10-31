import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Avatar } from './index';

storiesOf('Avatar', module).add('Default', () => {
  const image = text('Image URL', 'https://source.unsplash.com/random?avatar');

  return (
    <ThemeProvider>
      <BaseStyles />
      <Avatar image={image} />
    </ThemeProvider>
  );
});
