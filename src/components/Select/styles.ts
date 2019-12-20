import { get } from 'lodash';
import { styled } from '../../styles';
import { StyledLabel } from '../Label';

export interface IStyledSelectProps {
  disabled?: boolean;
  required?: boolean;
  floating?: boolean;
}

export const StyledSelect = styled.select<IStyledSelectProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  padding: ${(props) => get(props.theme, 'formElements.input.padding')};
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:focus {
    & + ${StyledLabel} {
      transform: translate(0, -60%) scale(.9);
    }
  }

  &:hover,
  &:active,
  &:focus {
    &:not([disabled]) {
      border-bottom: 2px inset ${props => props.theme.colors.dark.base};
    }
  }
`;

export interface ISelectWrapperProps {
  floating?: boolean;
  disabled?: boolean;
  value?: boolean;
}

export const SelectWrapper = styled.div<ISelectWrapperProps>`
  position: relative;

  // Caret
  svg {
    margin: ${props => get(props.theme, 'formElements.input.padding')};
    pointer-events: none;
    position: absolute;
    bottom: 6px;
    right: 0;
  }}

  // if Floating
  ${props => props.floating && `
    svg {
      top: 6px;
    }

    ${StyledLabel} {
      padding: ${get(props.theme, 'formElements.input.padding')};
      position: absolute;
      top: 0;
      left: 0;
      user-select: none;
      transition: transform .25s, opacity .25s ease-in-out;
      transform-origin: 0 0;

      ${props.value && `
         transform: translate(0, -60%) scale(.9);
      `}
    }
  `}

  ${props => props.disabled && `
    opacity: 0.75;

    svg {
      opacity: 0.5;
    }

    ${StyledSelect} {
      cursor: not-allowed;
    }
  `}

  ${props => props.value && `
    ${StyledSelect} {
      border-bottom: 2px inset ${props.theme.colors.dark.base};
    }
  `}
`;
