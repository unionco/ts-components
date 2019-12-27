import styled from '../../styles/styled';
import { StyledEyebrow } from '../Eyebrow';

interface ICopyProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  copy?: string;
  twoCol?: boolean;
  action?: JSX.Element
}

const Copy = styled.div<ICopyProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${props => props.theme.space[6]};

  ${StyledEyebrow} {
    margin-bottom: ${props => props.theme.space[6]};
  }

  h1 {
    margin-bottom: ${props => props.theme.space[3]};
  }

  h5 {
    margin-bottom: ${props => props.theme.space[4]};
  }

  p {
    margin-bottom: ${props => props.theme.space[6]};
  }

  ${props => props.twoCol && `
    .copy {
      column-count: 2;
      margin-bottom: ${props.theme.space[6]};

      p:last-child {
        margin-bottom: 0;
      }
    }    
  `}
`;

export { Copy, ICopyProps };
