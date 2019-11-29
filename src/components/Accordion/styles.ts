import { get } from 'lodash';
import { border, BackgroundProps, compose, background, layout } from 'styled-system';
import styled, { css } from '../../styled';
import { IBaseProps, IBorderProps, ICommonProps, ITypographyProps, COMMON, TYPOGRAPHY } from '../../theme/constants';

export interface IStyledAccordionTriggerProps
  extends IBaseProps,
  BackgroundProps,
  ICommonProps,
  ITypographyProps {};

export interface IStyledAccordionPanelProps
  extends IBaseProps,
  BackgroundProps,
  ICommonProps,
  ITypographyProps {};

export interface IStyledAccordionProps
  extends IBaseProps,
  IBorderProps {
  open?: boolean;
}

export const StyledAccordionTrigger = styled.span<IStyledAccordionTriggerProps>`
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

    ${StyledAccordionTrigger} {
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
  ${border}
`;
