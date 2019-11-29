// @ts-ignore
import React from 'react';
import styled from '../../styled';
import { compose, layout } from 'styled-system';
import { COMMON, TYPOGRAPHY } from '../../theme/constants';
import { IStyledAccordionPanelProps } from './styles';

/**
 * AccordionPanel is just a container for accordion content
 */
const AccordionPanel = styled.div<IStyledAccordionPanelProps>`
  ${compose(
    COMMON,
    TYPOGRAPHY,
    layout
  )}
`;

export {
  AccordionPanel,
  IStyledAccordionPanelProps
};
