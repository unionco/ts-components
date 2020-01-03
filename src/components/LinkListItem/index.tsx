import React from 'react';
import { StyledLinkListItem, StyledLinkListButton, IStyledLinkListItemProps } from './styles';

export interface ILinkListItemProps
  extends IStyledLinkListItemProps {
    children: React.ReactNode;
    href: string;
  };

const LinkListItem: React.FC<ILinkListItemProps> = ({
  children,
  href,
  ...rest
}) => {
  const props = { children, href, ...rest };
  const itemProps = { ...rest };

  return (
    <StyledLinkListItem
      role="listitem"
      border={props.border}
      {...itemProps}
    >
      <StyledLinkListButton
        href={href}
        {...props}
      >
        {children}
      </StyledLinkListButton>
    </StyledLinkListItem>
  );
}

export { LinkListItem };