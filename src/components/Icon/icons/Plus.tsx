import { styled } from '../../../styles';

const Plus = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html:
      '<line x1="8" y1="1.5" x2="8" y2="14.5" stroke="currentColor"/><line x1="1.5" y1="8" x2="14.5" y2="8" stroke="currentColor"/>',
  },
})`
  display: inline-block;
`;

export default Plus;
