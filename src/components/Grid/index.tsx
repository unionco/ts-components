import React from 'react';
import {
  StyledGrid,
  StyledGridItem,
  IGridItemProps,
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

const GridItem: React.FC<IGridItemComponentProps> = ({
  size = 'auto',
  ...rest
}) => {
  const props = { size, ...rest };
  return (
    <StyledGridItem {...props}>
      {props.children}
    </StyledGridItem>
  );
}

export { Grid, GridItem, StyledGrid, StyledGridItem, IGridItemComponentProps, IGridItemProps };
