import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { FlexibleContent } from ".";
import { Copy } from '../Copy';
import { Media } from "../Media";
import { Container } from "../Container";
import { Section } from "../Section";
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';

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
  const twoCol = boolean('Copy 2-col', false);
  const textAlign = select('Text Align', ['left', 'center', 'right'], 'left');
  return (
    <Copy {...copy} {...Object.assign({}, { twoCol, textAlign })} action={
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
        <Section>
          <Container>
            <FlexibleContent {...Object.assign({}, { reversed })} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} content={<ContentCopy />} />
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
  .add("Without Media", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <FlexibleContent content={<ContentCopy />} />
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
  .add("Stacked", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <FlexibleContent content={<ContentCopy />} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} {...Object.assign({}, { reversed, textAlign: 'center', layout: 'col' })} />
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
  .add("Stacked Stretch", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <FlexibleContent content={<ContentCopy />} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} {...Object.assign({}, { layout: 'col', reversed, stretch: true })} />
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
  .add("Bleeding", () => {
    const reversed = boolean('Reversed', false);
    const showVideo = boolean('Use Video', false);

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section>
          <Container>
            <FlexibleContent content={<ContentCopy />} media={showVideo ? <ContentMediaVideo /> : <ContentMedia />} {...Object.assign({}, { reversed, bleed: true })} />
          </Container>
        </Section>
      </ThemeProvider>
    );
  });
