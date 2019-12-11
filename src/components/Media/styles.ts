import styled from "../../styles/styled";

const Embed = styled.div`
  margin: 0 auto 25px;

  iframe {
    border: none;
    min-height: 200px;
    width: 100%;
  }

  @media (min-width: 600px) {
    margin: 0 auto;

    iframe {
      min-height: 550px;
    }
  }
`;

Embed.displayName = 'Embed';

export { Embed };
