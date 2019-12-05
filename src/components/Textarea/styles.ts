import { get } from 'lodash';
import { styled } from '../../styles';

export interface IStyledTextareaProps {
  resize?: boolean;
}

export const StyledTextarea = styled.textarea<IStyledTextareaProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  padding: ${(props) => get(props.theme, 'formElements.input.padding')};
  resize: ${resize => resize ? 'auto' : 'none'};
  width: 100%;
`;