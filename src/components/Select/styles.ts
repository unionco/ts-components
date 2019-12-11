import { get } from 'lodash';
import { styled } from '../../styles';
import { StyledLabel } from '../Label';

export interface IStyledSelectProps {
  disabled?: boolean;
  required?: boolean;
  floating?: boolean;
}

export const StyledSelect = styled.div<IStyledSelectProps>`
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  position: relative;
  width: 100%;
  
  &::after {
    content: 'v';
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.has-focus select {
    opacity: 1;
  }

  select {
    appearance: none;
    background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
    border: ${(props) => get(props.theme, 'formElements.input.border')};
    border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
    cursor: pointer;
    padding: ${(props) => get(props.theme, 'formElements.input.padding')};
    width: 100%;
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

  ${props => props.floating && `
    select {
      opacity: 0;
    }
  `}
`;
