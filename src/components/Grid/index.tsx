import React from 'react';
import {
  StyleGrid,
  StyleGridItem,
  IGridItemProps
} from './styles';

interface IGridItemComponentProps {
  size?: 'auto' | number | number[];
}

const Grid: React.FC<any> = (props) => {
  return (
    <StyleGrid {...props}>
      {props.children}
    </StyleGrid>
  )
}

const GridItem: React.FC<IGridItemComponentProps> = ({
  size = 'auto',
  ...rest
}) => {
  const props = { size, ...rest };
  return (
    <StyleGridItem {...props}>
      {props.children}
    </StyleGridItem>
  );
}

export { Grid, GridItem, IGridItemComponentProps, IGridItemProps };
