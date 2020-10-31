import { styled } from '../../../styles';

const ArrowRight = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html:
      '<line x1="14" y1="8" x2="1" y2="8" stroke="currentColor" /><polyline points="9.05 3.05 14 8 9.05 12.95" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default ArrowRight;
