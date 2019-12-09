import { styled } from '../../styles';
import Button from '../Button/styles';

interface ICardProps {
  layout?: 'row' | 'column';
  tall?: boolean;
  hasBackground?: boolean;
}

const CardContent = styled.div<ICardProps>`
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[3]};
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;

  h4,
  p {
    padding-bottom: ${props => props.theme.space[2]};
  }

  h4 {
    ${props => props.theme.fontSizes.lg}
  }

  ${Button} {
    margin-left: 0;
  }
`;

const Card = styled.div<ICardProps>`
  display: flex;
  flex-direction: ${(props) => props.layout};
  position: relative;

  ${(props) => props.layout === 'row' && `
    align-items: center;
    box-shadow: unset;
  `}

  ${(props) => props.hasBackground && `
    ${CardContent} {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: ${props.theme.space[6]};
      text-align: center;
    }
  `}

  ${props => props.tall && `
    justify-content: flex-end;
    min-height: 400px;
  `}

  div[slot="background"] {
    background: blue;

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
