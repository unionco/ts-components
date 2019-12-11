import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space, DisplayProps, FlexboxProps, display, flexbox } from 'styled-system';

export type IStyledAccordionProps = IThemeStyledFunction<'div'> & SpaceProps & {
  open?: boolean;
}

export type IStyledAccordionTriggerProps = IThemeStyledFunction<'div'> & SpaceProps;

export type IStyledAccordionPanelProps = IThemeStyledFunction<'div'> & SpaceProps & DisplayProps & FlexboxProps;

export const AccordionPanel = styled.div<IStyledAccordionPanelProps>`
  ${display};
  ${flexbox};
  ${space};
`;

export const StyledAccordionTrigger = styled.span<IStyledAccordionTriggerProps>`
  display: flex;
  ${props => props.theme.fontSizes.base};
  padding: ${(props) => props.theme.space[3]};

  i {
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
`;

export const StyledAccordion = styled.div<IStyledAccordionProps>`
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
`;
