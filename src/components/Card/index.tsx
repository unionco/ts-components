import React from 'react';
import { Card as StyledCard, CardContent, StyledCardProps } from './styles';

interface CardProps extends StyledCardProps, Omit<StyledCardProps, 'hasBackground'> {
  start?: JSX.Element | string;
  end?: JSX.Element | string;
  background?: JSX.Element | string;
}

const Card: React.FC<CardProps> = ({ layout = 'column', tall = false, ...rest }) => {
  const props = { layout, tall, ...rest };
  return (
    <StyledCard {...props} hasBackground={!!props.background}>
      {props.background && <div slot="background">{props.background}</div>}
      {props.start && <div slot="start">{props.start}</div>}
      {props.children}
      {props.end && <div slot="end">{props.end}</div>}
    </StyledCard>
  );
};

export { Card, CardContent, StyledCard, StyledCardProps, CardProps };
