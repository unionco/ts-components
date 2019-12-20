import React, { Component } from 'react';
import { AccordionPanel, StyledAccordion, IStyledAccordionPanelProps, IStyledAccordionProps } from './styles';

export interface IAccordionProps
  extends IStyledAccordionProps {
  trigger: string | JSX.Element;
  panel: string | JSX.Element;
};

interface IAccordionState {
  isOpen: boolean;
}

class Accordion extends Component<IAccordionProps, IAccordionState> {
  private el: any = React.createRef<HTMLDivElement>();

  constructor(props: IAccordionProps) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleOpenState = this.toggleOpenState.bind(this);
  }

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      this.toggleOpenState();
    }
  }

  toggleOpenState() {
    const { isOpen } = this.state;
    if (isOpen) {
      this.el.current.style.maxHeight = '0px';
    } else {
      this.el.current.style.maxHeight = `${this.el.current.scrollHeight}px`;
    }

    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { trigger, panel } = this.props;

    return (
      <StyledAccordion open={isOpen}>
        <button className="accordion_trigger" onClick={this.toggleOpenState}>
          {trigger}
        </button>
        <div className="accordion_panel" ref={this.el}>
          {panel}
        </div>
      </StyledAccordion>
    );
  }
}

// Proxy exports
export { AccordionTrigger, StyledAccordionTrigger } from './trigger';

// Export main component
export { Accordion, AccordionPanel, IStyledAccordionPanelProps, IStyledAccordionProps };
