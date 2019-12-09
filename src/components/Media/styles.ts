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
    padding: 0 24px;

    iframe {
      min-height: 500px;
    }
  }
`;

Embed.displayName = 'Embed';

export { Embed };
