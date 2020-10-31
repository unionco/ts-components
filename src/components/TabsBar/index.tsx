import React from 'react';
import { StyledTabsBar, IStyledTabsBarProps } from './styles';

export interface TabsBarProps extends IStyledTabsBarProps {
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
