import React from 'react';
import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space } from 'styled-system';

type IEyebrowProps = IThemeStyledFunction<'any'> & SpaceProps & {
  as?: React.ReactType;
}

const StyledEyebrow = styled.p`
  color: ${p => p.theme.colors.black};
  ${props => props.theme.fontSizes.sm};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 1.5px;
  line-height: 1;
  margin: 0;
  margin-bottom: ${p => p.theme.space[2]};
  padding: 0;
  text-transform: uppercase;

  ${space};
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
