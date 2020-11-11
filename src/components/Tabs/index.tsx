import React, { Component } from 'react';

interface TabsProps {
  tabs: string | JSX.Element;
  panels: string | JSX.Element;
}

interface TabsState {
  panelValue: any;
  changeTab: any;
}

const PanelContext = React.createContext({
  panelValue: 0,
  changeTab: () => {
    ('');
  },
});

class Tabs extends Component<TabsProps, TabsState> {
  public changeTab: any;

  constructor(props: TabsProps) {
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

export { Tabs, TabsProps, PanelContext };
