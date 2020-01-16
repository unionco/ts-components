import { styled } from "../../styles";
import { SwiperContainer } from '../Slider';
import { objectFit } from '../../theme/mixins'

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
      color: ${props => props.theme.colors.black};
      right: -13%;

      &::after {
        font-size: 30px;
      }
    }

    .swiper-button-prev {
      display: none;
    }

    .swiper-slide {
      cursor: pointer;
      max-width: 25%;
    }

    img {
      cursor: pointer;
      max-width: 25%;
      ${objectFit('cover')}
    }
  }
`;

const ThumbsSliderContainer = styled.div<any>`
  ${SwiperContainer} {
    .swiper-slide {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      ${objectFit('cover')}
    }
  }
`;

export { ThumbsSliderContainer, ThumbsContainer };