import { space, SpaceProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { styled, IThemeStyledFunction } from '../../../styles';

type IStyledIconProps = IThemeStyledFunction<'i'> & SpaceProps & {
  size?: 'sm' | 'lg';
};


const Icon = styled.i<IStyledIconProps>`
  display: inline-block;
  fill: currentColor;
  height: 1em;
  width: 1em;
  ${space};

  svg {
    fill: ${props => themeGet(`colors.${props.color}.base`)};
    stroke: ${props => themeGet(`colors.${props.color}.base`)};
  }
`;

export { Icon, IStyledIconProps };
