import { get } from 'lodash';
import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, TypographyProps, ButtonStyleProps, variant, typography, space, buttonStyle } from 'styled-system';

export type IStyledButtonProps = IThemeStyledFunction<'button'> & TypographyProps & SpaceProps & ButtonStyleProps & {
  disabled?: boolean;
  textLink?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  fill?: 'solid' | 'outline' | 'clear';
};

const sizes = variant({
  prop: 'size',
  scale: 'buttonSizes',
});

const Button = styled.button.attrs(({ disabled, onClick }: IStyledButtonProps) => ({
  onClick: disabled ? undefined : onClick,
}))<IStyledButtonProps>`
  --neo-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  --neo-color-contrast: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
  --neo-color-tint: ${(props) => get(props.theme, `colors.${props.variant}.tint`)};

  appearance: none;
  display: inline-block;
  background: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
  background: var(--neo-color-base);
  border: none;
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrast`)};
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
  ${buttonStyle};
  ${sizes};

  ${(props) => {
    switch (props.fill) {
      case 'clear':
        return `
          background: transparent;
          color: ${get(props.theme, `colors.${props.variant}.base`)};
          :hover {
            background: #eee;
          }`
      case 'outline':
        return `
          background: transparent;
          border: 1px solid ${get(props.theme, `colors.${props.variant}.base`)};
          color: ${get(props.theme, `colors.${props.variant}.base`)};
          :hover {
            background: ${get(props.theme, `colors.${props.variant}.base`)};
            color: ${get(props.theme, `colors.${props.variant}.contrast`)};
          }`
      default:
        return `${props.theme.buttonFills?.solid}`
    }
  }}

  ${props => props.textLink && `
    background: transparent;
    color: var(--neo-color-base);
    padding: 0;`
  };

  ${space};
`;

export default Button;
