import { ColorProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { styled, IThemeStyledFunction } from '../../../styles';
import { StyledLabel } from '../../Label';
import { StyledIcon } from '../../Icon';

export type FileInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type StyledFileInputProps = IThemeStyledFunction<'input'> & FileInputProps & ColorProps & {
  floating?: boolean;
  error?: string;
};

const StyledFileInput = styled.input<ColorProps>`
  cursor: pointer;
  height: 64px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;

  &:hover + ${StyledLabel} {
    border-color: ${props => themeGet(`colors.${props.color}.shade`)};
  }
`;

export const StyledInputWrapper = styled.div<StyledFileInputProps>`
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;

  ${props => props.floating && `
    margin-bottom: ${props.theme.space[3]};
  `}

  ${StyledLabel} {
    align-items: center;
    background: ${props => themeGet(`colors.${props.color}.base`)};
    color: ${props => themeGet(`colors.${props.color}.contrast`)};
    border: 2px solid ${props => themeGet(`colors.${props.color}.base`)};
    border-radius: ${themeGet('formElements.input.borderRadius')};
    display: flex;
    ${themeGet('fontSizes.sm')};
    padding: 0 16px;
    height: 64px;
    outline: none;
    width: 100%;
    transition: all 0.3s ease-in-out;

    ${StyledIcon} {
      height: 16px;
      margin-right: ${themeGet('space.3')};

      * {
        stroke: ${props => themeGet(`colors.${props.color}.contrast`)};
      }
    }
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
    border: 2px dashed ${themeGet('formElements.input.backgroundColor')};
    display: flex;
    height: 64px;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom: 4px;
  }
`;

export { StyledFileInput };
