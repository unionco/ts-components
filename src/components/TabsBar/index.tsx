import React from 'react';
import { StyledTabsBar, StyledTabsBarProps } from './styles';

export interface TabsBarProps extends StyledTabsBarProps {
  children: React.ReactNode;
}

const TabsBar: React.FC<TabsBarProps> = ({ children, variant, ...rest }) => {
  const props = { children, variant, ...rest };

  return (
    <StyledTabsBar role="tablist" variant={variant} {...props}>
      {children}
    </StyledTabsBar>
  );
};

export { TabsBar };
