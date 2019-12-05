import { get } from 'lodash';
import { styled } from '../../styles';

export interface IStyledInputProps {
  disabled?: boolean;
  required?: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  padding: ${(props) => get(props.theme, 'formElements.input.padding')};
  width: 100%;

  ${props => props.disabled && `
    cursor: not-allowed;
  `}
`;
