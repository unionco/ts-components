import React from 'react';
import { Image, ImageProps } from '../Image';
import { EmbedWrapper, Embed } from './styles';

export interface MediaProps {
  type: string;
  image?: ImageProps;
  videoId?: string;
  videoProvider?: string;
}

const Media: React.FC<MediaProps> = ({ type, image, videoId, videoProvider }) => {
  if (type === 'image' && image) {
    return <Image url={image.url} alt={image.alt || 'image'} />;
  }

  const url =
    videoProvider === 'vimeo'
      ? `https://player.vimeo.com/video/${videoId}`
      : `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <EmbedWrapper>
      <Embed>
        <iframe
          title={`${videoId}-${videoProvider}`}
          src={url}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Embed>
    </EmbedWrapper>
  );
};

export { Media, Embed };
