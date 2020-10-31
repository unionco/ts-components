import React, { Component } from 'react';

interface ITabsProps {
  tabs: string | JSX.Element;
  panels: string | JSX.Element;
}

interface ITabsState {
  panelValue: any;
  changeTab: any;
}

const PanelContext = React.createContext({
  panelValue: 0,
  changeTab: () => {
    ('');
  },
});

class Tabs extends Component<ITabsProps, ITabsState> {
  public changeTab: any;

  constructor(props: ITabsProps) {
    super(props);

    this.changeTab = (event: any) => {
      const value = event.target.value;

      this.setState({
        panelValue: parseInt(value, 10),
      });
    };

    this.state = {
      panelValue: 0,
      changeTab: this.changeTab,
    };
  }

  public render() {
    const { tabs, panels } = this.props;

    return (
      <div>
        <PanelContext.Provider value={this.state}>
          {tabs}
          {panels}
        </PanelContext.Provider>
      </div>
    );
  }
}

export { Tabs, ITabsProps, PanelContext };
