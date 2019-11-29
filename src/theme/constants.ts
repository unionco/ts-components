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
  layout,
  position,
} from 'styled-system';
import * as History from 'history';
import { DefaultTheme } from 'styled-components';

const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  }
});

export interface IBaseProps extends React.Props<any> {
  as?: React.ReactType;
  title?: string;
  // NOTE(@mxstbr): Necessary workaround to make <Component as={Link} to="/bla" /> work
  to?: History.LocationDescriptor;
  theme?: DefaultTheme;
  className?: string;
}

export interface ITypographyProps
  extends IBaseProps,
  TypographyProps {
  whiteSpace?: 'normal' | 'nowrap' | 'pre-wrap' | 'pre' | 'pre-line';
};
export const TYPOGRAPHY = compose(
  typography,
  whiteSpace
);

export interface ICommonProps
  extends IBaseProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
  DisplayProps,
  PositionProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}
export const COMMON = compose(
  layout,
  space,
  color,
  display,
  position,
);

export interface IBorderProps
  extends IBaseProps,
  BorderProps,
  ShadowProps {}
export const BORDER = compose(
  border,
  shadow
);
