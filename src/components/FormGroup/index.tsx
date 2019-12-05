import React from 'react';
import { styled } from '../../styles';

interface IFormGroupProps {
  position?: string;
}

const StyledFormGroup = styled.div<IFormGroupProps>`

`;

class FormGroup extends React.Component<IFormGroupProps> {
  constructor(props: IFormGroupProps) {
    super(props);
  }

  public render() {
    const {children, position} = this.props;

    return (
      <StyledFormGroup className={position}>
        {children}
      </StyledFormGroup>
    )
  }
}

export { FormGroup, StyledFormGroup, IFormGroupProps };