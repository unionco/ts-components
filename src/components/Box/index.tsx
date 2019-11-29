// @ts-ignore
import React from 'react';
import {
  background,
  BackgroundProps,
  bottom,
  color as styledColor,
  display,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  space as styledSpace,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';
import styled from '../../styled';
import {
  ICommonProps, ITypographyProps, IBaseProps
} from '../../theme/constants';

export interface IBoxProps
  extends IBaseProps,
  BackgroundProps,
  ICommonProps,
  ITypographyProps {};

/**
 * Box is just a ``div` with common styled-systems hooks.
 */
export const Box = styled.div<IBoxProps>`
  ${background};
  ${bottom};
  ${display};
  ${height};
  ${left};
  ${minWidth};
  ${maxWidth};
  ${minHeight};
  ${maxHeight};
  ${position};
  ${right};
  ${styledColor};
  ${styledSpace};
  ${textAlign};
  ${top};
  ${width};
  ${zIndex};
`

Box.displayName = 'Box';
