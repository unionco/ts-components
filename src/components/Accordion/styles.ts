import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space, DisplayProps, FlexboxProps, display, flexbox, BorderProps, border } from 'styled-system';

export type IStyledAccordionProps = IThemeStyledFunction<'div'> & SpaceProps & BorderProps & {
  open?: boolean;
}

export type IStyledAccordionTriggerProps = IThemeStyledFunction<'span'> & SpaceProps & BorderProps;

export type IStyledAccordionPanelProps = IThemeStyledFunction<'div'> & SpaceProps & DisplayProps & FlexboxProps & BorderProps;

export const AccordionPanel = styled.div<IStyledAccordionPanelProps>`
  ${display};
  ${flexbox};
  ${space};
  ${border};
`;

export const StyledAccordionTrigger = styled.span<IStyledAccordionTriggerProps>`
  display: flex;
  ${props => props.theme.fontSizes.base};

  i {
    font-style: normal;
    height: 16px;
    width: 16px;

    svg {
      height: 16px;
      width: 16px;
    }
  }

  [slot="start"],
  [slot="end"] {
    align-items: center;
    display: flex;
  }

  [slot="start"] {
    padding-right: ${props => props.theme.space[3]};
  }

  [slot="end"] {
    margin-left: auto;
    transform-origin: center center;
    transition: all 0.3s ease;
  }

  &:hover,
  &:active,
  &:focus {
    background: ${(props) => props.theme.colors.light.base};
  }

  ${space};
  ${border};
`;

export const StyledAccordion = styled.div<IStyledAccordionProps>`
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
      [slot="end"] {
        transform: ${(props) => props.open ? `rotate(90deg)` : `rotate(0deg)`};
      }
    }
  }

  .accordion_panel {
    display: block;
    max-height: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  ${space};
  ${border};
`;
