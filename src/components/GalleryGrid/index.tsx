import React from 'react';
import {
  GalleryGrid as StyledGalleryGrid,
  GalleryGridItem,
  IGalleryGridProps
} from './styles';

const layoutTypes: { [key: number]: string } = {
  1: 'up-1',
  2: 'up-2',
  3: 'up-3',
  4: 'up-4',
  5: 'up-3',
  6: 'up-3',
  7: 'up-4',
  8: 'up-4',
  9: 'up-3',
  10: 'up-4',
};

const GalleryGrid: React.FC<IGalleryGridProps> = (props) => {

  const determineMinWidth = (): string => {
    const length: number = props.children ? (props.children as any).length : 0;
    const layout: string = layoutTypes[length];

    return layout ? layout : 'up-4';
  }

  return (
    <StyledGalleryGrid {...props} layout={determineMinWidth()}>
      <div className="gallery_inner">
        {props.children}
      </div>
    </StyledGalleryGrid>
  );
}

export { GalleryGrid, GalleryGridItem, IGalleryGridProps };
