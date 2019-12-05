import React from 'react';
import { styled } from '../../styles';

interface ILabelProps {
  htmlFor?: string;
}

const StyledLabel = styled.label<ILabelProps>`
`;

class Label extends React.Component<ILabelProps> {
  constructor(props: ILabelProps) {
    super(props);
  }

  public render() {
    const {htmlFor, children} = this.props;

    return (
      <StyledLabel htmlFor={htmlFor}>
        {children}
      </StyledLabel>
    )
  }
}

export { Label, StyledLabel, ILabelProps };
