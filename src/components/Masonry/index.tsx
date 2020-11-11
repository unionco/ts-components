import React from 'react';
import { MasonryGrid as StyledMasonryGrid, MasonryGridItem, StyledMasonryGridProps } from './styles';

const layoutTypes: { [key: number]: string } = {
  2: 'xs',
  3: 'sm',
  4: 'md',
  5: 'lg',
};

export type MasonryGridProps = Omit<StyledMasonryGridProps, 'layout'>;

const MasonryGrid: React.FC<MasonryGridProps> = ({ padding = 4, ...rest }) => {
  const props = { padding, ...rest };

  const determineMinWidth = (): string => {
    const length: number = props.children ? (props.children as any).length : 0;
    const layout: string = layoutTypes[length];

    return layout ? layout : 'xs';
  };

  return (
    <StyledMasonryGrid {...props} layout={determineMinWidth()}>
      <div className="masonry_inner">{props.children}</div>
    </StyledMasonryGrid>
  );
};

export { MasonryGrid, MasonryGridItem, StyledMasonryGridProps };
