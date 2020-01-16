import React, { forwardRef } from 'react';
import { StyledInputWrapper, StyledInput, StyledInputError, StyledInputProps } from './styles';
import { Label } from '../Label';

type Ref = HTMLInputElement;

type InputProps = StyledInputProps & {
  label?: string;
}

const InputComponent: React.FC<InputProps> = ({ ref, label, floating, ...props }) => {
  return (
    <StyledInputWrapper floating={floating}>
      <StyledInput {...props} floating={floating} />
      {label && <Label htmlFor={props.id} aria-label={props.id}>{label}</Label>}
      {props.error && <StyledInputError>{props.error}</StyledInputError>}
    </StyledInputWrapper>
  );
}

export const Input = forwardRef<Ref, InputProps>((props, ref) => (
  <InputComponent ref={ref} {...props} />
))

export { StyledInputWrapper, StyledInput, StyledInputError, StyledInputProps };
