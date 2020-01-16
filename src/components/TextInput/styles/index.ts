import { styled, IThemeStyledFunction } from '../../../styles';
import { get } from 'lodash';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type StyledInputProps = IThemeStyledFunction<'input'> & InputProps & {
  floating?: boolean;
  error?: string;
};

export const StyledInputWrapper = styled.div<{ floating?: boolean }>`
  background: transparent;
`;

export const StyledInputError = styled.span`
  color: ${props => props.theme.colors.danger.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-style: italic;
`;

export const StyledInput = styled.input<StyledInputProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  ${props => get(props.theme, 'fontSizes.base')};
  padding: 0 16px;
  height: 64px;
  outline: none;
  width: 100%;
`;
