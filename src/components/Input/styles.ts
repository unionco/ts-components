import { get } from 'lodash';
import { styled } from '../../styles';
import { StyledLabel } from '../Label';

export interface IStyledInputProps {
  disabled?: boolean;
  required?: boolean;
}

export const StyledFiles = styled.div<IStyledInputProps>`
  > div {
    align-items: center;
    background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
    border: ${(props) => get(props.theme, 'formElements.input.border')};
    border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
    display: flex;
    justify-content: space-between;
    margin-top: ${(props) => get(props.theme, 'space.4')};
    padding: ${(props) => get(props.theme, 'formElements.input.padding')};

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: inherit;
    }
  }
`;

export const StyledInput = styled.input<IStyledInputProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  padding: ${(props) => get(props.theme, 'formElements.input.padding')};
  width: 100%;

  &[type="file"] {
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
      background: ${(props) => get(props.theme, 'formElements.fileInput.backgroundColor')};
      border: ${(props) => get(props.theme, 'formElements.input.border')};
      border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
      color: ${(props) => get(props.theme, 'formElements.fileInput.color')};
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: ${(props) => get(props.theme, 'formElements.input.padding')};
    }
  }

  & + ${StyledLabel} {
    &::after {
      color: ${(props) => get(props.theme, 'formElements.input.requiredColor')};
    }
  }

  ${props => props.disabled && `
    cursor: not-allowed;
  `}

  ${props => props.required && `
    & + ${StyledLabel}::after {
      content: '*';
    }
  `}
`;
