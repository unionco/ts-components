import styled from 'styled-components';
import { media } from '../../theme/breakpoints';
import { themeGet } from '../../utils';
import { Container } from '../Container';
import { StyledCopy } from '../Copy';

interface OffsetContentStyleProps {
  background?: any;
  textAlign?: string;
  cardColor?: string;
}

const getAlignment = (align: string) => {
  switch (align) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
};

const StyledOffsetContent = styled.div<OffsetContentStyleProps>`
  position: relative;
  margin-bottom: 75px;

  ${Container} {
    display: flex;
    flex-flow: column;
    padding: 0;
  }

  ${media.md} {
    ${Container} {
      flex-flow: row;
      justify-content: ${(props) => getAlignment(props.textAlign || 'left')};
    }
  }
`;

const CardBackground = styled.img<OffsetContentStyleProps>`
  height: 300px;
  object-fit: cover;
  position: relative;
  width: 100%;

  ${media.md} {
    background-size: cover;
    bottom: 0;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const StyledCard = styled.div<OffsetContentStyleProps>`
  background-color: ${(props: any) => themeGet(`colors.${props.cardColor}.base`)};
  padding: 0 ${themeGet('space.5')};
  width: 100%;

  ${media.md} {
    border-radius: 12px;
    padding: 0 ${themeGet('space.10')};
    position: relative;
    max-width: 600px;
    transform: translate3d(0, 75px, 0);

    ${StyledCopy} {
      padding: ${themeGet('space.10')} 0;
    }
  }
`;

StyledOffsetContent.displayName = 'OffsetContent';
CardBackground.displayName = 'CardBackground';
StyledCard.displayName = 'StyledCard';

export { StyledOffsetContent, OffsetContentStyleProps, StyledCard, CardBackground };
