import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box } from '../Box';
import { StyledSystemProps } from './styled-system-props';
import { typographyStyles } from './styles';

type HeadingProps = StyledSystemProps & React.HTMLAttributes<HTMLHeadingElement>;
type TextProps = StyledSystemProps & React.HTMLAttributes<HTMLParagraphElement>;



// [TODO] Replace `any` below with something more explicit
const createComponent: (upperProps: any, displayName: string) => React.FC<StyledSystemProps> = (upperProps, displayName) => {
  const { slopeFontSize, ...rest } = upperProps;

  const Container = (slopeFontSize == null)
    ? Box
    : styled(Box)`
      ${props => props.theme.fontSizes[slopeFontSize]}
    `;

  const component: React.FC<StyledSystemProps> = props => (
    <Container {...rest} {...props} />
  );
  component.displayName = displayName;
  return component;
};

/* [NOTE] These slopeFontSizes are duplicated in the BaseStyles stylesheet */
export const Display: React.FC<HeadingProps> = createComponent({ ...typographyStyles.Display, slopeFontSize: '5xl' }, 'Display');
export const H1: React.FC<HeadingProps> = createComponent({ ...typographyStyles.H1, slopeFontSize: '4xl' }, 'H1');
export const H2: React.FC<HeadingProps> = createComponent({ ...typographyStyles.H2, slopeFontSize: '3xl' }, 'H2');
export const H3: React.FC<HeadingProps> = createComponent({ ...typographyStyles.H3, slopeFontSize: '2xl' }, 'H3');
export const H4: React.FC<HeadingProps> = createComponent({ ...typographyStyles.H4, slopeFontSize: 'xl' }, 'H4');
export const H5: React.FC<HeadingProps> = createComponent({ ...typographyStyles.H5, slopeFontSize: 'lg' }, 'H5');
export const H6: React.FC<HeadingProps> = createComponent(typographyStyles.H6, 'H6');
export const Paragraph: React.FC<TextProps> = createComponent(typographyStyles.Paragraph, 'Paragraph');
export const SmallParagraph: React.FC<TextProps> = createComponent(typographyStyles.SmallParagraph, 'SmallParagraph');

export const HorizontalRule = styled.hr`
  border-top: none;
  border-bottom: 1px solid ${themeGet('colors.medium.base')};
`;