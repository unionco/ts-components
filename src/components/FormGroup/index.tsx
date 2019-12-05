import React from 'react';
import { StyledFormGroup, IStyledFormGroupProps } from './styles';

interface IFormGroupProps 
  extends IStyledFormGroupProps {}

class FormGroup extends React.Component<IFormGroupProps> {
  public render() {
    const {children, position = 'stacked'} = this.props;

    return (
      <StyledFormGroup position={position}>
        {children}
      </StyledFormGroup>
    )
  }
}

export { FormGroup, StyledFormGroup, IFormGroupProps };