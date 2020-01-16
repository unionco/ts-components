import React, { forwardRef } from 'react';
import { StyledTextareaWrapper, StyledTextarea, StyledTextareaError, StyledTextareaProps } from './styles';
import { Label } from '../Label';

type Ref = HTMLTextAreaElement;

type TextareaProps = StyledTextareaProps & {
  label?: string;
}

const TextareaComponent: React.FC<TextareaProps> = ({ ref, label, floating, ...props }) => {
  return (
    <StyledTextareaWrapper floating={floating}>
      <StyledTextarea {...props} floating={floating} />
      {label && <Label htmlFor={props.id} aria-label={props.id}>{label}</Label>}
      {props.error && <StyledTextareaError>{props.error}</StyledTextareaError>}
    </StyledTextareaWrapper>
  );
}

export const Textarea = forwardRef<Ref, TextareaProps>((props, ref) => (
  <TextareaComponent ref={ref} {...props} />
))

export { StyledTextareaWrapper, StyledTextarea, StyledTextareaError, StyledTextareaProps };
