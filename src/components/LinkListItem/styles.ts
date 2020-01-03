import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space, BorderProps, border, TypographyProps, typography } from 'styled-system';

export type IStyledLinkListItemProps = IThemeStyledFunction<'li'> & SpaceProps & BorderProps & TypographyProps;

const StyledLinkListButton = styled.a<IStyledLinkListItemProps>`
  display: flex;
  position: relative;
  padding: 15px 0;
  transition: all 0.2s;
  transform-origin: left;

  ${space}
  ${typography}
`;

const StyledLinkListItem = styled.li<IStyledLinkListItemProps>`
  border-bottom: 1px solid ${props => props.theme.colors.light.base};
  color: ${props => props.theme.colors.dark.base};
  transition: all 0.2s;

  &:last-child {
    border: none;
  }

  &:hover {
    padding: 13px 0;

    ${StyledLinkListButton} {
      color: ${props => props.theme.colors.primary.base};
      cursor: pointer;
      transform: scale(1.5);
    }
  }

  ${border}
`;

export { StyledLinkListItem, StyledLinkListButton };