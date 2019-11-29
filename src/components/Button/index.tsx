import React from 'react';
import StyledButton, { IStyledButtonProps } from './styles';

export interface IButtonProps
  extends IStyledButtonProps {
    start?: JSX.Element;
    end?: JSX.Element;
    iconOnly?: JSX.Element;
  };

// React Component
const Button: React.FC<IButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  fill = 'solid',
  ...rest
}) => {
  const props = { size, variant, fill, ...rest };

  return (
    <StyledButton {...props}>
      <span className="button-inner">
        {props.start && <div slot="start">{props.start}</div>}
        {props.children}
        {props.end && <div slot="end">{props.end}</div>}
        {props.iconOnly && <div slot="iconOnly">{props.iconOnly}</div>}
      </span>
    </StyledButton>
  );
}

export default Button;
