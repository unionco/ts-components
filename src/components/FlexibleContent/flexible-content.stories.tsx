import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from '@storybook/addon-knobs';
import { ThemeProvider, ButtonGroup, Button } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { FlexibleContent } from ".";
import { Copy } from '../Copy';
import { Media } from "../Media";


const image = {
  id: '1',
  url: 'https://placehold.it/400x400.png',
  title: 'image title',
  filename: 'imaget-title.png',
  alt: 'image'
}
const copy = {
  eyebrow: 'Eyebrow',
  heading: 'Long headline for two lines for attention and evolving',
  subheading: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  copy: '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus..</p>'
};

const ContentCopy = () => {
  return (
    <Copy {...copy} action={
      <ButtonGroup>
        <Button variant="primary">Primary CTA</Button>
        <Button variant="primary" fill="clear">Secondary CTA</Button>
      </ButtonGroup>
    } />
  );
}

const ContentMedia = () => (<Media type="image" image={image} />)
const ContentMediaVideo = () => (<Media type="video" videoId="OdzaTbaQwTg" videoProvider="youtube" />)

storiesOf("Flexible Content", module)
  .add("Default", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);
    return (
      <ThemeProvider>
        <BaseStyles />
        <FlexibleContent {...Object.assign({}, { reversed })} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} content={<ContentCopy />} />
      </ThemeProvider>
    );
  })
  .add("Without Media", () => {
    const textAlign = select('Text Align', ['left', 'center', 'right'], 'left');
    return (
      <ThemeProvider>
        <BaseStyles />
        <FlexibleContent textAlign={textAlign} content={<ContentCopy />} />
      </ThemeProvider>
    );
  })
  .add("Stacked", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <FlexibleContent content={<ContentCopy />} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} {...Object.assign({}, { reversed, layout: 'col' })} />
      </ThemeProvider>
    );
  })
  .add("Stacked Stretch", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <FlexibleContent content={<ContentCopy />} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} {...Object.assign({}, { layout: 'col', reversed, stretch: true })} />
      </ThemeProvider>
    );
  })
  .add("Bleeding", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <FlexibleContent content={<ContentCopy />} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} {...Object.assign({}, { reversed, bleed: true })} />
      </ThemeProvider>
    );
  });
