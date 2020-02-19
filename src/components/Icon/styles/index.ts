import { styled, IThemeStyledFunction } from '../../../styles';
import { get } from 'lodash';
import { space, SpaceProps } from 'styled-system';

type IStyledIconProps = IThemeStyledFunction<'i'> & SpaceProps & {
  size?: 'sm' | 'lg';
};


const Icon = styled.i<IStyledIconProps>`
  --icon-color-base: ${props => get(props.theme.colors, `${props.color}.base`)};
  --icon-color-contrast: ${props => get(props.theme.colors, `${props.color}.contrast`)};

  display: inline-block;
  fill: currentColor;
  height: 1em;
  width: 1em;
  ${space};

  svg {
    fill: var(--icon-color-base);
    stroke: var(--icon-color-base);
  }
`;

export { Icon, IStyledIconProps };
