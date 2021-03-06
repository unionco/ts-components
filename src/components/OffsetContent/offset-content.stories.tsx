import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { OffsetContent } from '.';
import { Copy } from '../Copy';
import { Container } from '../Container';
import { Section } from '../Section';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';

const image = {
  id: '1',
  url: 'https://source.unsplash.com/random/1440x600',
  title: 'image title',
  filename: 'imaget-title.png',
  alt: 'image',
};
const copy = {
  eyebrow: 'Eyebrow',
  heading: 'Long headline for two lines for attention and evolving',
  copy:
    '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus..</p>',
};

const ContentCopy = () => {
  return (
    <Copy
      {...copy}
      action={
        <ButtonGroup>
          <Button variant="primary">Primary CTA</Button>
          <Button variant="primary" fill="clear">
            Secondary CTA
          </Button>
        </ButtonGroup>
      }
    />
  );
};

storiesOf('Offset Content', module).add('Default', () => {
  const textAlign = select('Text Align', ['left', 'center', 'right'], 'right');
  const cardColor = select('Card Color', ['primary', 'secondary', 'tertiary', 'light'], 'secondary');

  return (
    <ThemeProvider>
      <BaseStyles />
      <Section>
        <OffsetContent
          content={<ContentCopy />}
          background={image.url}
          {...Object.assign({}, { textAlign, cardColor })}
        />
      </Section>
    </ThemeProvider>
  );
});
