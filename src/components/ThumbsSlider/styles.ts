import { styled } from "../../styles";
import { SwiperContainer } from '../Slider';

const ThumbsContainer = styled.div<any>`
  margin-top: 20px;
  position: relative;
  width: 85%;

  ${SwiperContainer} {
    height: 95px;
    min-height: auto;
    margin-left: 0;
    position: static;

    .swiper-button-next {
      right: -10%;
    }

    .swiper-button-prev {
      display: none;
    }

    .swiper-slide {
      cursor: pointer;
    }
  }
`;

const ThumbsSliderContainer = styled.div<any>`
  ${SwiperContainer} {
    .swiper-slide {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      object-fit: cover;
    }
  }
`;

export { ThumbsSliderContainer, ThumbsContainer };