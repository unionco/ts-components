import styled from 'styled-components';
import { SpaceProps, space, DisplayProps, FlexboxProps, display, flexbox, BorderProps, border } from 'styled-system';

export type StyledAccordionProps = SpaceProps &
  BorderProps & {
    open?: boolean;
  };

export type StyledAccordionTriggerProps = SpaceProps & BorderProps;

export type StyledAccordionPanelProps = SpaceProps & DisplayProps & FlexboxProps & BorderProps;

export const AccordionPanel = styled.div<StyledAccordionPanelProps>`
  ${display};
  ${flexbox};
  ${space};
  ${border};
`;

export const StyledAccordionTrigger = styled.span<StyledAccordionTriggerProps>`
  display: flex;
  ${(props: any) => props.theme.fontSizes.base};

  i {
    font-style: normal;
    height: 16px;
    width: 16px;

    svg {
      height: 16px;
      width: 16px;
    }
  }

  [slot='start'],
  [slot='end'] {
    align-items: center;
    display: flex;
  }

  [slot='start'] {
    padding-right: ${(props: any) => props.theme.space[3]};
  }

  [slot='end'] {
    margin-left: auto;
    transform-origin: center center;
    transition: all 0.5s ease;
  }

  &:hover,
  &:active,
  &:focus {
    background: ${(props) => props.theme.colors.light.base};
  }

  ${space};
  ${border};
`;

export const StyledAccordion = styled.div<StyledAccordionProps>`
  display: block;

  .accordion_trigger {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    margin: 0;
    padding: 0;
    outline: none;
    width: 100%;

    ${StyledAccordionTrigger} {
      [slot='end'] {
        transform: ${(props) => (props.open ? `rotate(180deg)` : `rotate(0deg)`)};
      }
    }
  }

  .accordion_panel {
    display: block;
    max-height: 0;
    transition: all 0.5s ease;
    overflow: hidden;
  }

  ${space};
  ${border};
`;
