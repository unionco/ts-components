import { styled } from '../../../styles';

const List = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html:
      '<rect width="4" height="4"/><rect y="6" width="4" height="4"/><rect y="12" width="4" height="4"/><line x1="6" y1="2" x2="16" y2="2" fill="none" stroke="currentColor" /><line x1="6" y1="8" x2="16" y2="8" fill="none" stroke="currentColor" /><line x1="6" y1="14" x2="16" y2="14" fill="none" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default List;
