import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Slider, SwiperInstance } from './index';
import { styled } from "../../styles";
import {Button} from "../Button";
import { Grid, GridItem } from "../Grid";
import { Eyebrow } from "../Eyebrow";

const Slide = styled.div`
  max-width: 70%;
`;

storiesOf("Slider", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Slider>
          {[...Array(4).keys()].map((index: number) => (
            <div key={index}>Slide {index + 1}</div>
          ))}
        </Slider>
      </ThemeProvider>
    );
  })
  .add("Custom Buttons", () => {
    const [swiper, updateSwiper] = useState<SwiperInstance>(null);

    const slideNext = () => {
      if (swiper) {
        swiper.slideNext();
      }
    }

    const slidePrev = () => {
      if (swiper) {
        swiper.slidePrev();
      }
    }

    useEffect(
      () => {
        console.log(swiper);
      },
      [swiper]
    );

    return (
      <ThemeProvider>
        <BaseStyles />
        <Grid>
          <GridItem size={[4]}>
            <Eyebrow>Eyebrow</Eyebrow>
            <h1>Heading Text</h1>
            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            <Button variant="primary" disabled={swiper ? swiper.activeIndex === 0 : false} onClick={() => slidePrev()}>Prev Slide</Button>
            <Button variant="primary" onClick={() => slideNext()}>Next Slide</Button>
          </GridItem>
          <GridItem size={8}>
            <Slider onSlidesDidLoad={updateSwiper}>
              {[...Array(4).keys()].map((index: number) => (
                <div key={index}>Slide {index + 1}</div>
              ))}
            </Slider>
          </GridItem>
        </Grid>
      </ThemeProvider>
    );
  })
  .add("Custom", () => (
    <ThemeProvider>
      <BaseStyles />
      <Slider pager buttons options={{
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 20,
        loop: true
      }}>
        {[...Array(4).keys()].map((index: number) => (
          <Slide key={index}>Slide {index + 1}</Slide>
        ))}
      </Slider>
    </ThemeProvider>
  ));
