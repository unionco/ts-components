import { styled } from '../../../styles';

const SocialTwitter = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html:
      '<circle cx="8" cy="8" r="8"/><path d="M6.54,12.22A5.45,5.45,0,0,0,12,6.73V6.48a3.81,3.81,0,0,0,1-1,3.67,3.67,0,0,1-1.1.31,1.91,1.91,0,0,0,.84-1.07,3.92,3.92,0,0,1-1.22.47,1.9,1.9,0,0,0-1.41-.61A1.93,1.93,0,0,0,8.16,6.51,1.61,1.61,0,0,0,8.22,7a5.46,5.46,0,0,1-4-2A2,2,0,0,0,4,5.9a1.91,1.91,0,0,0,.86,1.6A1.72,1.72,0,0,1,4,7.26v0A1.93,1.93,0,0,0,5.52,9.18,2.16,2.16,0,0,1,5,9.25a1.5,1.5,0,0,1-.37,0,1.93,1.93,0,0,0,1.8,1.34,3.85,3.85,0,0,1-2.39.83,3.44,3.44,0,0,1-.46,0A5.38,5.38,0,0,0,6.54,12.22Z" fill="white"/>',
  },
})`
  display: inline-block;
`;

export default SocialTwitter;
