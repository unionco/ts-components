import { styled } from '../../../styles';

const Grid = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  dangerouslySetInnerHTML: {
    __html: '<rect width="6.4" height="6.4"/><rect x="9.6" width="6.4" height="6.4"/><rect x="9.6" y="9.6" width="6.4" height="6.4"/><rect y="9.6" width="6.4" height="6.4"/>'
  }
})`
  display: inline-block;
`

export default Grid;
