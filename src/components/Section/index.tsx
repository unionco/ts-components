import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space, ColorProps, color } from 'styled-system';

type ISectionProps = IThemeStyledFunction<'section'> & SpaceProps & ColorProps & {
  /** Image url for background image */
  image?: string;
}

const Section = styled.section<ISectionProps>`
  display: block;
  width: 100%;
  transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out;
  ${props => props.image && `background-image: url(${props.image})`};
  background-position: center;
  background-size: cover;

  ${color};
  ${space};
`;

export { Section, ISectionProps };
