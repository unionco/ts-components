import { ReactNode } from 'react';
import { themeGet } from '@styled-system/theme-get';
import { darken } from 'polished';
import { styled, IThemeStyledFunction } from '../../../styles';
import { StyledLabel } from '../../index';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type StyledInputProps = IThemeStyledFunction<'input'> & InputProps & {
  floating?: boolean;
  error?: string;
  start?: ReactNode;
  end?: ReactNode;
};

export type StyledInputWrapperProps = StyledInputProps & {
  isOpen?: boolean;
  flyout?: 'start' | 'end';
};

export const StyledInput = styled.input<StyledInputProps>`
  appearance: none;
  background: ${themeGet('formElements.input.backgroundColor')};
  border: ${themeGet('formElements.input.border')};
  ${themeGet('fontSizes.base')};
  height: ${themeGet('formElements.input.height')};
  outline: none;
  padding: 0 ${themeGet('formElements.input.padding')};
  width: 100%;
  transition: all 0.3s ease-in-out;

  ${props => !props.floating && `
    border: 2px solid ${themeGet('formElements.input.backgroundColor')(props)};

    &:hover,
    &:focus {
      border-color: ${darken(0.1, themeGet('formElements.input.backgroundColor')(props))};
    }
  `}

  ${props => props.floating && `
    &::placeholder {
      color: transparent;
    }

    & ~ ${StyledLabel} {
      transition: top 0.25s, left 0.25s, transform .25s, opacity .25s ease-in-out;
      transform-origin: 0 0;
      opacity: 0.75;
    }

    &:focus,
    &:not(:placeholder-shown) {
      & ~ ${StyledLabel} {
        top: 0;
        left: 0;
        transform: translate3d(0, -90%, 0) scale(0.9);
        opacity: 1;
      }
    }
  `}

  ${props => props.required && `
    & + ${StyledLabel} {
      &:after {
        content: '*'
      }
    }
  `}
`;

export const StyledInputError = styled.span`
  color: ${themeGet('colors.danger.base')};
  font-style: italic;
  font-size: 0.875em;
  line-height: 2;
`;

export const StyledInputIcon = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1em;
  height: 1em;
  margin: auto;
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  align-items: center;
  border: ${themeGet('formElements.input.border')};
  border-radius: ${themeGet('formElements.input.borderRadius')};
  display: flex;
  position: relative;

  /* Regular, non-floating label */
  ${props => !props.floating && `
    flex-wrap: wrap;

    ${StyledLabel} {
      order: -2;
      width: 100%;
    }
  `}

  /* Has Floating label */
  ${props => props.floating && `
    background: ${themeGet('formElements.input.backgroundColor')(props)};
    margin-bottom: ${props.theme.space[3]};

    ${StyledLabel} {
      position: absolute;
      top: 50%;
      left: ${parseFloat(themeGet('formElements.input.padding')(props)) * (props.start ? 3 : 1)}px;
      transform: translateY(-50%);
    }

    ${StyledInputError} {
      line-height: 1;
      margin-right: ${parseFloat(themeGet('formElements.input.padding')(props)) * (props.end ? 3 : 1)}px;
    }
  `}

  /* Has Start Icon */
  ${props => (props.start) && `
    ${StyledInputIcon}[slot="start"] {
      left: 0;
      margin-left: ${themeGet('formElements.input.padding')(props)};
    }

    ${StyledInput} {
      padding-left: ${parseFloat(themeGet('formElements.input.padding')(props)) * 3}px;
    }
  `}

  /* Has End Icon */
  ${props => (props.end) && `
    ${StyledInputIcon}[slot="end"] {
      right: 0;
      margin-right: ${themeGet('formElements.input.padding')(props)};
    }

    ${StyledInput} {
      padding-right: ${parseFloat(themeGet('formElements.input.padding')(props)) * (!props.error ? 3 : 1)}px;
    }
  `}

  ${props => props.flyout && `
    ${StyledInput} {
      width: ${props.isOpen ? '100%' : 0}
    }
  `}
`;

export const StyledInputContainer = styled.div``;
