import { styled, css } from '../../styles';

const galleryLargeHeight: string = '550px';
const galleryMediumHeight: string = '375px';
const gallerySmallHeight: string = '275px';

export const GalleryGridItem = styled.div`
  display: block;
  padding: 8px;
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export interface IGalleryGridProps {
  layout?: string;
}

const styles = (props: IGalleryGridProps) => css`
  display: block;
  width: 100%;

  .gallery_inner {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    width: 100%;

    ${GalleryGridItem} {
      ${(() => {
        switch (props.layout) {
          case 'up-1':
            return `height: ${galleryLargeHeight}; width: 100%;`;
          case 'up-2':
            return `height: ${galleryLargeHeight}; width: 50%;`;
          case 'up-3':
            return `height: ${galleryMediumHeight}; width: 33%;`;
          case 'up-4':
            return `height: ${gallerySmallHeight}; width: 25%;`;
          default:
            return '';
        }
      })()}
    }
  }
`;

export const GalleryGrid = styled.div<IGalleryGridProps>`
  ${styles}
`;
