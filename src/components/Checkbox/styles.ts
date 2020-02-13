import { themeGet } from '@styled-system/theme-get';
import { get } from 'lodash';
import { styled, IThemeStyledFunction } from '../../styles';
import { colors } from '../../theme';
import { SpaceProps, BorderProps, space, border, display, DisplayProps } from 'styled-system';
import { variant } from 'styled-system';

export type ICheckboxWrapper = IThemeStyledFunction<'div'> & SpaceProps & DisplayProps & BorderProps & {
  variant?: keyof typeof colors;
  disabled?: boolean;
}

export type ICheckboxLabel = IThemeStyledFunction<'div'> & {
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  fill?: 'default' | 'full' | 'thick';
}

export type IStyledCheckboxProps = IThemeStyledFunction<'input'> & {
  disabled?: boolean;
  variant?: keyof typeof colors;
  boxSize?: 'small' | 'medium' | 'large';
  round?: boolean;
  fill?: 'default' | 'full' | 'thick';
}

const fillVariant = variant({
  prop: 'fill',
  variants: {
    default: {
      '&:after': {
        transform: 'scale(0.6)'
      }
    },
    full: {

    },
    thick: {
      '&:before': {
        borderWidth: '3px'
      },
      '&:after': {
        transform: 'scale(0.4)'
      }
    }
  }
})

export const CheckboxWrapper = styled.div<ICheckboxWrapper>`
  --input-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  --input-color-contrast: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};

  display: inline-block;
  line-height: 1;
  position: relative;
  white-space: nowrap;
  ${props => props.disabled ? 'cursor: not-allowed;' : ''};
  width: 100%;

  .state {
    padding: ${props => props.theme.space[3]} 0;
    margin-right: ${props => props.theme.space[3]};

    [slot="inner"] {
      color: ${props => themeGet(`colors.${props.variant}.contrast`)};
      font-size: 1em;
      height: calc(1.25em + 2px);
      left: 1px;
      opacity: 0;
      line-height: normal;
      position: absolute;
      text-align: center;
      top: 0;
      width: calc(1.25em + 2px);
      z-index: 1;

      svg {
        fill: ${props => themeGet(`colors.${props.variant}.contrast`)};
        stroke: ${props => themeGet(`colors.${props.variant}.contrast`)};
      }
    }
  }

  ${display};
  ${space};
  ${border};
`;

const labelSize = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '1rem'
    },
    medium: {
      fontSize: '1.25rem'
    },
    large: {
      fontSize: '1.5rem'
    },
  }
})

export const CheckboxLabel = styled.label<ICheckboxLabel>`
  display: inline-block;
  font-weight: ${props => props.theme.fontWeights.normal};
  margin: 0;
  min-width: calc(1em + 2px);
  position: initial;
  text-indent: 1.5em;
  position: relative;

  &:after,
  &:before {
    background-color: transparent;
    border-radius: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${props => props.round ? `border-radius: 50%;` : ''};
    content: '';
    display: block;
    height: calc(1em + 2px);
    left: 0;
    position: absolute;
    top: calc((0% - (100% - 1em)) - 8%);
    width: calc(1em + 2px);
    z-index: 0;
  }

  &:before {
    border-color: #ddd;
  }

  ${labelSize};
  ${fillVariant};
`;

export const CheckboxInput = styled.input<IStyledCheckboxProps>`
  cursor: pointer;
  height: 100%;
  left: 0;
  margin: 0;
  min-width: 1em;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  ${props => props.disabled ? 'cursor: not-allowed;' : ''};

  &:not([disabled]) {
    &:hover,
    &:focus {
      ~ .state ${CheckboxLabel} {
        &:before {
          border-color: ${props => themeGet(`colors.${props.variant}.base`)};
        }
      }
    }
  }

  &:checked {
    ~ .state {
      [slot="inner"] {
        opacity: 1;
      }

      ${CheckboxLabel} {
        &:before {
          border-color: ${props => themeGet(`colors.${props.variant}.base`)};
        }
        &:after {
          background: ${props => themeGet(`colors.${props.variant}.base`)};
        }
      }
    }
  }
`;

// export const StyledCheckbox = styled.input<IStyledCheckboxProps>`
//   bottom: 0;
//   clip: rect(1px, 1px, 1px, 1px);
//   height: 1px;
//   overflow: hidden;
//   pointer-events: none;
//   position: absolute !important;
//   width: 1px;

//   & + ${StyledLabel} {
//     --neo-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
//     --neo-color-contrast: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
//     --checked-color: ${(props) => get(props.theme, `colors.${props.checkedColor}.base`)};

//     align-items: center;
//     cursor: pointer;
//     display: flex;
//     margin-right: ${(props) => get(props.theme, 'space.3')};
//     position: relative;
//     user-select: none;
//     width: 100%;

//     &::after {
//       content: "";
//       left: 4px;
//       opacity: 0;
//       position: absolute;
//     }

//     &::before {
//       background: var(--neo-color-base);
//       border: ${(props) => get(props.theme, 'formElements.checkbox.border')};
//       border-radius: ${(props) => get(props.theme, 'formElements.checkbox.borderRadius')};
//       content: '';
//       height: ${(props) => get(props.theme, `formElements.checkbox.sizes.${props.checkboxSize}.height`)};
//       margin-right: ${(props) => get(props.theme, 'space.2')};
//       transition: all 0.1s;
//       width: ${(props) => get(props.theme, `formElements.checkbox.sizes.${props.checkboxSize}.width`)};
//     }
//   }

//   &:checked + label::after {
//     border-bottom: 2px solid var(--neo-color-contrast);
//     border-left: 2px solid var(--neo-color-contrast);
//     height: 6px;
//     opacity: 1;
//     top: 30%;
//     transform: rotate(-45deg);
//     transition: opacity 0.1s;
//     width: ${(props) => get(props.theme, `formElements.checkbox.sizes.${props.checkboxSize}.checkmark`)};
//   }

//   &:checked + label::before {
//     background: var(--checked-color);
//   }

//   &:disabled + label {
//     opacity: 0.3;
//   }

//   ${sizeVariant}
// `;
