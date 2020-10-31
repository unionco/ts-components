import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { SpaceProps, ColorProps, space, color } from 'styled-system';

export type StyledLabelProps = SpaceProps &
  Omit<ColorProps, 'color'> & {
    required?: boolean;
  };

const StyledLabel = styled.label<StyledLabelProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  color: ${(props: any) => props.theme.colors.dark.base};

  ${(props: any) =>
    props.required &&
    `
    &:after {
      content: '*';
    }
  `}

  ${space}
  ${color}
`;

export interface LabelProps extends StyledLabelProps {
  htmlFor?: string;
  children: ReactNode | ReactNode[];
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, ...rest }) => (
  <StyledLabel htmlFor={htmlFor} {...rest}>
    {children}
  </StyledLabel>
);

export { Label, StyledLabel };
