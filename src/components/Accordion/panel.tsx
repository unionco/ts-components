// @ts-ignore
import React from 'react';
import { DefaultTheme } from "styled-components"
import styled from '../../styled';
import { compose, layout, BackgroundProps } from 'styled-system';
import { COMMON, TYPOGRAPHY, ICommonProps, ITypographyProps } from '../../theme/constants';

export interface IAccordionPanelProps
  extends BackgroundProps,
  ICommonProps,
  ITypographyProps {
    theme?: DefaultTheme
  };

export const AccordionPanel = styled.div<IAccordionPanelProps>`
  ${compose(
    COMMON,
    TYPOGRAPHY,
    layout
  )}
`;
