import React, { Component } from 'react';
import { AccordionPanel, StyledAccordion, IStyledAccordionProps } from './styles';

export interface IAccordionProps
  extends IStyledAccordionProps {
  trigger: string | JSX.Element;
  panel: string | JSX.Element;
};

interface IAccordionState {
  isOpen: boolean;
}

/**
 * Accordion is a toggle with a trigger and a panel
 */
// const Accordion: React.FC<IAccordionProps> = ({
//   trigger,
//   panel,
//   open = false,
//   ...rest
// }) => {
//   const [isOpen, setIsOpen] = useState(open);
//   const item = useRef<any>();

//   useEffect(
//     () => {
//       if (isOpen) {
//         item.current.style.maxHeight = `${item.current.scrollHeight}px`
//       } else {
//         item.current.style.maxHeight = '0px';
//       }
//     },
//     [isOpen]
//   );

//   return (
//     <StyledAccordion open={isOpen} {...rest}>
//       <button className="accordion_trigger" onClick={() => setIsOpen(!isOpen)}>
//         {trigger}
//       </button>
//       <div className="accordion_panel" ref={item}>
//         {panel}
//       </div>
//     </StyledAccordion>
//   );
// };

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
export { AccordionTrigger } from './trigger';

// Export main component
export { Accordion, AccordionPanel, IStyledAccordionProps };
