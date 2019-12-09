import styled, { css } from '../../styles/styled';
import { IDefaultTheme } from '../../theme/theme';
import { get } from 'lodash';

interface ISectionProps {
  margin?: number | number[];
  m?: number | number[];
  mt?: number | number[];
  mb?: number | number[];
  mr?: number | number[];
  ml?: number | number[];
  mv?: number | number[];
  mh?: number | number[];
  padding?: number | number[];
  p?: number | number[];
  pt?: number | number[];
  pb?: number | number[];
  pr?: number | number[];
  pl?: number | number[];
  pv?: number | number[];
  ph?: number | number[];
  background?: string;
  image?: string;
}

const marginPropMap = {
  margin: 'margin',
  m: 'margin',
  mt: 'margin-top',
  mb: 'margin-bottom',
  mr: 'margin-right',
  ml: 'margin-left',
  mv: ['margin-top', 'margin-bottom'],
  mh: ['margin-right', 'margin-left'],
};

const paddingPropMap = {
  padding: 'padding',
  p: 'padding',
  pt: 'padding-top',
  pb: 'padding-bottom',
  pr: 'padding-right',
  pl: 'padding-left',
  pv: ['padding-top', 'padding-bottom'],
  ph: ['padding-right', 'padding-left'],
};


const calculateResponsive = (theme: IDefaultTheme, modifier: string, values?: number | number[]) => {
  if (!values) {
    return;
  }

  let normalizedValues: number[] = !Array.isArray(values) ? [values] : values;
  const breakpointKeys = Object.keys(theme.breakpoints);

  const styles = breakpointKeys.map((breakpoint: string, index: number) => {
    const responsiveValue = normalizedValues[index] ? normalizedValues[index] : normalizedValues[normalizedValues.length - 1]
    const value = get(theme, `space.${responsiveValue}`);
    return css({
      [`@media screen and (min-width: ${theme.breakpoints[breakpoint]}px)`]: {
        [modifier]: `${value}`
      }
    } as any)
  })

  return css`
    ${styles}
  `;
};

const calculateMargin = (theme: IDefaultTheme, props: ISectionProps) => {
  let cssMap: any = [];

  Object.keys(marginPropMap).map((key: string) => {
    if (props.hasOwnProperty(key)) {
      const value = get(props, key);
      const cssProp = get(marginPropMap, key);
      if (Array.isArray(cssProp)) {
        cssProp.map((prop: string) => cssMap.push(calculateResponsive(theme, prop, value)));
      } else {
        cssMap.push(calculateResponsive(theme, cssProp, value));
      }
    }
  });

  return css`${cssMap}`;
}

const calculatePadding = (theme: IDefaultTheme, props: ISectionProps) => {
  let cssMap: any = [];

  Object.keys(paddingPropMap).map((key: string) => {
    if (props.hasOwnProperty(key)) {
      const value = get(props, key);
      const cssProp = get(paddingPropMap, key);
      if(Array.isArray(cssProp)) {
        cssProp.map((prop: string) => cssMap.push(calculateResponsive(theme, prop, value)));
      } else {
        cssMap.push(calculateResponsive(theme, cssProp, value));
      }
    }
  });

  return css`${cssMap}`;
}

const Section = styled.section<ISectionProps>`
  display: block;
  width: 100%;
  transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out;
  background: ${props => get(props.theme, `colors.${props.background}.base`)};
  ${props => props.image && `background-image: url(${props.image})`};
  background-position: center;
  background-size: cover;
  ${props => calculateMargin(props.theme, props)};
  ${props => calculatePadding(props.theme, props)};
`;

export { Section, ISectionProps };
