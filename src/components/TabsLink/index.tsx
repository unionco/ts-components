import React from 'react';
import { StyledTabsLink, IStyledTabsProps } from './styles';
import { PanelContext } from '../Tabs';

export interface TabsLinkProps extends IStyledTabsProps {
  children: React.ReactNode;
  value: number;
  onClick?: (e: any) => void;
}

const TabsLink: React.FC<TabsLinkProps> = ({ children, value, disabled, ...rest }) => {
  const props = { children, value, disabled, ...rest };

  return (
    <PanelContext.Consumer>
      {({ panelValue, changeTab }) => (
        <StyledTabsLink
          role="tab"
          disabled={disabled}
          onClick={changeTab}
          className={value === panelValue ? 'is-active' : ''}
          {...props}
        >
          {children}
        </StyledTabsLink>
      )}
    </PanelContext.Consumer>
  );
};

export { TabsLink };
