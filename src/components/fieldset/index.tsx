import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { SpaceProps, ColorProps, space, color } from 'styled-system';

export type StyledFieldsetProps = SpaceProps &
  Omit<ColorProps, 'color'> & {
    required?: boolean;
  };

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  padding: 0;
  border: none;

  & legend {
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
  }

  ${space}
  ${color}
`;

export interface FieldsetProps extends StyledFieldsetProps {
  children: ReactNode | ReactNode[];
}

const Fieldset: React.FC<FieldsetProps> = ({ children, ...rest }) => (
  <StyledFieldset {...rest}>
    {children}
  </StyledFieldset>
);

export { Fieldset, StyledFieldset };
