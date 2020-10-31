import styled from 'styled-components';

import { Box } from '../Box';
import { space } from 'styled-system';

export type ContainerProps = {
  variant?: 'thin' | 'extra-thin';
};

const Container = styled(Box)<ContainerProps>`
  max-width: ${(props) => props.theme.maxWidths.xl};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.space[3]};

  ${(props: any) =>
    props.variant === 'thin' &&
    `
    max-width: ${props.theme.maxWidths.lg};
  `}

  ${(props: any) =>
    props.variant === 'extra-thin' &&
    `
    max-width: ${props.theme.maxWidths.md};
  `}

  ${(props: any) => props.theme.media.xl} {
    padding-left: 0;
    padding-right: 0;
  }

  ${space}
`;

export { Container };
