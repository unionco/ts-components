import { styled } from '../../../styles';

const PlayFill = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html: '<polygon points="13 8 9 10.31 5 12.62 5 8 5 3.38 9 5.69 13 8"/>',
  },
})`
  display: inline-block;
`;

export default PlayFill;
