import { styled } from "../../styles";

const SwiperContainer = styled.div<any>`
  display: block;
  min-height: 400px;
  height: 100%;
  width: 100%;

  > .swiper-wrapper > div {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export { SwiperContainer };
