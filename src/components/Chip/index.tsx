import React from 'react';
import {
  Chip as StyledChip,
  IChipProps
} from './styles';

interface IChipComponentProps
  extends IChipProps {
    start?: JSX.Element,
    end?: JSX.Element
  }

const Chip: React.FC<IChipComponentProps> = ({
  variant = 'primary',
  outline = false,
  clickable = false,
  shape = 'block',
  ...rest
}) => {

  const props = { variant, outline, clickable, shape, ...rest };

  return (
    <StyledChip {...props}>
      {props.start && <div slot="start">{props.start}</div>}
      {props.children}
      {props.end && <div slot="end">{props.end}</div>}
    </StyledChip>
  );
}

export { Chip, StyledChip, IChipProps };
