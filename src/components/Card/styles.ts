import { styled } from '../../styles';

interface ICardProps {
  layout?: 'row' | 'column';
  hasBackground?: boolean;
}

const CardContent = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.space[3]};
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const Card = styled.div<ICardProps>`
  display: flex;
  flex-direction: ${(props) => props.layout};
  position: relative;
  margin: ${(props) => props.theme.space[2]};

  ${(props) => props.layout === 'row' && `
    align-items: center;
  `}

  ${(props) => props.hasBackground && `
    ${CardContent} {
      align-items: center;
      justify-content: center;
      padding: ${props.theme.space[6]};
      text-align: center;
    }
  `}

  div[slot="background"] {
    img {
      height: 100%;
      left: 0;
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
    }
  }

  div[slot="start"],
  div[slot="end"] {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export { Card, CardContent, ICardProps };
