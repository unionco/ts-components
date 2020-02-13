import { styled, IThemeStyledFunction } from '../../styles';

import { Box } from '../Box';
import { space } from 'styled-system';

type IContainerProps = IThemeStyledFunction<'div'> & {
  variant?: 'thin'|'extra-thin';
};

const Container = styled(Box)<IContainerProps>`
  max-width: ${ props => props.theme.maxWidths.xl };
  margin: 0 auto;
  padding: 0 ${ props => props.theme.space[3] };

  ${props => props.variant === 'thin' && `
    max-width: ${ props.theme.maxWidths.lg };
  `}

  ${props => props.variant === 'extra-thin' && `
    max-width: ${ props.theme.maxWidths.md };
  `}

  ${props => props.theme.media.xl} {
    padding-left: 0;
    padding-right: 0;
  }

  ${space}
`;


export { Container, IContainerProps };
