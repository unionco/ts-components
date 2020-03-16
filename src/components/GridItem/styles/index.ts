import { styled, IThemeStyledFunction } from '../../../styles';
import { ColorProps, FlexboxProps, LayoutProps, SpaceProps, color, flexbox, layout, space } from 'styled-system';

type IGridProps = IThemeStyledFunction<'div'> & ColorProps & FlexboxProps & LayoutProps & SpaceProps;

const GridItem = styled.div<IGridProps>`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 1px;


  ${flexbox};
  ${layout};
  ${space};
  ${color};
`;

export { GridItem, IGridProps };
