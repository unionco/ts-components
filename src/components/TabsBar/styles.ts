import { get } from 'lodash';
import { styled, IThemeStyledFunction } from "../../styles";
import { SpaceProps, space, TypographyProps, typography } from 'styled-system';

export type IStyledTabsBarProps = IThemeStyledFunction<'div'> & SpaceProps & TypographyProps & {
  variant?: string
};

const StyledTabsBar = styled.div<IStyledTabsBarProps>`
  --background-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  --color-base: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};

  align-items: center;
  background: var(--background-color-base);
  color: var(--color-base);
  display: flex;
  margin-bottom: ${props => props.theme.space[1]};

  ${typography}
  ${space};
`;

export { StyledTabsBar };