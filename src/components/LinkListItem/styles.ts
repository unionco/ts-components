import styled from 'styled-components';
import { SpaceProps, space, BorderProps, border, TypographyProps, typography } from 'styled-system';

export type IStyledLinkListItemProps = SpaceProps & BorderProps & TypographyProps;

const StyledLinkListButton = styled.span<IStyledLinkListItemProps>`
  display: flex;
  font-size: 1rem;
  position: relative;
  padding: 15px 0;
  transition: all 0.2s;
  transform-origin: left;
  outline: none;

  ${space}
  ${typography}
`;

const StyledLinkListItem = styled.li<IStyledLinkListItemProps>`
  border-bottom: 1px solid ${(props: any) => props.theme.colors.light.base};
  color: ${(props: any) => props.theme.colors.dark.base};
  transition: all 0.2s;

  &:last-child {
    border: none;
  }

  &:hover {
    padding: 13px 0;

    ${StyledLinkListButton} {
      color: ${(props: any) => props.theme.colors.primary.base};
      cursor: pointer;
      transform: scale(1.5);
    }
  }

  ${border}
`;

export { StyledLinkListItem, StyledLinkListButton };
