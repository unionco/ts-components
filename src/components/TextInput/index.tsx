import React, { forwardRef } from 'react';
import {
  StyledInputWrapper,
  StyledInput,
  StyledInputError,
  StyledInputProps,
  StyledInputIcon,
  StyledInputContainer,
} from './styles';
import { Label } from '../Label';

// [TODO] Ensure this works properly
// export type Ref = HTMLInputElement;
export type Ref = any;

export type InputProps = StyledInputProps & {
  label?: string;
  flyout?: 'start' | 'end';
}

const TextInput = forwardRef<Ref, InputProps>(({
  end,
  error,
  floating,
  label,
  start,
  ...props
}, ref) => {
  const LabelComponent = () => <Label htmlFor={props.id} aria-label={props.id}>{label}</Label>;
  const ErrorMessage = () => <StyledInputError>{error}</StyledInputError>;

  console.log('ref', ref);

  return (
    <StyledInputContainer>
      {label && !floating && <LabelComponent />}

      <StyledInputWrapper floating={floating} start={start} end={end} error={error}>
        {start && <StyledInputIcon slot="start">{start}</StyledInputIcon>}

        <StyledInput {...props} ref={ref} floating={floating} />

        {label && floating && <LabelComponent />}
        {error && floating && <ErrorMessage />}

        {end && <StyledInputIcon slot="end">{end}</StyledInputIcon>}
      </StyledInputWrapper>

      {error && !floating && <ErrorMessage />}
    </StyledInputContainer>
  );
});

export default TextInput;
export * from './styles';
