import { get } from 'lodash';
import { styled } from '../../styles';
import { StyledLabel } from '../Label';

export interface IStyledFormGroupProps {
  position?: 'stacked' | 'inline' | 'floating';
}


export const StyledFormGroup = styled.div<IStyledFormGroupProps>`
  --inline-label-margin: ${(props) => get(props.theme, 'space.3')};
  --floating-label: ${(props) => get(props.theme, 'formElements.input.floatingLabel')};
  --floating-label-padding: ${(props) => get(props.theme, 'formElements.input.padding')};

  display: flex;
  flex-direction: column-reverse;
  margin-bottom: ${(props) => get(props.theme, 'space.4')};
  position: relative;
  width: 100%;

  ${({ position }) => position === 'inline' && `
    align-items: center;
    flex-direction: row-reverse;

    ${StyledLabel} {
      margin-right: var(--inline-label-margin);
      white-space: nowrap;
    }
  `}

  ${({ position }) => position === 'floating' && `
    align-items: flex-start;
    flex-direction: column;

    .has-focus + ${StyledLabel},
    .has-value + ${StyledLabel} {
      transform: var(--floating-label);
    }

    ${StyledLabel} {
      left: 0;
      padding: var(--floating-label-padding);
      position: absolute;
      transition: transform 0.2s;
    }
  `}
`;