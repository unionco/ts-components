import { styled } from '../../../styles';

const ArrowLeftCircle = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html: '<path d="M7.5,10.7,4.8,8,7.5,5.3M4.8,8h6.4" fill="none" stroke="currentColor" /><circle cx="8" cy="8" r="7.5" fill="none" stroke="currentColor" />'
  }
})`
  display: inline-block;
`

export default ArrowLeftCircle;
