import React from 'react';
import { StyledLinkListItem, StyledLinkListButton, IStyledLinkListItemProps } from './styles';

export interface LinkListItemProps extends IStyledLinkListItemProps {
  children: React.ReactNode;
}

const LinkListItem: React.FC<LinkListItemProps> = ({ children, ...rest }) => {
  const props = { children, ...rest };
  const itemProps = { ...rest };

  return (
    <StyledLinkListItem role="listitem" border={props.border} {...itemProps}>
      <StyledLinkListButton {...props}>{children}</StyledLinkListButton>
    </StyledLinkListItem>
  );
};

export { LinkListItem, StyledLinkListItem, StyledLinkListButton };
