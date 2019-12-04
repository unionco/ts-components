import React from 'react';
import {
  Card as StyledCard,
  CardContent,
  ICardProps,
} from './styles';

interface ICardComponentProps
  extends ICardProps,
  Omit<ICardProps, 'hasBackground'> {
  start?: JSX.Element | string;
  end?: JSX.Element | string;
  background?: JSX.Element | string;
}

const Card: React.FC<ICardComponentProps> = ({
  layout = "column",
  ...rest
}) => {
  const props = { layout, ...rest };
  return (
    <StyledCard {...props} hasBackground={!!props.background}>
      {props.background && <div slot="background">{props.background}</div>}
      {props.start && <div slot="start">{props.start}</div>}
      {props.children}
      {props.end && <div slot="end">{props.end}</div>}
    </StyledCard>
  )
}

export { Card, CardContent, StyledCard, ICardProps, ICardComponentProps };
