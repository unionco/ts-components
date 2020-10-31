import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { CardContainer } from './index';
import { Card, CardContent } from '../Card';
import { Image } from '../Image';
import { Eyebrow } from '../Eyebrow';

storiesOf('CardContainer', module).add('Default', () => {
  const gap = number('Column Gap', 2);
  const perRow = number('Cards per row', 3);

  return (
    <ThemeProvider>
      <BaseStyles />
      <CardContainer gap={gap} perRow={perRow}>
        <Card start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}>
          <CardContent>
            <Eyebrow>Eyebrow</Eyebrow>
            <h4>This is a card</h4>
            <p>
              Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.
            </p>
          </CardContent>
        </Card>
        <Card start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}>
          <CardContent>
            <Eyebrow>Eyebrow</Eyebrow>
            <h4>This is a card</h4>
            <p>
              Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.
            </p>
          </CardContent>
        </Card>
        <Card start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}>
          <CardContent>
            <Eyebrow>Eyebrow</Eyebrow>
            <h4>This is a card</h4>
            <p>
              Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.
            </p>
          </CardContent>
        </Card>
        <Card start={<Image alt="image" src="https://placehold.it/345x200.png?text=Image" />}>
          <CardContent>
            <Eyebrow>Eyebrow</Eyebrow>
            <h4>This is a card</h4>
            <p>
              Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.
            </p>
          </CardContent>
        </Card>
      </CardContainer>
    </ThemeProvider>
  );
});
