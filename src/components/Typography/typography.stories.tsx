import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { Container } from '../Container';
import { BaseStyles } from '../BaseStyles';
import {
  Display,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HorizontalRule,
  Paragraph,
  SmallParagraph,
} from './index';

storiesOf("Typography", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Container>
        <Display>H1. Display Text</Display>
        <H1>H1. Heading Text</H1>
        <H2>H2. Heading Text</H2>
        <H3>H3. Heading Text</H3>
        <H4>H4. Heading Text</H4>
        <H5>H5. Heading Text</H5>
        <H6>H6. Heading Text</H6>
        <HorizontalRule />
        <Paragraph>Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod error cum cupiditate molestias, suscipit nam obcaecati animi nulla voluptas temporibus facilis officiis sint autem excepturi at rerum assumenda laboriosam.</Paragraph>
        <SmallParagraph>Small Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe optio inventore et corporis totam magni laudantium libero ipsam neque doloribus autem sed id velit rerum, eaque, accusantium, fugiat sequi?</SmallParagraph>
      </Container>
    </ThemeProvider>
  ));
