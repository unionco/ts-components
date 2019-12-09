import React from 'react';
import { styled } from '../../styles';
import { StyledButton } from '../Button';

interface IButtonGroupProps {
  layout?: 'row'|'column';
  condensed?: boolean;
}

const StyledButtonGroup = styled.div<IButtonGroupProps>`
  display: flex;
  flex-wrap: wrap;

  ${(props) => props.layout === 'column' && `
    align-items: flex-start;
    flex-direction: column;
  `}

  ${(props) => props.condensed && `
    ${StyledButton} {
      margin: 0 !important;
    }
  `}
`;

const ButtonGroup: React.FC<IButtonGroupProps> = (props) => {
  return (
    <StyledButtonGroup {...props}>
      {props.children}
    </StyledButtonGroup>
  )
}

export { ButtonGroup, IButtonGroupProps };
