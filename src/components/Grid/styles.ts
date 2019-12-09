import { styled, css } from '../../styles';
import { IDefaultTheme } from '../../theme';

interface IGridItemProps {
  size: 'auto' | number | number[];
  offset?: number | number[];
}

const calculateSize = (theme: IDefaultTheme, sizes: 'auto' | number | number[]) => {
  const { gridColumns } = theme;

  if (sizes === 'auto') {
    return ''
  }

  const styles = theme.breakpoints.map((breakpoint: string, index: number) => {
    const responsiveSize = Array.isArray(sizes) ? sizes[index] ? sizes[index] : sizes[sizes.length] : sizes;
    const responsiveColSize = `${(responsiveSize / gridColumns) * 100}%`;

    return css({
      [`@media screen and (min-width: ${breakpoint})`]: {
        flex: `0 0 ${responsiveColSize}`,
        width: `${responsiveColSize}`,
        'max-width': `${responsiveColSize}`
      }
    } as any)
  })

  const size = Array.isArray(sizes) ? sizes[0] : sizes;
  const colSize = `${(size / gridColumns) * 100}%`;

  return css`
    flex: 0 0 ${colSize};
    width: ${colSize};
    max-width: ${colSize};
    ${styles}
  `;
}

const StyleGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleGridItem = styled.div<IGridItemProps>`
  flex: 1;
  padding: ${(p) => p.theme.space[1]};
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 1px;
  ${(props) => calculateSize(props.theme, props.size)}
`;

export {
  StyleGrid,
  StyleGridItem,
  IGridItemProps
}
