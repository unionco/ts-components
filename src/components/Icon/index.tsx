import React from 'react';
import { Icon as StyledIcon, IStyledIconProps } from './styles';

export interface IIconProps extends IStyledIconProps {
  icon: JSX.Element;
}

const Icon: React.FC<IIconProps> = ({
  icon,
  ...rest
}) => {
  return (
    <StyledIcon {...rest}>
      {icon}
    </StyledIcon>
  )
}

export { Icon, StyledIcon };
