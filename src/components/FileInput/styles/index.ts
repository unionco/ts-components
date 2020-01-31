import { get } from 'lodash';
import { styled, IThemeStyledFunction } from '../../../styles';
import { StyledLabel } from '../../Label';

export type FileInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type StyledFileInputProps = IThemeStyledFunction<'input'> & FileInputProps & {
  floating?: boolean;
  error?: string;
};

const StyledFileInput = styled.input`
  cursor: pointer;
  height: 64px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;

  &:hover + ${StyledLabel} {
    border-color: #ddd;
  }
`;

export const StyledInputWrapper = styled.div<{ floating?: boolean }>`
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;

  ${props => props.floating && `
    margin-bottom: ${props.theme.space[3]};
  `}

  ${StyledLabel} {
    align-items: center;
    background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
    /* border: ${(props) => get(props.theme, 'formElements.input.border')}; */
    border: 2px solid ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
    border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
    display: flex;
    ${props => get(props.theme, 'fontSizes.sm')};
    padding: 0 16px;
    height: 64px;
    outline: none;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

export const StyledInputError = styled.span`
  color: ${props => props.theme.colors.danger.base};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-style: italic;
`;

export const StyledFiles = styled.ul`
  list-style: none;
  margin: 8px 0;
  padding: 0;

  li {
    align-items: center;
    border: 2px dashed ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
    display: flex;
    height: 64px;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom: 4px;
  }
`;

export { StyledFileInput };
