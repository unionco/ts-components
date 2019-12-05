import { get } from 'lodash';
import { styled } from '../../styles';

export interface IStyledInputProps {

}

export const StyledInput = styled.input<IStyledInputProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  padding: ${(props) => get(props.theme, 'formElements.input.padding')};
  width: 100%;
`;