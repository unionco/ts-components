import { styled } from '../../../styles';

const EnvelopeFill = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<path d="M7.67,9.38l-1-.87L.74,14H15.26L9.32,8.51l-1,.87L8,9.66ZM16,13.32V2.66L10.07,7.85ZM15.24,2H.76L8,8.34ZM0,2Zm0,.66V13.32L5.93,7.85Z" fill="currentColor" />',
  },
})`
  display: inline-block;
`;

export default EnvelopeFill;
