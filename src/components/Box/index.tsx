import {
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  size,
  space,
  textAlign,
  textStyle,
  flexbox,
  layout,
  display,
  position,
} from 'styled-system';
import { styled } from '../../styles';

export const Box = styled.div<any>`
  ${space}
  ${display}
  ${fontSize}
  ${position}
  ${fontStyle}
  ${flexbox}
  ${size}
  ${color}
  ${textStyle}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${lineHeight}
  ${textAlign}
  ${layout}
`;
