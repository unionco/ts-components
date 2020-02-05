import styled from "../../styles/styled";

const Embed = styled.div`
  height: 0;
  margin: 0 auto 25px;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

  iframe {
    border: none;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  @media (min-width: 600px) {
    margin: 0 auto;
  }
`;

Embed.displayName = 'Embed';

export { Embed };
