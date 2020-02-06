import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Media } from '../Media';
import { Container } from '../Container';
import { Section } from '../Section';
import { Flex } from '../Flex';
import { CopyStory } from '../Copy/copy.stories';
import { Box } from '../Box';

const image = {
  id: '1',
  url: 'https://placehold.it/400x200.png',
  title: 'image title',
  filename: 'imaget-title.png',
  alt: 'image'
}

const ContentMedia = () => (<Media type="image" image={image} />)
const ContentMediaVideo = () => (<Media type="video" videoId="OdzaTbaQwTg" videoProvider="youtube" />)

storiesOf("Media", module)
  .add("Image", () => (
    <ThemeProvider>
      <BaseStyles />
      <Section>
        <Container>
          <ContentMedia />
        </Container>
      </Section>
    </ThemeProvider>
  ))
  .add("Video", () => (
    <ThemeProvider>
      <BaseStyles />
      <Section>
        <Container>
          <ContentMediaVideo />
        </Container>
      </Section>
    </ThemeProvider>
  ))
  .add("Copy + Video", () => (
    <ThemeProvider>
      <BaseStyles />
      <Section>
        <Container>
          <Flex>
            <Box width="50%" flexShrink={0}>
              <CopyStory twoCol={false} />
            </Box>
            <ContentMediaVideo />
          </Flex>
        </Container>
      </Section>
    </ThemeProvider>
  ));
