import React from 'react';
import {
  BorderRadiusProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LayoutProps,
  LetterSpacingProps,
  LineHeightProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';

export type StyledSystemProps = SpaceProps &
  FontSizeProps &
  FontStyleProps &
  SizeProps &
  TextStyleProps &
  LetterSpacingProps &
  FontFamilyProps &
  FontWeightProps &
  BorderRadiusProps &
  FontFamilyProps &
  LineHeightProps &
  TextAlignProps &
  LayoutProps & { className?: string; as?: keyof JSX.IntrinsicElements | React.ComponentType<any> }; // eslint-disable-next-line @typescript-eslint/no-explicit-any
