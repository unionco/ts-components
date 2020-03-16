import { themeGet } from '@styled-system/theme-get';
import { darken } from 'polished';
import { styled, IThemeStyledFunction } from '../../../styles';
import { StyledLabel } from '../../Label';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type StyledInputProps = IThemeStyledFunction<'input'> & InputProps & {
  floating?: boolean;
  error?: string;
  start?: string | JSX.Element;
};

export const StyledInput = styled.input<StyledInputProps>`
  appearance: none;
  background: ${themeGet('formElements.input.backgroundColor')};
  border: ${themeGet('formElements.input.border')};
  ${themeGet('fontSizes.base')};
  height: ${themeGet('formElements.input.height')};
  outline: none;
  padding: 0 ${themeGet('formElements.input.padding')};
  width: 100%;
  transition: all 0.3s ease-in-out;

  ${props => !props.floating && `
    border: 2px solid ${themeGet('formElements.input.backgroundColor')(props)};

    &:hover,
    &:focus,
    &:hover ~ div[slot="start"],
    &:focus ~ div[slot="start"] {
      border-color: ${darken(0.1, themeGet('formElements.input.backgroundColor')(props))};
    }
  `}

  ${props => props.floating && `
    &::placeholder {
      color: transparent;
    }

    & ~ ${StyledLabel} {
      transition: top 0.25s, left 0.25s, transform .25s, opacity .25s ease-in-out;
      transform-origin: 0 0;
      opacity: .75;
    }

    &:focus,
    &:not(:placeholder-shown) {
      & ~ ${StyledLabel} {
        top: 0;
        left: 0;
        transform: translate3d(0, -90%, 0) scale(0.9);
        opacity: 1;
      }
    }
  `}

  ${props => props.required && `
    & + ${StyledLabel} {
      &:after {
        content: '*'
      }
    }
  `}
`;

export const StyledInputWrapper = styled.div<{ floating?: boolean, hasStart?: boolean }>`
  align-items: center;
  border: ${themeGet('formElements.input.border')};
  border-radius: ${themeGet('formElements.input.borderRadius')};
  display: flex;
  position: relative;

  ${props => props.floating && `
    background: ${themeGet('formElements.input.backgroundColor')(props)};
    margin-bottom: ${props.theme.space[3]};
  `}

  ${props => !props.floating && `
    flex-wrap: wrap;
  `}

  div[slot="start"] {
    align-items: center;
    background: ${themeGet('formElements.input.backgroundColor')};
    display: flex;
    height: ${themeGet('formElements.input.height')};
    order: ${props => props.floating && '-1'};
    padding-left: ${themeGet('formElements.input.padding')};
    transition: all 0.3s ease-in-out;
    /* Double the padding plus 2 for the border */
    width: ${props => (parseFloat(themeGet('formElements.input.padding')(props)) * 2) + 2}px;

    ${props => !props.floating && `
      border: 2px solid ${themeGet('formElements.input.backgroundColor')(props)};
      order: -1;
    `}
  }


  ${props => (!props.floating && props.hasStart) && `
    ${StyledInput} {
      border-left: none;

      /* Double the padding for start width plus 2 for the start border */
      width: calc(100% - ${(parseFloat(themeGet('formElements.input.padding')(props)) * 2) + 2}px);
    }
    div[slot="start"] {
      border-right: none;
    }
  `}

  ${StyledLabel} {
    ${props => !props.floating && `
      order: -2;
      width: 100%;
    `};

    ${props => props.floating && `
      position: absolute;
      top: 32px;
      left: ${parseFloat(themeGet('formElements.input.padding')(props)) * (props.hasStart ? 3 : 1)}px;
      transform: translateY(-50%);
    `}
  }
`;

export const StyledInputError = styled.span`
  color: ${props => props.theme.colors.danger.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-style: italic;
`;
