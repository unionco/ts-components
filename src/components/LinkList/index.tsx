import React from 'react';
import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space } from 'styled-system';

type IStyledLinkListProps = IThemeStyledFunction<'ul'> & SpaceProps;

const StyledLinkList = styled.ul<IStyledLinkListProps>`
  padding: ${props => props.theme.space[6]} 0;

  ${space}
`;

export interface ILinkListProps
  extends IStyledLinkListProps {
    children: React.ReactNode;
  };

const LinkList: React.FC<ILinkListProps> = ({
  children,
  ...rest
}) => {
  const props = { children, ...rest };

  return (
    <StyledLinkList
      role="list"
      {...props}
    >
      {children}
    </StyledLinkList>
  );
}

export { LinkList, StyledLinkList };
