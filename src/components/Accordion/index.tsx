import React, { Component } from 'react';
import _debounce from 'lodash/debounce';
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
  private resizeHandler: any = null;

  constructor(props: IAccordionProps) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleOpenState = this.toggleOpenState.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      this.toggleOpenState();
    }

    this.resizeHandler = _debounce(() => {
      this.handleResize();
    }, 100);

    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }


  toggleOpenState() {
    const { isOpen } = this.state;

    this.el.current.style.maxHeight = (isOpen)
      ? '0px'
      : `${this.el.current.scrollHeight}px`;

    this.setState({
      isOpen: !isOpen
    });
  }

  handleResize() {
    const { isOpen } = this.state;
    if (!isOpen) { return; }

    this.el.current.style.maxHeight = `${this.el.current.scrollHeight}px`;
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
export { Accordion, StyledAccordion, AccordionPanel, IStyledAccordionPanelProps, IStyledAccordionProps };
