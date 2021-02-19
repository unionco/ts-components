import React from 'react';
import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

type EyebrowProps = SpaceProps & {
  as?: React.ElementType;
};

const StyledEyebrow = styled.p`
  color: ${(p) => p.theme.colors.black};
  ${(props: any) => props.theme.fontSizes.sm};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  letter-spacing: 1.5px;
  line-height: 1;
  margin: 0;
  margin-bottom: ${(p) => p.theme.space[2]};
  padding: 0;
  text-transform: uppercase;

  ${space};
`;

const Eyebrow: React.FC<EyebrowProps> = ({ as = 'p', ...rest }) => {
  const props = { ...rest };
  return (
    <StyledEyebrow as={as} {...props} className="eyebrow">
      {props.children}
    </StyledEyebrow>
  );
};

export { Eyebrow, StyledEyebrow, EyebrowProps };
