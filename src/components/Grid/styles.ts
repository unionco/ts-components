import { styled, css } from '../../styles';
import { IDefaultTheme } from '../../theme';

interface IGridItemProps {
  size: 'auto' | number | number[];
  offSet?: number | number[];
}

const calculatePosition = (theme: IDefaultTheme, modifier: string, values?: number | number[]) => {
  if (!values) {
    return;
  }
  const { gridColumns } = theme;
  let normalizedValues: number[] = !Array.isArray(values) ? [values] : values;
  const breakpointKeys = Object.keys(theme.breakpoints);

  const styles = breakpointKeys.map((breakpoint: string, index: number) => {
    const responsiveSize = normalizedValues[index] ? normalizedValues[index] : normalizedValues[normalizedValues.length - 1]
    const responsiveColSize = `${(responsiveSize / gridColumns) * 100}%`;

    return css({
      [`@media screen and (min-width: ${theme.breakpoints[breakpoint]}px})`]: {
        [modifier]: `${responsiveColSize}`,
      }
    } as any)
  })

  // const size = Array.isArray(normalizedValues) ? normalizedValues[0] : normalizedValues;
  // const colSize = `${(size / gridColumns) * 100}%`;
  return css`
    ${styles}
  `;
};

const calculateSize = (theme: IDefaultTheme, sizes: 'auto' | number | number[]) => {
  const { gridColumns } = theme;
  if (sizes === 'auto') {
    return ''
  }

  let normalizedSized: number[] = !Array.isArray(sizes) ? [sizes] : sizes;
  const breakpointKeys = Object.keys(theme.breakpoints);

  const styles = breakpointKeys.map((breakpoint: string, index: number) => {
    const responsiveSize = normalizedSized[index] ? normalizedSized[index] : normalizedSized[normalizedSized.length - 1]
    const responsiveColSize = `${(responsiveSize / gridColumns) * 100}%`;

    return css({
      [`@media screen and (min-width: ${theme.breakpoints[breakpoint]}px)`]: {
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
  ${(props) => calculatePosition(props.theme, 'margin-left', props.offSet)}
`;

export {
  StyleGrid,
  StyleGridItem,
  IGridItemProps
}
