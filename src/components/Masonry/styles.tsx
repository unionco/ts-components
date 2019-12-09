import { styled, css } from '../../styles';
import { get } from 'lodash';

export const MasonryGridItem = styled.div`
  display: block;
  height: 50%;
  max-width: 50%;
  min-width: 50%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export interface IMasonryGridProps {
  layout: string;
  minHeight?: string;
  padding?: number;
}

const determineItemSize = (layout: string) => {
  switch (layout) {
    case 'sm':
      return css({
        height: '100%',
        ':nth-child(n+2)': {
          height: '50%'
        }
      } as any)
    case 'md':
      return css({
        height: '70%',
        ':first-child': {
          height: '30%'
        },
        ':last-child': {
          height: '30%'
        }
      } as any)
    case 'lg':
      return css({
        height: '50%',
        ':nth-child(n+3)': {
          height: '30%'
        },
        ':nth-child(4)': {
          height: '40%'
        }
      } as any)
    case 'xs':
    default:
      return css({
        height: '100%'
      } as any);
  }
};

export const MasonryGrid = styled.div<IMasonryGridProps>`
  display: block;
  max-width: ${(props) => props.theme.siteMaxWidth};

  .masonry_inner {
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    height: ${props => props.minHeight || '90vmin'};
    margin: 0 auto;
    max-width: ${(props) => props.theme.siteMaxWidth};
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    ${MasonryGridItem} {
      padding: ${props => get(props.theme, `space.${props.padding}`)};
      ${props => determineItemSize(props.layout)};

    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      flex-flow: column nowrap;
      height: auto;

      ${MasonryGridItem} {
        max-width: 100%;
        min-width: 100%;
      }
    }
  }
`;
