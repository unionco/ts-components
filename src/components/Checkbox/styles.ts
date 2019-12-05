import { get } from 'lodash';
import { styled } from '../../styles';
import { colors } from '../../theme';
import { StyledLabel } from '../Label';

export interface IStyledCheckboxProps {
  checkedColor?: keyof typeof colors;
  variant?: keyof typeof colors;
  checkboxSize?: 'small' | 'medium' | 'large';
}

export const StyledCheckbox = styled.input<IStyledCheckboxProps>`
  bottom: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  pointer-events: none;
  position: absolute !important;
  width: 1px;

  & + ${StyledLabel} {
    --neo-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
    --neo-color-contrast: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
    --checked-color: ${(props) => get(props.theme, `colors.${props.checkedColor}.base`)};

    align-items: center;
    cursor: pointer;
    display: flex;
    margin-right: ${(props) => get(props.theme, 'space.3')};
    position: relative;
    user-select: none;
    width: 100%;

    &::after {
      content: "";
      left: 4px;
      opacity: 0;
      position: absolute;
    }

    &::before {
      background: var(--neo-color-base);
      border: ${(props) => get(props.theme, 'formElements.checkbox.border')};
      border-radius: ${(props) => get(props.theme, 'formElements.checkbox.borderRadius')};
      content: '';
      height: ${(props) => get(props.theme, `formElements.checkbox.sizes.${props.checkboxSize}.height`)};
      margin-right: ${(props) => get(props.theme, 'space.2')};
      transition: all 0.1s;
      width: ${(props) => get(props.theme, `formElements.checkbox.sizes.${props.checkboxSize}.width`)};
    }
  }

  &:checked + label::after {
    border-bottom: 2px solid var(--neo-color-contrast);
    border-left: 2px solid var(--neo-color-contrast);
    height: 6px;
    opacity: 1;
    top: 30%;
    transform: rotate(-45deg);
    transition: opacity 0.1s;
    width: ${(props) => get(props.theme, `formElements.checkbox.sizes.${props.checkboxSize}.checkmark`)};
  }

  &:checked + label::before {
    background: var(--checked-color);
  }

  &:disabled + label {
    opacity: 0.3;
  }
`;