import React, { useState, useRef, useEffect } from 'react';
import { AccordionPanel, StyledAccordion, IStyledAccordionProps } from './styles';

export interface IAccordionProps
  extends IStyledAccordionProps {
  trigger: string | JSX.Element;
  panel: string | JSX.Element;
};

/**
 * Accordion is a toggle with a trigger and a panel
 */
const Accordion: React.FC<IAccordionProps> = ({
  trigger,
  panel,
  open = false,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const item = useRef<any>();

  useEffect(
    () => {
      if (isOpen) {
        item.current.style.maxHeight = `${item.current.scrollHeight}px`
      } else {
        item.current.style.maxHeight = '0px';
      }
    },
    [isOpen]
  );

  return (
    <StyledAccordion open={isOpen} {...rest}>
      <button className="accordion_trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </button>
      <div className="accordion_panel" ref={item}>
        {panel}
      </div>
    </StyledAccordion>
  );
};

// Proxy exports
export { AccordionTrigger } from './trigger';

// Export main component
export { Accordion, AccordionPanel, IStyledAccordionProps };
