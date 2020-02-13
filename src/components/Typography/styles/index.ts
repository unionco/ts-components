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
    className: 'display'
  },
  H1: {
    as: 'h1',
  },
  H2: {
    as: 'h2',
  },
  H3: {
    as: 'h3',
  },
  H4: {
    as: 'h4',
  },
  H5: {
    as: 'h5',
  },
  H6: {
    as: 'h6',
  },
  Paragraph: {
    as: 'p',
  },
  SmallParagraph: {
    as: 'p',
    className: 'small',
  },
};
