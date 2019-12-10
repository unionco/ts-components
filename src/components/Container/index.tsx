// import React from 'react';
import { styled } from '../../styles';

interface IContainerProps {
  variant?: 'thin'|'extra-thin';
};

const Container = styled.div<IContainerProps>`
  max-width: ${ props => props.theme.maxWidths.xl };
  margin: 0 auto;

  ${props => props.variant === 'thin' && `
    max-width: ${ props.theme.maxWidths.lg };
  `}

  ${props => props.variant === 'extra-thin' && `
    max-width: ${ props.theme.maxWidths.md };
  `}
`;


export { Container, IContainerProps };
