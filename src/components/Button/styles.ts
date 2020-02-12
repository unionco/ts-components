import { themeGet } from '@styled-system/theme-get';
import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, TypographyProps, ButtonStyleProps, variant, typography, space, buttonStyle } from 'styled-system';

export type IStyledButtonProps = IThemeStyledFunction<'button'> & TypographyProps & SpaceProps & ButtonStyleProps & {
  disabled?: boolean;
  textLink?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  fill?: 'solid' | 'outline' | 'clear';
  href?: string;
};

const sizes = variant({
  prop: 'size',
  scale: 'buttonSizes',
});

const Button = styled.button.attrs(({ disabled, onClick }: IStyledButtonProps) => ({
  onClick: disabled ? undefined : onClick,
}))<IStyledButtonProps>`
  appearance: none;
  display: inline-block;
  background: ${props => themeGet(`colors.${props.variant}.base`)};
  border: 1px solid ${props => themeGet(`colors.${props.variant}.base`)};;
  color: ${props => themeGet(`colors.${props.variant}.contrast`)};
  cursor: pointer;
  ${themeGet('fontSizes.base')};
  font-weight: ${themeGet('fontWeights.bold')};
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
          border-color: transparent; // to maintain the same, shared height
          color: ${themeGet(`colors.${props.variant}.base`)(props)};
          :hover {
            background: #eee;
          }`
      case 'outline':
        return `
          background: transparent;
          border: 1px solid ${themeGet(`colors.${props.variant}.base`)(props)};
          color: ${themeGet(`colors.${props.variant}.base`)(props)};
          :hover {
            background: ${themeGet(`colors.${props.variant}.base`)(props)};
            color: ${themeGet(`colors.${props.variant}.contrast`)(props)};
          }`
      default:
        return `${props.theme.buttonFills?.solid}`
    }
  }}

  ${props => props.textLink && `
    background: transparent;
    color: ${themeGet(`colors.${props.variant}.base`)};
    padding: 0;`
  };

  ${space};
`;

export default Button;
