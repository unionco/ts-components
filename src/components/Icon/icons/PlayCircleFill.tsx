import { styled } from '../../../styles';

const PlayCircleFill = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html: '<path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm.83,9.44-2.5,1.45V5.11l2.5,1.45L11.33,8Z"/>'
  }
})`
  display: inline-block;
`

export default PlayCircleFill;
