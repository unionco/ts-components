import styled from 'styled-components';
import { SpaceProps, space, ColorProps, color } from 'styled-system';
import { objectFit } from '../../theme/mixins';

type SectionProps = SpaceProps &
  Omit<ColorProps, 'color'> & {
    /** Image url for background image */
    image?: string;
    video?: boolean;
  };

const Section = styled.section<SectionProps>`
  display: block;
  width: 100%;
  transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out;
  ${(props: any) => props.image && `background-image: url(${props.image})`};
  background-position: center;
  background-size: cover;
  position: relative;

  ${props => (props.video || props.image) && `
    // Invert text color for bg images and videos
    color: ${props.theme.colors.light.tint};

    .eyebrow {
      color: ${props.theme.colors.secondary.base};
    }

    // Add slightly-opaque overlay
    &:after {
      background-color: rgba(0,0,0,0.2);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
    }

    // Make sure the copy/etc. stays on top of overlay
    & > div {
      position: relative;
      z-index: 1;
    }
  `}

  ${props => props.video && `
    & > video {
      bottom: 0;
      height: 100%;
      left: 0;
      ${objectFit('cover')};
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 0;
    }
  `}

  ${color};
  ${space};
`;

export { Section, SectionProps };
