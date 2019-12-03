// @ts-ignore
import React from 'react';
import { styled } from '../../styles';

/**
 * AccordionPanel is just a container for accordion content
 */
const AccordionPanel = styled.div<any>`
  padding: ${(props) => props.theme.space[2]}
`;

export { AccordionPanel };
