import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { getTrackBackground as getRRTrackBackground } from 'react-range';
import { tint } from 'polished';

export type TrackColor = {
  // [TODO] Make this a string of theme colors OR fix the usage to support both
  // theme colors and css colors
  trackColor?: string;
}

export interface IDefaultTrack extends TrackColor {
  values: any;
  min: number;
  max: number;
}


// [TODO] Hard-coded to get past pesky build process ... the last commit used
// Array.fill and .flat, but those require babel polyfills
const baseColors = [
  () => [],
  (props: IDefaultTrack) => [
    themeGet(`colors.${props.trackColor}.base`)(props),
    tint(0.8, themeGet(`colors.${props.trackColor}.base`)(props))
  ],
  (props: IDefaultTrack) => [
    tint(0.8, themeGet(`colors.${props.trackColor}.base`)(props)),
    themeGet(`colors.${props.trackColor}.base`)(props),
    tint(0.8, themeGet(`colors.${props.trackColor}.base`)(props))
  ],
]

export const getTrackBackground = (props: IDefaultTrack) => (
  getRRTrackBackground({
    values: props.values,
    colors: baseColors[props.values.length](props),
    min: props.min,
    max: props.max
  })
);

export const DefaultTrack = styled.div.attrs((props: IDefaultTrack) => ({
  style: {
    background: getTrackBackground(props)
  }
}))<IDefaultTrack>`
  width: 100%;
  height: 0.4em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
`;

DefaultTrack.defaultProps = {
  trackColor: 'primary'
};

export const DefaultHandle = styled.div`
  width: 1em;
  height: 1em;
  border: 0.125em solid ${({ trackColor }: TrackColor) => themeGet(`colors.${trackColor}.base`)};
  border-radius: 50%;
  background-color: ${({ trackColor }: TrackColor) => themeGet(`colors.${trackColor}.base`)};

  &:focus {
    outline: none;
    background-color: ${({ trackColor }: TrackColor) => themeGet(`colors.${trackColor}.contrast`)};
    border-color: ${({ trackColor }: TrackColor) => themeGet(`colors.${trackColor}.base`)};
  }
`;

DefaultHandle.defaultProps = {
  trackColor: 'primary'
};
