import { styled } from '../../../styles';

const Close = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html:
      '<line x1="2" y1="2" x2="14" y2="14" stroke="currentColor"/><line x1="14" y1="2" x2="2" y2="14" stroke="currentColor"/>',
  },
})`
  display: inline-block;
`;

export default Close;
