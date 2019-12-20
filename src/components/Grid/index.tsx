import React from 'react';
import {
  StyledGrid,
  StyledGridContainer
} from './styles';

const Grid: React.FC<any> = (props) => {
  return (
    <StyledGrid {...props}>
      <StyledGridContainer>
        {props.children}
      </StyledGridContainer>
    </StyledGrid>
  )
}

export { Grid, StyledGrid };
