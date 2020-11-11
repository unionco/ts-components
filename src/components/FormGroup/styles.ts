import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { StyledLabel } from '../Label';

export interface StyledFormGroupProps {
  position?: 'stacked' | 'inline' | 'floating';
}

export const StyledFormGroup = styled.div<StyledFormGroupProps>`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: ${themeGet('space.4')};
  position: relative;
  width: 100%;

  ${({ position }) =>
    position === 'inline' &&
    `
    align-items: center;
    flex-direction: row-reverse;

    ${StyledLabel} {
      margin-right: ${themeGet('space.3')};
      white-space: nowrap;
      min-width: 150px;
    }
  `}

  ${({ position }) =>
    position === 'floating' &&
    `
    align-items: flex-start;
    flex-direction: column;

    input:focus + ${StyledLabel},
    .has-focus + ${StyledLabel},
    .has-value + ${StyledLabel} {
      transform-origin: left;
      transform: ${themeGet('formElements.input.floatingLabel')};
    }

    ${StyledLabel} {
      left: 0;
      padding: ${themeGet('formElements.input.padding')};
      position: absolute;
      transition: transform 0.2s;
    }
  `}
`;
