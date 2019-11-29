import React, { useState, useRef, useEffect } from 'react';
import { DefaultTheme } from "styled-components"
import { get } from 'lodash';
import styled, { css } from '../../styled';
import { IBaseProps } from '../../theme/constants';
import { AccordionTrigger } from './trigger';
import { AccordionPanel } from './panel';

export interface IStyledAccordionProps
  extends IBaseProps {
  theme?: DefaultTheme,
  open?: boolean;
}
export interface IAccordionProps
  extends IStyledAccordionProps {
  trigger: string | JSX.Element;
  panel: string | JSX.Element;
};

const styles = (props: IStyledAccordionProps) => css`
  display: block;

  .accordion_trigger {
    -webkit-appearance: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0;
    padding: 0;
    outline: none;
    width: 100%;

    ${AccordionTrigger} {
      padding: ${get(props, 'theme.space.3')};

      [slot="start"] {
        padding-right: ${get(props, 'theme.space.3')};
      }

      [slot="end"] {
        margin-left: auto;
        transform: ${props.open ? `rotate(180deg)` : `rotate(0deg)`};
        transition: all 0.3s ease;
        transform-origin: center center;
      }
    }

    &:hover,
    &:active,
    &:focus {
      background: ${get(props, 'theme.colors.light.base')};
    }
  }

  .accordion_panel {
    display: block;
    max-height: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }
`;

export const StyledAccordion = styled.div<IStyledAccordionProps>`
  ${styles}
`;

const Accordion: React.FC<IAccordionProps> = ({
  trigger,
  panel,
  open = false,
  className,
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
    <StyledAccordion className={className} open={isOpen}>
      <button className="accordion_trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </button>
      <div className="accordion_panel" ref={item}>
        {panel}
      </div>
    </StyledAccordion>
  );
};

export { Accordion, AccordionTrigger, AccordionPanel };
