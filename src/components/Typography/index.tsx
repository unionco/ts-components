import React from 'react';
import { Box } from '../Box';
import { StyledSystemProps } from './styled-system-props';
import { typographyStyles } from './styles';

const createComponent: (textStyle: StyledSystemProps, displayName: string) => React.FC<StyledSystemProps> = (textStyle, displayName) => {
  const component: React.FC<StyledSystemProps> = props => (
    <Box {...textStyle} {...props}>
      {props.children}
    </Box>
  );
  component.displayName = displayName;
  return component;
};

type HeadingProps = StyledSystemProps & React.HTMLAttributes<HTMLHeadingElement>;
type TextProps = StyledSystemProps & React.HTMLAttributes<HTMLParagraphElement>;

export const Display: React.FC<HeadingProps> = createComponent(typographyStyles.Display, 'Display');
export const H1: React.FC<HeadingProps> = createComponent(typographyStyles.H1, 'H1');
export const H2: React.FC<HeadingProps> = createComponent(typographyStyles.H2, 'H2');
export const H3: React.FC<HeadingProps> = createComponent(typographyStyles.H3, 'H3');
export const H4: React.FC<HeadingProps> = createComponent(typographyStyles.H4, 'H4');
export const H5: React.FC<HeadingProps> = createComponent(typographyStyles.H5, 'H5');
export const H6: React.FC<HeadingProps> = createComponent(typographyStyles.H6, 'H6');
export const Paragraph: React.FC<TextProps> = createComponent(typographyStyles.Paragraph, 'Paragraph');
export const SmallParagraph: React.FC<TextProps> = createComponent(typographyStyles.SmallParagraph, 'SmallParagraph');
