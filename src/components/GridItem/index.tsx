import React, { ReactNode } from 'react';
import { GridItem as StyledGridItem, StyledGridItemProps } from './styles';

interface GridItemProps extends StyledGridItemProps {
  /** Number of columns to span defaults to auto */
  size?: 'auto' | number | number[];
  offSet?: number | number[];
  children?: ReactNode | ReactNode[];
}

const GridItem: React.FC<GridItemProps> = ({ size = 'auto', offSet, ...props }) => {
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
  };

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
};

export { GridItem, StyledGridItem, GridItemProps };
