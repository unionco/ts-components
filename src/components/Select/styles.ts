import { SpaceProps, space } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { StyledLabel } from '../Label';

export type StyledSelectProps = SpaceProps & {
  disabled?: boolean;
  required?: boolean;
  position?: 'stacked' | 'inline' | 'floating';
};

export type SelectWrapperProps = StyledSelectProps &
  SpaceProps & {
    hasValue?: boolean;
  };

/**
 * Select Styles
 */
export const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  background: ${themeGet('formElements.input.backgroundColor')};
  border-radius: ${themeGet('formElements.input.borderRadius')};
  border: ${themeGet('formElements.input.border')};
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
  font-family: ${themeGet('fonts.body')};
  outline: none;
  padding: 0 ${themeGet('formElements.input.padding')};
  height: ${(props: any) => (!props.multiple ? '64px' : 'auto')};
  width: 100%;
  transition: all 0.3s ease-in-out;

  /* IE11 */
  &::-ms-expand {
    display: none;
  }

  ${(props: any) =>
    props.multiple &&
    `
    padding-top: ${themeGet('formElements.input.padding')(props)};
    padding-bottom: ${themeGet('formElements.input.padding')(props)};

    option {
      padding: 6px 5px;
    }
  `}

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
export const SelectWrapper = styled.div<SelectWrapperProps>`
  position: relative;
  margin-bottom: ${themeGet('space.3')};

  svg {
    bottom: 0;
    margin: auto ${themeGet('formElements.input.padding')};
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  ${(props: any) =>
    props.position === 'floating' &&
    `
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

      ${
        props.hasValue &&
        `
        top: 0;
        left: 0;
        transform: translate3d(0, -90%, 0) scale(0.9);
        opacity: 1;
      `
      }
    }
  `}

  ${(props: any) =>
    props.position === 'inline' &&
    `
    align-items: center;
    display: flex;

    ${StyledLabel} {
      margin-right: ${themeGet('space.4')(props)};
      white-space: nowrap;
      min-width: 150px;
    }
  `}

  ${(props: any) =>
    props.disabled &&
    `
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
