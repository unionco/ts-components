import styled from '../../styles/styled';
import { get } from 'lodash';
import { Icon } from '../Icon/styles'

interface IChipProps {
  variant?: string;
  outline?: boolean;
  clickable?: boolean;
  disabled?: boolean;
  shape?: 'block'|'round'|'circle'
}

const Chip = styled.div<IChipProps>`
  --neo-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  --neo-color-contrast: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
  --neo-color-tint: ${(props) => get(props.theme, `colors.${props.variant}.tint`)};

  align-items: center;
  background: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  background: var(--neo-color-base);
  border: none;
  border-radius: ${props => props.shape !== 'block' ? '32px' : '2px'};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
  color: var(--neo-color-contrast);
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  line-height: 1;
  margin: ${props => props.theme.space[1]} ${props => props.theme.space[1]};
  overflow: hidden;
  padding: ${props => props.theme.space[2]} ${props => props.theme.space[3]};
  position: relative;
  vertical-align: middle;
  box-sizing: border-box;
  user-select: none;
  transition: all 0.3s ease-in-out;
  ${props => props.shape === 'circle' && `
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
  }

  [slot="start"] {
    margin-right: 8px;
  }

  [slot="end"] {
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

  ${props => props.shape === 'round' && `
    [slot="end"],
    [slot="start"] {
      background: var(--neo-color-contrast);
      border-radius: 50%;
      color: var(--neo-color-base);
      text-align: center;
      transition: all 0.3s ease-in-out;
    }
  `};

  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  ${(props) => props.clickable && `
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  `}

  ${(props) => props.outline && `
    background: transparent;
    color: var(--neo-color-base);
    border: 1px solid var(--neo-color-base);

    [slot="end"],
    [slot="start"] {
      background: var(--neo-color-base);
      color: var(--neo-color-contrast);
    }

    &:hover {
      opacity: 1;
      background: var(--neo-color-base);
      color: var(--neo-color-contrast);

      [slot="end"],
      [slot="start"] {
        background: var(--neo-color-contrast);
        color: var(--neo-color-base);
      }
    }
  `}
`;

export { Chip, IChipProps };
