import React from 'react';
import { Chip as StyledChip, StyledChipProps } from './styles';

interface ChipProps extends StyledChipProps {
  start?: JSX.Element;
  end?: JSX.Element;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({
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
};

export { Chip, StyledChip, StyledChipProps };
