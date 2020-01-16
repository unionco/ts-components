import React, { forwardRef } from 'react';
import { StyledInputWrapper, StyledInput, StyledInputError, StyledInputProps } from './styles';
import { Label } from '../Label';

type Ref = HTMLInputElement;

type InputProps = StyledInputProps & {
  label?: string;
}

const Input: React.FC<InputProps> = ({ ref, label, floating, ...props }) => {
  return (
    <StyledInputWrapper floating={floating}>
      <StyledInput {...props} />
      {label && <Label htmlFor={props.id} aria-label={props.id}>{label}</Label>}
      {props.error && <StyledInputError>{props.error}</StyledInputError>}
    </StyledInputWrapper>
  );
}

export const InputRef = forwardRef<Ref, InputProps>((props, ref) => (
  <Input ref={ref} {...props} />
))

export { Input };
