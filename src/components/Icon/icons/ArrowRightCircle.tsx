import { styled } from '../../../styles';

const ArrowRightCircle = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  dangerouslySetInnerHTML: {
    __html:
      '<path d="M8.49,5.33,11.2,8,8.49,10.67M11.2,8H4.8" fill="none" stroke="currentColor" /><circle cx="8" cy="8" r="7.5" fill="none" stroke="currentColor"/>',
  },
})`
  display: inline-block;
`;

export default ArrowRightCircle;
