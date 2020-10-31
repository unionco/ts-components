import { styled } from '../../../styles';

const SocialFacebook = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<path d="M16,8a8,8,0,1,0-9.25,7.9V10.31h-2V8h2V6.24a2.82,2.82,0,0,1,3-3.12,11.92,11.92,0,0,1,1.79.16v2h-1A1.16,1.16,0,0,0,9.25,6.5V8h2.22l-.36,2.31H9.25V15.9A8,8,0,0,0,16,8Z"/><path d="M11.11,10.31,11.47,8H9.25V6.5a1.16,1.16,0,0,1,1.3-1.25h1v-2a11.92,11.92,0,0,0-1.79-.16,2.82,2.82,0,0,0-3,3.12V8h-2v2.31h2V15.9A7.36,7.36,0,0,0,8,16a7.36,7.36,0,0,0,1.25-.1V10.31Z" fill="white"/>',
  },
})`
  display: inline-block;
`;

export default SocialFacebook;
