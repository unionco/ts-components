import React from 'react';
import { StyledAvatar } from './styles';

export interface AvatarProps {
  image?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, alt }) => {
  return (
    <StyledAvatar>
      <img src={image} alt={alt && alt} />
    </StyledAvatar>
  );
};

export { Avatar, StyledAvatar };
