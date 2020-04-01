import { themeGet } from '@styled-system/theme-get';
import { StyledInputWrapper, StyledButton } from '../../index';
import { styled } from '../../../styles';

interface IFlyoutProps {
  open?: boolean;
}

const StyledContainer = styled.div<IFlyoutProps>`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  ${StyledButton} {
    margin: 0;
    transform: ${props => props.open ? `translate3d(100%, 0, 0)` : `translate3d(0, 0, 0)`};
  }

  ${StyledInputWrapper} {
    transition: all 0.3s ease-in-out;
    background: ${themeGet('formElements.input.backgroundColor')};

    ${props => props.open ? `
      padding-left: 60px;
      padding-right: 16px;
      opacity: 1;
      width: 100%;
    ` : `
      padding-left: 0;
      padding-right: 0;
      opacity: 0;
      width: 0%;
    `}
  }
`;

export { StyledContainer };
