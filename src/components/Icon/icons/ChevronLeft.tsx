import { styled } from '../../../styles';

const ChevronLeft = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html: '<polyline points="11.18 14.36 4.82 8 11.18 1.64" fill="none" stroke="currentColor"/>',
  },
})`
  display: inline-block;
`;

export default ChevronLeft;
