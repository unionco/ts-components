import React from 'react';
import { StyledAccordionTrigger, IStyledAccordionTriggerProps } from './styles';

export interface ITriggerProps
  extends IStyledAccordionTriggerProps {
  start?: string | JSX.Element,
  end?: string | JSX.Element
};

/**
 * AccordionTrigger is a button with start and end slots for content/icons
 */
const AccordionTrigger: React.FC<ITriggerProps> = ({
  start,
  end,
  children
}) => {
  return (
    <StyledAccordionTrigger>
      {start && <div slot="start">{start}</div>}
      {children}
      {end && <div slot="end">{end}</div>}
    </StyledAccordionTrigger>
  );
}

export { AccordionTrigger, StyledAccordionTrigger };
