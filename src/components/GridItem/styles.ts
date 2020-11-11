import styled from 'styled-components';
import { ColorProps, FlexboxProps, LayoutProps, SpaceProps, color, flexbox, layout, space } from 'styled-system';

type StyledGridItemProps = Omit<ColorProps, 'color'> & FlexboxProps & LayoutProps & SpaceProps;

const GridItem = styled.div<StyledGridItemProps>`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 1px;

  ${flexbox};
  ${layout};
  ${space};
  ${color};
`;

export { GridItem, StyledGridItemProps };
