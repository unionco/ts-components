import { styled } from '../../../styles';

const Upload = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<polyline points="3 13 3 14.5 13 14.5 13 13" fill="none" stroke="currentColor" /><line x1="8" y1="2" x2="8" y2="12" stroke="currentColor" /><polyline points="4 6 8 2 12 6" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default Upload;
