import { styled } from '../../../styles';

const ChevronRight = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html: '<polyline points="4.82 1.64 11.18 8 4.82 14.36" fill="none" stroke="currentColor"/>',
  },
})`
  display: inline-block;
`;

export default ChevronRight;
