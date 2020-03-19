import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { getTrackBackground as getRRTrackBackground } from 'react-range';
import { mix } from 'polished';

export type TrackColor = {
  // [TODO] Make this a string of theme colors OR fix the usage to support both
  // theme colors and css colors
  trackColor?: string;
}

interface IDefaultTrack extends TrackColor {
  values: any;
  min: number;
  max: number;
}

export const DefaultHandle = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${({ trackColor }: TrackColor) => themeGet(`colors.${trackColor}`)};
`;

DefaultHandle.defaultProps = {
  trackColor: 'primary.base'
};

const getBaseColors = (props: IDefaultTrack) => [
  themeGet(`colors.${props.trackColor}`)(props),
  mix(0.8, 'white', themeGet(`colors.${props.trackColor}`)(props))
];

const getColors = (props: IDefaultTrack) => {
  const count = props.values.length;
  const colors = Array(Math.floor(count / 2) + 1).fill(getBaseColors(props)).flat();

  if (count % 2 === 0) {
    colors.shift();
  }

  return colors;
}

export const getTrackBackground = (props: IDefaultTrack) => (
  getRRTrackBackground({
    values: props.values,
    colors: getColors(props),
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
  trackColor: 'primary.base'
};
