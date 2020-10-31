import { styled } from '../../../styles';

const ArrowLeft = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html:
      '<line x1="2" y1="8" x2="15" y2="8" stroke="currentColor"/><polyline points="6.95 12.95 2 8 6.95 3.05" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default ArrowLeft;
