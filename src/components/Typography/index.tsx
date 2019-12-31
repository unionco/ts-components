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

export const Display: React.FC<StyledSystemProps> = createComponent(typographyStyles.Display, 'Display');
export const H1: React.FC<StyledSystemProps> = createComponent(typographyStyles.H1, 'H1');
export const H2: React.FC<StyledSystemProps> = createComponent(typographyStyles.H2, 'H2');
export const H3: React.FC<StyledSystemProps> = createComponent(typographyStyles.H3, 'H3');
export const H4: React.FC<StyledSystemProps> = createComponent(typographyStyles.H4, 'H4');
export const H5: React.FC<StyledSystemProps> = createComponent(typographyStyles.H5, 'H5');
export const H6: React.FC<StyledSystemProps> = createComponent(typographyStyles.H6, 'H6');
export const Paragraph: React.FC<StyledSystemProps> = createComponent(typographyStyles.Paragraph, 'Paragraph');
export const SmallParagraph: React.FC<StyledSystemProps> = createComponent(typographyStyles.SmallParagraph, 'SmallParagraph');
