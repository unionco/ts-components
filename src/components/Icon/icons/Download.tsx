import { styled } from '../../../styles';

const Download = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<line x1="3" y1="14.5" x2="13" y2="14.5" stroke="currentColor" /><line x1="8" y1="12" x2="8" y2="2" stroke="currentColor" /><polyline points="12 8 8 12 4 8" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default Download;
