import React from 'react';
import { StyledFormGroup, StyledFormGroupProps } from './styles';

export type FormGroupProps = StyledFormGroupProps;

export const FormGroup: React.FC<FormGroupProps> = ({ children, position = 'stacked' }) => {
  return <StyledFormGroup position={position}>{children}</StyledFormGroup>;
};

export { StyledFormGroup };
