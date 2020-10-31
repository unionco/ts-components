import React from 'react';
import StyledButton, { StyledButtonProps } from './styles';

export interface ButtonProps extends StyledButtonProps {
  start?: JSX.Element;
  end?: JSX.Element;
  iconOnly?: JSX.Element;
}

/** A button with various size and color settings */
const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  fill = 'solid',
  rounded = false,
  ...rest
}) => {
  const props = { size, variant, fill, rounded, ...rest };

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
};

export { Button, StyledButton, StyledButtonProps };
