import styled from 'styled-components';
import { SpaceProps, space, ColorProps, color } from 'styled-system';

type ISectionProps = SpaceProps &
  Omit<ColorProps, 'color'> & {
    /** Image url for background image */
    image?: string;
  };

const Section = styled.section<ISectionProps>`
  display: block;
  width: 100%;
  transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out;
  ${(props: any) => props.image && `background-image: url(${props.image})`};
  background-position: center;
  background-size: cover;

  ${color};
  ${space};
`;

export { Section, ISectionProps };
