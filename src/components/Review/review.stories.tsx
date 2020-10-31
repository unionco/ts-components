import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Review } from './index';

storiesOf('Review', module).add('Default', () => {
  const image = text('Image URL', 'https://source.unsplash.com/random/?avatar');
  const title = text('Title', 'Title');
  const subtitle = text('Subtitle', 'Subtitle');
  const review = text('Review', 'Labore est ea esse non enim minim dolore aute ut non irure consequat.');
  let rating = number('Rating', 3);

  if (rating > 5) {
    rating = rating / 20;
  }

  return (
    <ThemeProvider>
      <BaseStyles />
      <Review image={image} title={title} subtitle={subtitle} review={review} rating={rating}></Review>
    </ThemeProvider>
  );
});
