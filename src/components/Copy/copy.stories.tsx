import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, ButtonGroup, Button } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Copy } from '../Copy';
import { Flex, FlexItem } from '../Flex';
import { boolean } from '@storybook/addon-knobs';

const copy = {
  eyebrow: 'Eyebrow',
  heading: 'Long headline for two lines for attention and evolving',
  subheading: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  copy:
    '<p><span style="color: rebeccapurple; text-decoration: underline;">Sociis natoque penatibus</span> et magnis dis parturient montes, <b>nascetur ridiculus mus</b>. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Sciis natoque penatibus et magnis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.<ul><li>List Item</li><li>List Item</li></ul><ol><li>List Item</li><li>List Item</li></ol></p>',
};

export const CopyStory: React.FC<{ twoCol: boolean }> = ({ twoCol }: { twoCol: boolean }) => (
  <Copy
    {...copy}
    twoCol={twoCol}
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

storiesOf('Copy', module).add('Default', () => {
  const twoCol = boolean('Copy 2-col', false);

  return (
    <ThemeProvider>
      <BaseStyles />
      <Flex>
        <FlexItem basis="50%">
          <CopyStory twoCol={twoCol} />
        </FlexItem>
      </Flex>
    </ThemeProvider>
  );
});
