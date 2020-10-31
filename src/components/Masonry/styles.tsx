import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';
import { objectFit } from '../../theme/mixins';

export const MasonryGridItem = styled.div`
  display: block;
  height: 50%;
  max-width: 50%;
  min-width: 50%;
  width: 50%;

  img {
    height: 100%;
    ${objectFit('cover')}
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
          height: '50%',
          paddingRight: 0,
        },
      } as any);
    case 'md':
      return css({
        height: '70%',
        ':first-child': {
          height: '30%',
        },
        ':nth-child(2)': {
          paddingLeft: 0,
        },
        ':nth-child(3)': {
          paddingRight: 0,
        },
        ':last-child': {
          height: '30%',
        },
      } as any);
    case 'lg':
      return css({
        height: '50%',
        ':nth-child(2)': {
          paddingLeft: 0,
        },
        ':nth-child(n+3)': {
          height: '30%',
          paddingRight: 0,
        },
        ':nth-child(4)': {
          height: '40%',
        },
      } as any);
    case 'xs':
    default:
      return css({
        height: '100%',
      } as any);
  }
};

export const MasonryGrid = styled.div<IMasonryGridProps>`
  display: block;
  max-width: ${themeGet('siteMaxWidth')};

  .masonry_inner {
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    height: ${(props: any) => props.minHeight || '90vmin'};
    margin: 0 auto;
    max-width: ${themeGet('siteMaxWidth')};
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    ${MasonryGridItem} {
      padding: ${(props: any) => themeGet(`space.${props.padding}`)};
      ${(props: any) => determineItemSize(props.layout)};

      &:nth-child(1) {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
      flex-flow: column nowrap;
      height: auto;

      ${MasonryGridItem} {
        max-width: 100%;
        min-width: 100%;
        padding-left: 0;
        padding-right: 0;
        width: 100%;
      }
    }
  }
`;
