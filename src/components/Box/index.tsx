import styled from 'styled-components';
import {
  ColorProps,
  color,
  FlexboxProps,
  flexbox,
  LayoutProps,
  layout,
  SpaceProps,
  space
} from 'styled-system';

export interface IBox extends ColorProps, FlexboxProps, LayoutProps, SpaceProps {}

const Box = styled.div<IBox>`
  box-sizing: border-box;
  min-width: 0;

  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

export default Box;
