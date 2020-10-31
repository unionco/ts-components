import React, { ReactNode } from 'react';
import { StyledAccordionTrigger, IStyledAccordionTriggerProps } from './styles';

export interface TriggerProps extends IStyledAccordionTriggerProps {
  start?: string | JSX.Element;
  end?: string | JSX.Element;
  children: ReactNode | ReactNode[];
}

/**
 * AccordionTrigger is a button with start and end slots for content/icons
 */
const AccordionTrigger: React.FC<TriggerProps> = ({ start, end, children, ...rest }) => {
  return (
    <StyledAccordionTrigger {...rest}>
      {start && <div slot="start">{start}</div>}
      {children}
      {end && <div slot="end">{end}</div>}
    </StyledAccordionTrigger>
  );
};

export { AccordionTrigger, StyledAccordionTrigger };
