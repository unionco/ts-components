import React from 'react';
import { styled } from '../../styles';

interface IEyebrowProps {
  as?: React.ReactType
}

const StyledEyebrow = styled.span`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.base};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 1.5px;
  line-height: 1;
  margin: 0;
  margin-bottom: ${p => p.theme.space[2]};
  padding: 0;
  text-transform: uppercase;
`

const Eyebrow: React.FC<IEyebrowProps> = ({
  as = "p",
  ...rest
}) => {
  const props = { ...rest };
  return (
    <StyledEyebrow as={as} {...props}>
      {props.children}
    </StyledEyebrow>
  )
}

export { Eyebrow, StyledEyebrow, IEyebrowProps };
