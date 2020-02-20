import { themeGet } from '@styled-system/theme-get';
import { styled, IThemeStyledFunction } from '../../../styles';
import { StyledLabel } from '../../Label';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type StyledInputProps = IThemeStyledFunction<'input'> & InputProps & {
  floating?: boolean;
  error?: string;
};

export const StyledInputWrapper = styled.div<{ floating?: boolean }>`
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;

  ${props => props.floating && `
    margin-bottom: ${props.theme.space[3]};
  `}

  ${StyledLabel} {
    order: ${props => !props.floating && '-1'};

    ${props => props.floating && `
      position: absolute;
      top: 32px;
      left: 16px;
      transform: translateY(-50%);
    `}
  }
`;

export const StyledInputError = styled.span`
  color: ${props => props.theme.colors.danger.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-style: italic;
`;

export const StyledInput = styled.input<StyledInputProps>`
  appearance: none;
  background: ${themeGet('formElements.input.backgroundColor')};
  border: ${themeGet('formElements.input.border')};
  border-radius: ${themeGet('formElements.input.borderRadius')};
  ${themeGet('fontSizes.base')};
  padding: 0 16px;
  height: 64px;
  outline: none;
  width: 100%;
  transition: all 0.3s ease-in-out;

  ${props => props.floating && `
    &::placeholder {
      color: transparent;
    }

    & + ${StyledLabel} {
      transition: top 0.25s, left 0.25s, transform .25s, opacity .25s ease-in-out;
      transform-origin: 0 0;
      opacity: .75;
    }

    &:focus,
    &:not(:placeholder-shown) {
      & + ${StyledLabel} {
        top: 0;
        left: 0;
        transform: translate3d(0, -90%, 0) scale(0.9);
        opacity: 1;
      }
    }
  `}

  ${props => !props.floating && `
    border: 2px solid ${themeGet('formElements.input.backgroundColor')(props)};

    &:hover,
    &:focus {
      border-color: #ddd;
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
