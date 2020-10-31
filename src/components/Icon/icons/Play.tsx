import { styled } from '../../../styles';

const Play = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html: '<polygon points="12.46 8 9 10 5.54 12 5.54 8 5.54 4 9 6 12.46 8" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default Play;
