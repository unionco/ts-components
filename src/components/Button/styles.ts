import { get } from 'lodash';
import { styled } from '../../styles';
import { colors } from '../../theme';
import { getVariantCSS } from '../../utils';

export interface IStyledButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  variant: keyof typeof colors;
  size?: 'small' | 'medium' | 'large';
  fill?: 'solid' | 'outline' | 'clear';
}

const sizes = (props: any) => getVariantCSS(props.theme, `buttonSizes.${props.size}`);
const fills = (props: any) => getVariantCSS(props.theme, `buttonFills.${props.fill}`);


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

  ${props => sizes(props)};
  ${props => fills(props)};
`;

export default Button;
