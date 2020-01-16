import { get } from 'lodash';
import { styled, IThemeStyledFunction } from '../../styles';
import { StyledLabel } from '../Label';
import { SpaceProps, space } from 'styled-system';

export type IStyledSelectProps = IThemeStyledFunction<'select'> & SpaceProps & {
  disabled?: boolean;
  required?: boolean;
  position?: 'stacked' | 'inline' | 'floating';
}

export type ISelectWrapperProps = IStyledSelectProps & SpaceProps & {
  hasValue?: boolean;
}

/**
 * Select Styles
 */
export const StyledSelect = styled.select<IStyledSelectProps>`
  appearance: none;
  background: ${(props) => get(props.theme, 'formElements.input.backgroundColor')};
  border-radius: ${(props) => get(props.theme, 'formElements.input.borderRadius')};
  border: ${(props) => get(props.theme, 'formElements.input.border')};
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 0 ${(props) => get(props.theme, 'formElements.input.padding')};
  height: 64px;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:focus {
    & + ${StyledLabel} {
      /* transform: translate(0, -60%) scale(.9); */
    }
  }

  &:hover,
  &:active,
  &:focus {
    &:not([disabled]) {
      border: 2px solid #ddd;
    }
  }
`;

/**
 * Select Wrapper styles
 */
export const SelectWrapper = styled.div<ISelectWrapperProps>`
  position: relative;
  margin-bottom: ${props => get(props.theme, 'space.3')};

  svg {
    margin: ${props => get(props.theme, 'formElements.input.padding')};
    pointer-events: none;
    position: absolute;
    bottom: 6px;
    right: 0;
  }

  ${props => props.position === 'floating' && `
    svg {
      top: 6px;
    }

    ${StyledLabel} {
      position: absolute;
      top: 28px;
      line-height: 12px;
      left: 16px;
      user-select: none;
      transition: top 0.25s, left 0.25s, transform .25s, opacity .25s ease-in-out;
      transform-origin: 0 0;
      opacity: .75;

      ${props.hasValue && `
        top: 0;
        left: 0;
        transform: translate3d(0, -90%, 0) scale(0.9);
        opacity: 1;
      `}
    }
  `}

  ${props => props.position === 'inline' && `
    align-items: center;
    display: flex;

    ${StyledLabel} {
      margin-right: ${props.theme.space[4]};
      white-space: nowrap;
      min-width: 150px;
    }
  `}

  ${props => props.disabled && `
    opacity: 0.75;

    svg {
      opacity: 0.5;
    }

    ${StyledSelect} {
      cursor: not-allowed;
    }
  `}

  ${space}
`;
