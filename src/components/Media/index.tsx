import React from 'react';
import { Image } from '../Image';
import { Embed } from './styles';

export interface IImage {
  id: string;
  url: string;
  title: string;
  filename: string;
  alt?: string;
}

export interface IMedia {
  type: string;
  image?: IImage;
  videoId?: string;
  videoProvider?: string;
}

const Media: React.FC<IMedia> = ({
  type,
  image,
  videoId,
  videoProvider
}) => {
  if (type === 'image' && image) {
    return <Image src={image.url} alt={image.alt || 'image'} />
  }

  const url = videoProvider === 'vimeo' ? `https://player.vimeo.com/video/${videoId}` : `https://www.youtube.com/embed/${videoId}`;

  return (
    <Embed>
      <iframe title={`${videoId}-${videoProvider}`} src={url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Embed>
  );
};

export { Media };
