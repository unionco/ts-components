import { styled } from '../../../styles';

const PlayCircle = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<circle cx="8" cy="8" r="7.5" fill="none" stroke="currentColor" /><polygon points="10.66 8 8.66 9.15 6.66 10.31 6.66 8 6.66 5.69 8.66 6.84 10.66 8" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default PlayCircle;
