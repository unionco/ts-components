import { styled, IThemeStyledFunction } from '../../../styles';
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space } from 'styled-system';

type IGridProps = IThemeStyledFunction<'div'> & FlexboxProps & LayoutProps & SpaceProps;

const GridItem = styled.div<IGridProps>`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 1px;

  ${flexbox};
  ${layout};
  ${space};
`;

export { GridItem, IGridProps };
