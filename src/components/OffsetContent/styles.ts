import styled from 'styled-components';
import { themeGet } from '../../utils';

interface OffsetContentStyleProps {
  background?: any;
  textAlign?: string;
  cardColor?: string;
}

const CardBackground = styled.div<OffsetContentStyleProps>`
  background: url(${(props: any) => props.background}) no-repeat center center};
  width: 100%;
  position: relative;
  height: 100%;
  background-size: cover
`;

CardBackground.displayName = 'CardBackground';

const StyledCard = styled.div<OffsetContentStyleProps>`
  background-color: ${(props: any) => themeGet(`colors.${props.cardColor}.base`)};
  max-width: 600px;
  border-radius: 12px;
  padding: 0 40px;
  margin-left: 40px;
  margin-right: 40px;
  position: absolute;
  top: 80px;
  ${(props) =>
    props.textAlign === 'left'
      ? 'left: 0'
      : props.textAlign === 'right'
      ? 'right: 0'
      : 'left: 0; right: 0; margin: auto;'};

  @media screen and (max-width: ${(props) => props.theme.maxWidths.md}) {
    display: none;
  }
`;

StyledCard.displayName = 'StyledCard';

const StyledOffsetContent = styled.div<OffsetContentStyleProps>`
  @media screen and (min-width: ${(props) => props.theme.maxWidths.lg}) {
    height: 500px;
  }

  @media screen and (max-width: ${(props) => props.theme.maxWidths.md}) {
    p {
      text-align: center;
    }

    div {
      width: 100%;
      justify-content: center;
    }
  }
`;

StyledOffsetContent.displayName = 'OffsetContent';

export { StyledOffsetContent, OffsetContentStyleProps, StyledCard, CardBackground };
