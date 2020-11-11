import { SpaceProps, BorderProps, space, border, display, DisplayProps, variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { colors } from '../../theme';

export type CheckboxWrapper = SpaceProps &
  DisplayProps &
  BorderProps & {
    variant?: keyof typeof colors;
    disabled?: boolean;
  };

export type CheckboxLabel = {
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  fill?: 'default' | 'full' | 'thick';
};

export type StyledCheckboxProps = {
  disabled?: boolean;
  variant?: keyof typeof colors;
  boxSize?: 'small' | 'medium' | 'large';
  round?: boolean;
  fill?: 'default' | 'full' | 'thick';
};

const fillVariant = variant({
  prop: 'fill',
  variants: {
    default: {
      '&:after': {
        transform: 'scale(0.6)',
      },
    },
    full: {},
    thick: {
      '&:before': {
        borderWidth: '3px',
      },
      '&:after': {
        transform: 'scale(0.4)',
      },
    },
  },
});

const labelSize = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '1rem',
    },
    medium: {
      fontSize: '1.25rem',
    },
    large: {
      fontSize: '1.5rem',
    },
  },
});

export const StyledCheckbox = styled.div<CheckboxWrapper>`
  display: inline-block;
  line-height: 1;
  position: relative;
  white-space: nowrap;
  width: 100%;

  ${(props: any) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `};

  .state {
    padding: ${(props: any) => props.theme.space[3]} 0;
    margin-right: ${(props: any) => props.theme.space[3]};

    [slot='inner'] {
      color: ${(props: any) => themeGet(`colors.${props.variant}.contrast`)};
      font-size: 1em;
      height: calc(1.25em + 2px);
      left: 1px;
      opacity: 0;
      line-height: normal;
      position: absolute;
      text-align: center;
      top: 0;
      width: calc(1.25em + 2px);
      z-index: 1;

      svg {
        fill: ${(props: any) => themeGet(`colors.${props.variant}.contrast`)};
        stroke: ${(props: any) => themeGet(`colors.${props.variant}.contrast`)};
      }
    }
  }

  ${display};
  ${space};
  ${border};
`;

export const StyledCheckboxLabel = styled.label<CheckboxLabel>`
  display: inline-block;
  font-weight: ${(props: any) => props.theme.fontWeights.normal};
  margin: 0;
  min-width: calc(1em + 2px);
  position: initial;
  text-indent: 1.5em;
  position: relative;

  &:after,
  &:before {
    background-color: transparent;
    border-radius: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(props: any) => (props.round ? `border-radius: 50%;` : '')};
    content: '';
    display: block;
    height: calc(1em + 2px);
    left: 0;
    position: absolute;
    top: calc((0% - (100% - 1em)) - 8%);
    width: calc(1em + 2px);
    z-index: 0;
  }

  &:before {
    border-color: #ddd;
  }

  ${labelSize};
  ${fillVariant};
`;

export const StyledCheckboxInput = styled.input<StyledCheckboxProps>`
  cursor: pointer;
  height: 100%;
  left: 0;
  margin: 0;
  min-width: 1em;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  ${(props: any) => (props.disabled ? 'cursor: not-allowed;' : '')};

  &:not([disabled]) {
    &:hover,
    &:focus {
      ~ .state ${StyledCheckboxLabel} {
        &:before {
          border-color: ${(props: any) => themeGet(`colors.${props.variant}.base`)};
        }
      }
    }
  }

  &:checked {
    ~ .state {
      [slot='inner'] {
        opacity: 1;
      }

      ${StyledCheckboxLabel} {
        &:before {
          border-color: ${(props: any) => themeGet(`colors.${props.variant}.base`)};
        }
        &:after {
          background: ${(props: any) => themeGet(`colors.${props.variant}.base`)};
        }
      }
    }
  }
`;
