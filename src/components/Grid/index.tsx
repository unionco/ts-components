import React, { ReactNode } from 'react';
import { StyledGrid, StyledGridContainer, StyledGridProps } from './styles';

export interface GridProps extends StyledGridProps {
  children: ReactNode | ReactNode[];
}

const Grid: React.FC<GridProps> = (props) => {
  return (
    <StyledGrid {...props}>
      <StyledGridContainer>{props.children}</StyledGridContainer>
    </StyledGrid>
  );
};

export { Grid, StyledGrid, StyledGridContainer };
