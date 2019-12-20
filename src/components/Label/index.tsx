import React from 'react';
import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, ColorProps, space, color } from 'styled-system';

export type ILabelProps = IThemeStyledFunction<'label'> & SpaceProps & ColorProps & {
  htmlFor?: string;
}

const StyledLabel = styled.label<ILabelProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  color: ${props => props.theme.colors.dark.base};

  ${space}
  ${color}
`;

const Label: React.FC<ILabelProps> = ({
  htmlFor,
  children,
  ...rest
}) => (
    <StyledLabel htmlFor={htmlFor} {...rest }>
      {children}
    </StyledLabel>
)

export { Label, StyledLabel };
