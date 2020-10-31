import { styled } from '../../../styles';

const Search = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  strokeWidth: 2,
  dangerouslySetInnerHTML: {
    __html:
      '<circle cx="6" cy="6" r="4" fill="none" stroke="currentColor" /><line x1="9" y1="9" x2="14" y2="14" stroke="currentColor" />',
  },
})`
  display: inline-block;
`;

export default Search;
