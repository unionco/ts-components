import { colors } from './colors';
import { formElements } from './form-elements';
import { fonts, fontSizes, fontWeights, lineHeights } from './typography';
import { breakpoints, media } from './breakpoints';
import { createColorMap } from '../utils/index';
import { DefaultTheme } from 'styled-components';

const colorVariants = createColorMap(colors);

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  formElements,
  lineHeights,
  breakpoints,
  media,
  siteMaxWidth: '1440px',
  maxWidths: {
    sm: '544px',
    md: '768px',
    lg: '1012px',
    xl: '1280px',
  },
  gridColumns: 12,
  borders: [0, '1px solid'],
  radii: ['0', '3px', '6px'],
  shadows: {
    sm: '0 1px 1px rgba(27, 31, 35, 0.1)',
    md: '0 1px 5px rgba(27, 31, 35, 0.15)',
    lg: '0 1px 15px rgba(27, 31, 35, 0.15)',
    xl: '0 10px 50px rgba(27, 31, 35, 0.07)',
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  buttons: {
    ...colorVariants,
  },
  buttonSizes: {
    small: {
      fontSize: '0.75rem',
      padding: `8px 16px`,
    },
    medium: {
      fontSize: '1rem',
      padding: `16px 24px`,
    },
    large: {
      fontSize: '1.25rem',
      padding: `24px 32px`,
    },
  },
  modalSizes: {
    sm: {
      height: `270px`,
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: `480px`,
    },
    md: {
      height: `360px`,
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: `640px`,
    },
    lg: {
      height: `90vh`,
      width: `90vw`,
    },
  },
  wysiwyg: {
    maxWidth: '720px',
    tightness: {
      tight: {
        lineHeight: 1.2,
      },
      default: {
        lineHeight: 1.9,
      },
      loose: {
        lineHeight: 2.5,
      },
    },
  },
};
