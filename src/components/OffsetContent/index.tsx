import React from 'react';
import { Container } from '../Container';
import { StyledOffsetContent, OffsetContentStyleProps, CardBackground, StyledCard } from './styles';

export interface OffsetContentProps extends OffsetContentStyleProps {
  content?: JSX.Element;
  cardColor?: string;
}

const OffsetContent: React.FC<OffsetContentProps> = ({ textAlign = 'left', content, background, cardColor }) => {
  const props = { content, background, textAlign, cardColor };
  return (
    <StyledOffsetContent {...props}>
      <CardBackground src={background.url} alt={background.alt} />
      <Container>
        <StyledCard {...props}>{content && <div slot="content">{content}</div>}</StyledCard>
      </Container>
    </StyledOffsetContent>
  );
};

export { OffsetContent, StyledCard as OffsetStyledCard, StyledOffsetContent, OffsetContentStyleProps };
