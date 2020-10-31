import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { Icon } from '../Icon/styles';

interface StyledChipProps {
  variant?: string;
  outline?: boolean;
  clickable?: boolean;
  disabled?: boolean;
  shape?: 'block' | 'round' | 'circle';
}

const Chip = styled.div<StyledChipProps>`
  align-items: center;
  background: ${(props: any) => themeGet(`colors.${props.variant}.base`)};
  border: none;
  border-radius: ${(props: any) => (props.shape !== 'block' ? '32px' : '2px')};
  color: ${(props: any) => themeGet(`colors.${props.variant}.contrast`)};
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  line-height: 1;
  margin: ${(props: any) => props.theme.space[1]} ${(props: any) => props.theme.space[1]};
  overflow: hidden;
  padding: ${(props: any) => props.theme.space[2]} ${(props: any) => props.theme.space[3]};
  position: relative;
  vertical-align: middle;
  box-sizing: border-box;
  user-select: none;
  transition: all 0.3s ease-in-out;

  ${(props: any) =>
    props.shape === 'circle' &&
    `
    justify-content: center;
    padding: 0;
    width: 32px;
  `}

  [slot="end"],
  [slot="start"] {
    display: block;
    height: 15px;
    width: 15px;
    text-align: center;
    background: ${(props: any) => themeGet(`colors.${props.variant}.contrast`)};
    color: ${(props: any) => themeGet(`colors.${props.variant}.base`)};
  }

  [slot='start'] {
    margin-right: 8px;
  }

  [slot='end'] {
    margin-left: 8px;
  }

  ${Icon} {
    display: flex;
    height: 10px;
    width: 10px;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  ${(props: any) =>
    props.shape === 'round' &&
    `
    [slot="end"],
    [slot="start"] {
      background: ${themeGet(`colors.${props.variant}.contrast`)(props)};
      border-radius: 50%;
      color: ${themeGet(`colors.${props.variant}.base`)(props)};
      text-align: center;
      transition: all 0.3s ease-in-out;
    }
  `};

  ${(props: any) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  ${(props: any) =>
    props.clickable &&
    `
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  `}

  ${(props: any) =>
    props.outline &&
    `
    background: transparent;
    color: ${themeGet(`colors.${props.variant}.base`)(props)};
    border: 1px solid ${themeGet(`colors.${props.variant}.base`)(props)};

    [slot="end"],
    [slot="start"] {
      background: ${themeGet(`colors.${props.variant}.base`)(props)};
      color: ${themeGet(`colors.${props.variant}.contrast`)(props)};
    }

    &:hover {
      opacity: 1;
      background: ${themeGet(`colors.${props.variant}.base`)(props)};
      color: ${themeGet(`colors.${props.variant}.contrast`)(props)};

      [slot="end"],
      [slot="start"] {
        background: ${themeGet(`colors.${props.variant}.contrast`)(props)};
        color: ${themeGet(`colors.${props.variant}.base`)(props)};
      }
    }
  `}
`;

export { Chip, StyledChipProps };
