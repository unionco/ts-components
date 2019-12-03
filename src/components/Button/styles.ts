import { get } from 'lodash';
import { styled, css } from '../../styles';
import { colors } from '../../theme';

// export const sizeVariants = variant({
//   prop: 'size',
//   key: 'buttonSizes'
// });

// export const fillVariants = variant({
//   prop: 'fill',
//   variants: {
//     outline: {
//       borderWidth: 1,
//       borderStyle: 'solid',
//       borderColor: 'var(--neo-color-base)',
//       background: 'transparent',
//       color: 'var(--neo-color-base)'
//     },
//     solid: {
//       background: 'var(--neo-color-base)',
//       color: 'var(--neo-color-contrast)',
//     },
//     clear: {
//       background: 'transparent',
//       color: 'var(--neo-color-base)'
//     }
//   }
// });

export interface IStyledButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  variant: keyof typeof colors;
  size?: 'small' | 'medium' | 'large';
  fill?: 'solid' | 'outline' | 'clear';
}

const sizes = (theme: any, prop: any) => css(theme.buttonSizes[prop]);
const fills = (theme: any, prop: any) => css(theme.buttonFills[prop]);

const Button = styled.button.attrs(({ disabled, onClick }: IStyledButtonProps) => ({
  onClick: disabled ? undefined : onClick,
}))<IStyledButtonProps>`
  --neo-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  --neo-color-contrast: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
  --neo-color-tint: ${(props) => get(props.theme, `colors.${props.variant}.tint`)};

  appearance: none;
  display: inline-block;
  background: var(--neo-color-base);
  border: none;
  color: var(--neo-color-contrast);
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes[1]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 20px;
  overflow: hidden;
  margin: 4px;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  [slot="start"] i {
    display: block;
    height: 100%;
    padding-right: 12px;
  }

  [slot="end"] i {
    display: block;
    height: 100%;
    padding-left: 12px;
  }

  .button-inner {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  ${props => sizes(props.theme, props.size)};
  ${props => fills(props.theme, props.fill)};
`;

export default Button;
