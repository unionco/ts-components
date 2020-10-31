import React from 'react';
import { StyledFormGroup, IStyledFormGroupProps } from './styles';

export type FormGroupProps = IStyledFormGroupProps;

export const FormGroup: React.FC<FormGroupProps> = ({ children, position = 'stacked' }) => {
  return <StyledFormGroup position={position}>{children}</StyledFormGroup>;
};

export { StyledFormGroup };
