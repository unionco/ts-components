import { StyledSystemProps } from '../styled-system-props';

export interface TypographyStyles {
  Display: StyledSystemProps;
  H1: StyledSystemProps;
  H2: StyledSystemProps;
  H3: StyledSystemProps;
  H4: StyledSystemProps;
  H5: StyledSystemProps;
  H6: StyledSystemProps;
  Paragraph: StyledSystemProps;
  SmallParagraph: StyledSystemProps;
}

export const typographyStyles: TypographyStyles = {
  Display: {
    as: 'h1',
    lineHeight: 1.5
  },
  H1: {
    as: 'h1',
  },
  H2: {
    as: 'h2',
    lineHeight: {
      zero: 1.25,
      xl: 1.2
    },
  },
  H3: {
    as: 'h3',
    lineHeight: {
      zero: 1.4,
      xl: ( 4 / 3)
    },
  },
  H4: {
    as: 'h4',
    lineHeight: 1.5,
    fontWeight: 600
  },
  H5: {
    as: 'h5',
    lineHeight: 2
  },
  H6: {
    as: 'h6',
  },
  Paragraph: {
    as: 'p',
  },
  SmallParagraph: {
    fontSize: '0.8em',
    as: 'p',
  },
};
