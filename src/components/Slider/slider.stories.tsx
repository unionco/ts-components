import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Slider, SwiperInstance, ISwiperEvent} from './index';
import { styled } from "../../styles";
import {Button} from "../Button";
import { Grid } from "../Grid";
import { GridItem } from "../GridItem";
import { Eyebrow } from "../Eyebrow";
import { ThumbsSlider } from "../ThumbsSlider";
import 'swipercss';

const Slide = styled.div`
  max-width: 70%;
`;

const SlideSmall = styled.div`
  max-width: 50%;
`;

const SlideItems = Array.from(Array(4).keys());

storiesOf("Slider", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <Slider>
          {SlideItems.map((index: number) => (
            <div key={index}>Slide {index + 1}</div>
          ))}
        </Slider>
      </ThemeProvider>
    );
  })
  .add("Custom Slide Navigation", () => {
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

    const forceUpdate = (event: ISwiperEvent) => {
      console.log(swiper === event.swiper);
      updateSwiper(event.swiper);
    }

    useEffect(
      () => {
        console.log('update swiper');
      },
      [swiper]
    )

    return (
      <ThemeProvider>
        <BaseStyles />
        <Grid>
          <GridItem size={[4]}>
            <Eyebrow>Eyebrow</Eyebrow>
            <h1>Heading Text</h1>
            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            <Button variant="primary" disabled={swiper ? swiper.isBeginning : false } onClick={() => slidePrev()}>Prev Slide</Button>
            <Button variant="primary" disabled={swiper ? swiper.isEnd : false } onClick={() => slideNext()}>Next Slide</Button>
          </GridItem>
          <GridItem size={8}>
            <Slider onSlidesDidLoad={updateSwiper} onTransitionEnd={(event) => forceUpdate(event)}>
              {SlideItems.map((index: number) => (
                <div key={index}>Slide {index + 1}</div>
              ))}
            </Slider>
          </GridItem>
        </Grid>
      </ThemeProvider>
    );
  })
  .add("Hero Slider", () => (
    <ThemeProvider>
      <BaseStyles />
      <Slider pager buttons options={{
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 20,
        loop: true
      }}>
        {SlideItems.map((index: number) => (
          <Slide key={index}>Slide {index + 1}</Slide>
        ))}
      </Slider>
    </ThemeProvider>
  ))
  .add("Thumbs Slider", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
          <GridItem size={[10]}>
            <ThumbsSlider>
              {SlideItems.map((index: number) => (
                <div key={index}>Slide {index + 1}</div>
              ))}
            </ThumbsSlider>
          </GridItem>
        </Grid>
    </ThemeProvider>
  ))
  .add("Coverflow Effect", () => (
    <ThemeProvider>
      <BaseStyles />
      <Slider pager buttons options={{
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        loop: true
      }}>
        {SlideItems.map((index: number) => (
          <SlideSmall key={index}>Slide {index + 1}</SlideSmall>
        ))}
      </Slider>
    </ThemeProvider>
  ));
