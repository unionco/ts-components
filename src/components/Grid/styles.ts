import { styled } from '../../styles';

const StyledGrid = styled.div`
  display: block;
`;

const StyledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${props => props.theme.space[4]};

  @media screen and (max-width: ${props => props.theme.siteMaxWidth}) {
    margin: 0;
  }
`;

export {
  StyledGrid,
  StyledGridContainer
}
