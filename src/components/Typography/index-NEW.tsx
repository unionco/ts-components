import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box } from '../Box';
import { StyledSystemProps } from './styled-system-props';
import { typographyStyles } from './styles';





// [TODO] Figure out how to do styled-system props, but also have dangerouslySetInnerHTML
const createComponent = (upperProps: any) => (
  (props: any) => <Box {...props} {...upperProps} />
);





export const Display= createComponent({ ...typographyStyles.Display, className: 'display' });
export const H1= createComponent(typographyStyles.H1);
export const H2= createComponent(typographyStyles.H2);
// export const H3= createComponent(typographyStyles.H3);
export const H3 = createComponent(typographyStyles.H3);
export const H4= createComponent(typographyStyles.H4);
export const HFour= createComponent(typographyStyles.H4);
export const H5= createComponent(typographyStyles.H5);
export const H6= createComponent(typographyStyles.H6);
export const Paragraph= createComponent(typographyStyles.Paragraph);
export const SmallParagraph= createComponent(typographyStyles.SmallParagraph);

export const HorizontalRule = styled.hr`
  border-top: none;
  border-bottom: 1px solid ${themeGet('colors.medium.base')};
`;
