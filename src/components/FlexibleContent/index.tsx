import React from 'react';
import { StyledFlexibleContent, Media, FlexibleContentStyleProps } from './styles';

export interface FlexibleContentProps extends FlexibleContentStyleProps {
  content?: JSX.Element;
  media?: JSX.Element;
}

const FlexibleContent: React.FC<FlexibleContentProps> = ({
  layout = 'row',
  order = 'last',
  reversed = false,
  bleed = false,
  stretch = false,
  // deprecated
  textAlign = 'left',
  content,
  media,
  useAsHero,
  ...rest
}) => {
  const props = { layout, bleed, stretch, reversed, textAlign, useAsHero, ...rest };
  return (
    <StyledFlexibleContent {...props}>
      {content && <div slot="content">{content}</div>}
      {media && <Media>{media}</Media>}
    </StyledFlexibleContent>
  );
};

export { FlexibleContent, StyledFlexibleContent, FlexibleContentStyleProps };
