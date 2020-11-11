import { SpaceProps, space, TypographyProps, typography } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export type StyledTabsBarProps = SpaceProps &
  TypographyProps & {
    variant?: string;
  };

const StyledTabsBar = styled.div<StyledTabsBarProps>`
  align-items: center;
  background: ${(props: any) => themeGet(`colors.${props.variant}.base`)};
  color: ${(props: any) => themeGet(`colors.${props.variant}.contrast`)};
  display: flex;
  margin-bottom: ${(props: any) => props.theme.space[1]};

  ${typography}
  ${space};
`;

export { StyledTabsBar };
