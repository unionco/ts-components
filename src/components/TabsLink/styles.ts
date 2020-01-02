import { styled, IThemeStyledFunction } from "../../styles";
import { SpaceProps, space } from 'styled-system';

export type IStyledTabsProps = IThemeStyledFunction<'button'> & SpaceProps & {
  disabled?: boolean;
}

const StyledTabsLink = styled.button<IStyledTabsProps>`
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  opacity: 0.7;
  padding: ${props => props.theme.space[3]};

  &.is-active {
    opacity: 1;
  }

  ${props => props.disabled && `
    cursor: not-allowed;
    opacity: 0.4;
  `}

  ${space};
`;

export { StyledTabsLink };