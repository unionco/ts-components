import React from 'react';
import { GridItem as StyledGridItem, IGridProps } from './styles';

interface IGridItem
  extends IGridProps {
    /** Number of columns to span defaults to auto */
  size?: 'auto' | number | number[];
  offSet?: number | number[];
}

const GridItem: React.FC<IGridItem> = ({
  size = 'auto',
  offSet,
  ...props
}) => {

  const calculateOffset = () => {
    if (!offSet) {
      return '';
    }

    if (!Array.isArray(offSet)) {
      // return offSet / 12;
      return `${(offSet / 12) * 100}%`;
    }

    return offSet.map((s: number) => {
      return `${(s / 12) * 100}%`;
    });
  }

  const calculateSize = () => {
    if (size === 'auto') {
      return size;
    }

    if (!Array.isArray(size)) {
      return size / 12;
    }

    return size.map((s: number) => {
      return s / 12;
    });
  };

  const finalSize = calculateSize();
  const finalOffSet = calculateOffset();

  return (
    <StyledGridItem {...props} flex={size === 'auto' ? 1 : ''} width={finalSize} marginLeft={finalOffSet}>
      {props.children}
    </StyledGridItem>
  );
}

export { GridItem, StyledGridItem, IGridItem };
