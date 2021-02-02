import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Section } from './index';
import { Container } from '../Container';
import { Intro } from '../Intro';
import { Button } from '../Button';
import { Eyebrow } from '../Eyebrow';
import { H2, Paragraph } from '../Typography';

storiesOf('Section', module).add('Default', () => (
  <ThemeProvider>
    <BaseStyles />
    <Section p={[2, 4, 8]} bg="light.base">
      <Container>
        <Intro
          layout="column"
          copy={
            <div>
              <H2>Section Intro</H2>
              <Paragraph>
                Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque
                in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id
                orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta
                dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.
                Pellentesque in ipsum id orci porta dapibus.
              </Paragraph>
            </div>
          }
          action={<Button variant="primary">See All</Button>}
        />
        <div style={{ padding: '50px 0' }}>Simple Section Wrapper w/Background Color</div>
      </Container>
    </Section>
    <br />
    <br />
    <Section p={[2, 4, 8]} image="https://placehold.it/600x200.png">
      <Container>
        <Intro
          copy={
            <div>
              <H2>Section Intro</H2>
              <Paragraph>
                Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque
                in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id
                orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta
                dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.
                Pellentesque in ipsum id orci porta dapibus.
              </Paragraph>
            </div>
          }
          action={<Button variant="primary">See All</Button>}
        />
        <div style={{ padding: '50px 0' }}>Simple Section Wrapper w/Background Image</div>
      </Container>
    </Section>
    <br />
    <br />
    <Section
      p={[2, 4, 8]}
      image="https://placehold.it/600x200.png"
      video={true}
    >
      <video autoPlay loop muted playsInline>
        <source src="https://player.vimeo.com/external/304223015.hd.mp4?s=7d7df9b82ed58c18c0dfc3624ef3007f73d88492&profile_id=174" type="video/mp4" />
      </video>

      <Container>
        <Intro
          copy={
            <div>
              <Eyebrow>Simple Eyebrow</Eyebrow>
              <H2>Section Intro</H2>
              <Paragraph>
                Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque
                in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id
                orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta
                dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.
                Pellentesque in ipsum id orci porta dapibus.
              </Paragraph>
            </div>
          }
          action={<Button variant="primary">See All</Button>}
        />
        <div style={{ padding: '50px 0' }}>Section Wrapper w/Background Video</div>
      </Container>
    </Section>
  </ThemeProvider>
));
