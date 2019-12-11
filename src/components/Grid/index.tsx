import React from 'react';
import {
  StyledGrid,
  StyledGridContainer
} from './styles';

interface IGridItemComponentProps {
  size?: 'auto' | number | number[];
  offSet?: number | number[];
}

const Grid: React.FC<any> = (props) => {
  return (
    <StyledGrid {...props}>
      <StyledGridContainer>
        {props.children}
      </StyledGridContainer>
    </StyledGrid>
  )
}

export { Grid, StyledGrid, IGridItemComponentProps };
