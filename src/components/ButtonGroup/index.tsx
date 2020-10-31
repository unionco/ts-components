import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button';

interface ButtonGroupProps {
  layout?: 'row' | 'column';
  condensed?: boolean;
  children: ReactNode | ReactNode[];
}

const StyledButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.layout === 'column' &&
    `
    align-items: flex-start;
    flex-direction: column;
  `}

  ${(props) =>
    props.condensed &&
    `
    ${StyledButton} {
      margin: 0 !important;
    }
  `}
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

export { ButtonGroup, StyledButtonGroup, ButtonGroupProps };
