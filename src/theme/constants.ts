import {
  border,
  color,
  compose,
  display,
  shadow,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  ColorProps,
  DisplayProps,
  BorderProps,
  ShadowProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  }
});

export interface ITypographyProps extends TypographyProps {
  whiteSpace: any;
};
export const TYPOGRAPHY = compose(
  typography,
  whiteSpace
);

export interface ICommonProps extends LayoutProps, SpaceProps, ColorProps, DisplayProps, PositionProps {}
export const COMMON = compose(
  space,
  color,
  display
);

export interface IBorderProps extends BorderProps, ShadowProps {}
export const BORDER = compose(
  border,
  shadow
);
