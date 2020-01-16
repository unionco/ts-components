import { styled, IThemeStyledFunction } from '../../../styles';
import { get } from 'lodash';
import { StyledLabel } from '../../Label';

type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type StyledTextareaProps = IThemeStyledFunction<'textarea'> & TextareaProps & {
  floating?: boolean;
  error?: string;
};

export const StyledTextareaWrapper = styled.div<{ floating?: boolean }>`
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

export const StyledTextareaError = styled.span`
  color: ${props => props.theme.colors.danger.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-style: italic;
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  ${props => get(props.theme, 'fontSizes.base')};
  padding: 16px;
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
    border: 2px solid ${get(props.theme, 'formElements.input.backgroundColor')};

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
