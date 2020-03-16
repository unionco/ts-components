import React, { forwardRef, useRef } from 'react';
import { StyledInputWrapper, StyledInput, StyledInputError, StyledInputProps } from './styles';
import { Label } from '../Label';

type Ref = HTMLInputElement;

type InputProps = StyledInputProps & {
  label?: string;
}

const InputComponent: React.FC<InputProps> = ({ ref, label, floating, start, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStartClick = () => {
    if (inputRef.current != null) {
      inputRef.current!.focus();
    }
  };

  return (
    <StyledInputWrapper floating={floating} hasStart={start != null}>

      <StyledInput {...props} ref={inputRef as any} floating={floating} />
      {start && <div slot="start" onClick={handleStartClick}>{start}</div>}

      {label && <Label htmlFor={props.id} aria-label={props.id}>{label}</Label>}
      {props.error && <StyledInputError>{props.error}</StyledInputError>}
    </StyledInputWrapper>
  );
}

export const TextInput = forwardRef<Ref, InputProps>((props, ref) => (
  <InputComponent ref={ref} {...props} />
))

export { StyledInputWrapper, StyledInput, StyledInputError, StyledInputProps };
