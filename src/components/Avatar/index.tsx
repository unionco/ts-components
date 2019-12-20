import React from 'react';
import { StyledAvatar } from './styles';

interface IAvatar {
  image?: string;
}

const Avatar: React.FC<IAvatar> = ({image}) => {
  return (
    <StyledAvatar>
      <img src={image} alt=""/>
    </StyledAvatar>
  );
}

export { Avatar, StyledAvatar, IAvatar };
