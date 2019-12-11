import { get } from 'lodash';
import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, TypographyProps, ButtonStyleProps, variant, typography, space, buttonStyle } from 'styled-system';

export type IStyledButtonProps = IThemeStyledFunction<'button'> & TypographyProps & SpaceProps & ButtonStyleProps & {
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  fill?: 'solid' | 'outline' | 'clear';
};

const sizes = variant({
  prop: 'size',
  scale: 'buttonSizes',
});
const fills = variant({
  prop: 'fill',
  scale: 'buttonFills',
});

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
  ${props => props.theme.fontSizes.base};
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

  ${typography};
  ${space};
  ${buttonStyle};
  ${sizes};
  ${fills};
`;

export default Button;
