import React from 'react';
import { DefaultTheme } from "styled-components"
import styled from '../../styled';
import { compose, background, layout, BackgroundProps } from 'styled-system';
import { COMMON, TYPOGRAPHY, ICommonProps, ITypographyProps } from '../../theme/constants';

export interface IAccordionTriggerProps
  extends BackgroundProps,
  ICommonProps,
  ITypographyProps { };

export interface ITriggerProps extends IAccordionTriggerProps {
  theme?: DefaultTheme,
  start: string | JSX.Element,
  end: string | JSX.Element
};

const Trigger: React.FC<ITriggerProps & any> = ({ start, end, children, className }) => {
  return (
    <span className={className}>
      {start && <div slot="start">{start}</div>}
      {children}
      {end && <div slot="end">{end}</div>}
    </span>
  );
}

export const AccordionTrigger = styled(Trigger)`
  display: flex;
  i {
    height: 16px;
    width: 16px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
  ${compose(
    COMMON,
    TYPOGRAPHY,
    background,
    layout,
  )}
`;
