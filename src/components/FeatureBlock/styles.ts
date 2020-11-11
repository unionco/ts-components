import styled from 'styled-components';
import { Icon } from '../Icon/styles';
import { SpaceProps, space } from 'styled-system';
import { StyledButton } from '../Button';

type StyledFeatureBlockProps = SpaceProps;

const StyledFeatureBlock = styled.div<StyledFeatureBlockProps>`
  margin-bottom: 3em;

  p {
    margin-bottom: 1em;
  }

  .h4 {
    margin-bottom: 0.5em;
  }

  ${StyledButton} {
    margin: 0;
  }

  > ${Icon} {
    height: 32px;
    width: 32px;
  }

  ${space}
`;

export { StyledFeatureBlock, StyledFeatureBlockProps };
