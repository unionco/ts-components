import { get } from 'lodash';
import { styled } from '../../styles';
import { colors } from '../../theme';
import { StyledLabel } from '../Label';

export interface IStyledRadioProps {
  checkedColor?: keyof typeof colors;
  variant?: keyof typeof colors;
  radioSize?: 'small' | 'medium' | 'large';
}

export const StyledRadio = styled.input<IStyledRadioProps>`
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
    margin-bottom: ${(props) => get(props.theme, 'space.3')};
    margin-right: ${(props) => get(props.theme, 'space.3')};
    position: relative;
    user-select: none;
    width: 100%;

    &::after {
      content: "";
      left: 6px;
      opacity: 0;
      position: absolute;
    }

    &::before {
      background: var(--neo-color-base);
      border: ${(props) => get(props.theme, 'formElements.radio.border')};
      border-radius: ${(props) => get(props.theme, 'formElements.radio.borderRadius')};
      content: '';
      height: ${(props) => get(props.theme, `formElements.radio.sizes.${props.radioSize}.height`)};
      margin-right: ${(props) => get(props.theme, 'space.2')};
      transition: all 0.1s;
      width: ${(props) => get(props.theme, `formElements.radio.sizes.${props.radioSize}.width`)};
    }
  }

  &:checked + label::after {
    background: var(--neo-color-contrast);
    border-radius: 50px;
    height: ${(props) => get(props.theme, `formElements.radio.sizes.${props.radioSize}.innerCircle`)};
    opacity: 1;
    transition: opacity 0.1s;
    width: ${(props) => get(props.theme, `formElements.radio.sizes.${props.radioSize}.innerCircle`)};
  }

  &:checked + label::before {
    background: var(--checked-color);
  }

  &:disabled + label {
    opacity: 0.3;
  }
`;