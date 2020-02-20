import { SpaceProps, space, TypographyProps, typography } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { styled, IThemeStyledFunction } from "../../styles";

export type IStyledTabsBarProps = IThemeStyledFunction<'div'> & SpaceProps & TypographyProps & {
  variant?: string
};

const StyledTabsBar = styled.div<IStyledTabsBarProps>`
  align-items: center;
  background: ${props => themeGet(`colors.${props.variant}.base`)};
  color: ${props => themeGet(`colors.${props.variant}.contrast`)};
  display: flex;
  margin-bottom: ${props => props.theme.space[1]};

  ${typography}
  ${space};
`;

export { StyledTabsBar };