import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { StyledLabel } from '../Label';

type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type StyledTextareaProps = TextareaProps & {
  floating?: boolean;
  error?: string;
};

export const StyledTextareaWrapper = styled.div<{ floating?: boolean }>`
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;

  ${(props: any) =>
    props.floating &&
    `
    margin-bottom: ${props.theme.space[3]};
  `}

  ${StyledLabel} {
    order: ${(props: any) => !props.floating && '-1'};

    ${(props: any) =>
      props.floating &&
      `
      position: absolute;
      top: 32px;
      left: 16px;
      transform: translateY(-50%);
    `}
  }
`;

export const StyledTextareaError = styled.span`
  color: ${themeGet('colors.danger.base')};
  font-weight: ${themeGet('fontWeights.bold')};
  font-style: italic;
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  appearance: none;
  background: ${themeGet('formElements.input.backgroundColor')};
  border: ${themeGet('formElements.input.border')};
  border-radius: ${themeGet('formElements.input.borderRadius')};
  ${themeGet('fontSizes.base')};
  padding: 16px;
  outline: none;
  width: 100%;
  transition: all 0.3s ease-in-out;

  ${(props: any) =>
    props.floating &&
    `
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

  ${(props: any) =>
    !props.floating &&
    `
    border: 2px solid ${themeGet('formElements.input.backgroundColor')(props)};

    &:hover,
    &:focus {
      border-color: #ddd;
    }
  `}

  ${(props: any) =>
    props.required &&
    `
    & + ${StyledLabel} {
      &:after {
        content: '*'
      }
    }
  `}
`;
