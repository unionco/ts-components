import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { StyledLabel } from '../Label';

export interface StyledInputProps {
  disabled?: boolean;
  required?: boolean;
}

export const StyledFiles = styled.div<StyledInputProps>`
  > div {
    align-items: center;
    background: ${themeGet('formElements.input.backgroundColor')};
    border: ${themeGet('formElements.input.border')};
    border-radius: ${themeGet('formElements.input.borderRadius')};
    display: flex;
    justify-content: space-between;
    margin-top: ${themeGet('space.4')};
    padding: ${themeGet('formElements.input.padding')};

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: inherit;
    }
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  appearance: none;
  background: ${themeGet('formElements.input.backgroundColor')};
  border: ${themeGet('formElements.input.border')};
  border-radius: ${themeGet('formElements.input.borderRadius')};
  font-family: ${themeGet('fonts.body')};
  padding: ${themeGet('formElements.input.padding')};
  width: 100%;
  outline: none;
  ${themeGet('fontSizes.base')};

  &[type='file'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;

    &:focus + label {
      outline: 1px dotted #000;
      outline: -webkit-focus-ring-color auto 5px;
    }

    & + label {
      align-items: center;
      background: ${themeGet('formElements.fileInput.backgroundColor')};
      border: ${themeGet('formElements.input.border')};
      border-radius: ${themeGet('formElements.input.borderRadius')};
      color: ${themeGet('formElements.fileInput.color')};
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: ${themeGet('formElements.input.padding')};
    }
  }

  & + ${StyledLabel} {
    &::after {
      color: ${themeGet('formElements.input.requiredColor')};
    }
  }

  ${(props: any) =>
    props.disabled &&
    `
    cursor: not-allowed;
  `}

  ${(props: any) =>
    props.required &&
    `
    & + ${StyledLabel}::after {
      content: '*';
    }
  `}
`;
