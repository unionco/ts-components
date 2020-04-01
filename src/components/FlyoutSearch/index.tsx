import React, { useEffect, useRef, useState } from 'react';
import { Button, Icon, TextInput } from '../index';
// import { useDebounce, useOnClickOutside } from '../../hooks';
import { Search } from '../Icon/icons';
import { StyledContainer } from './styles';

export interface ISearchChange {
  search?: string;
}

export interface IFlyoutSearch {
  search?: string;
  onChange: (e: ISearchChange) => void;
}

const FlyoutSearch: React.FC<IFlyoutSearch> = ({
  onChange
}) => {
  const root = useRef<any>();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const debouncedSearchTerm = searchTerm;

  /** Toggle the fly out and auto focus the search input */
  const toggleFlyout = (state: boolean) => {
    setShowSearch(state);
    if (state && root.current) {
      root.current.querySelector('input').focus();
    }
  }

  /** Close out the fly out on click outside */
  // useOnClickOutside(root, () => setShowSearch(false));

  /** debounce search terms */
  useEffect(
    () => {
      onChange({ search: debouncedSearchTerm });
    },
    [debouncedSearchTerm]
  );

  return (
    <StyledContainer ref={root} open={showSearch || searchTerm.length > 0}>
      <Button
        fill="clear"
        color="primary"
        onClick={() => toggleFlyout(!showSearch)}
        iconOnly={<Icon icon={<Search />} />}>
      </Button>
      <TextInput
        onChange={(e: any) => setSearchTerm(e.currentTarget.value)}
        placeholder="Search by Name, Model Number, etc..." // [TODO] make this shorter
        translate="yes" // [TODO] This is required, but errors if missing
        type="search"
        value={searchTerm}
      />
    </StyledContainer>
  )
};

export default FlyoutSearch;
