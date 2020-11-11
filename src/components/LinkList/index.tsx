import React from 'react';
import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

export type StyledLinkListProps = SpaceProps;

const StyledLinkList = styled.ul<StyledLinkListProps>`
  padding: ${(props: any) => props.theme.space[6]} 0;

  ${space}
`;

export interface LinkListProps extends StyledLinkListProps {
  children: React.ReactNode;
}

const LinkList: React.FC<LinkListProps> = ({ children, ...rest }) => {
  const props = { children, ...rest };

  return (
    <StyledLinkList role="list" {...props}>
      {children}
    </StyledLinkList>
  );
};

export { LinkList, StyledLinkList };
