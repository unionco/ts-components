// import React from 'react';
import { styled } from '../../styles';

interface IContainerProps {
  variant?: 'thin'|'extra-thin';
};

const Container = styled.div<IContainerProps>`
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
    padding: 0;
  }
`;


export { Container, IContainerProps };
