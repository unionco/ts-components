import styled from 'styled-components';

const EmbedWrapper = styled.div`
  width: 100%;
`;

EmbedWrapper.displayName = 'EmbedWrapper';

const Embed = styled.div`
  height: 0;
  margin: 0 auto 25px;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

  iframe {
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media (min-width: 600px) {
    margin: 0 auto;
  }
`;

Embed.displayName = 'Embed';

export { EmbedWrapper, Embed };
