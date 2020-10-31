import { styled } from '../../../styles';

const Envelope = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<path d="M1,3,8,9l7-6" fill="none" stroke="currentColor"/><path d="M1,13,6.5,8M15,13,9.5,8" stroke="currentColor"/><path d="M.5,13.5V2.5h15v11Z" fill="none" stroke="currentColor"/>',
  },
})`
  display: inline-block;
`;

export default Envelope;
