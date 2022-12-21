import { useState } from "react";
import SearchContext from "./SearchContext";

interface SearchProviderProps {
  children: React.ReactNode;
};

const SearchProvider = (props: SearchProviderProps) => {
  const [search, setSearch] = useState<string>('Philadelphia');
  const [searchText, setSearchText] = useState<string>('Philadelphia');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const searchProviderValue = {
    isSearching,
    setIsSearching,
    search,
    setSearch,
    searchText,
    setSearchText,
  };

  return (
    <SearchContext.Provider value={searchProviderValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;