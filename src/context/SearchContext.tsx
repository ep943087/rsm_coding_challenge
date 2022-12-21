import { createContext } from "react";

export interface SearchContextInterface {
  setSearch: (search: string) => void;
  search: string;
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
};

const SearchContext = createContext<SearchContextInterface>({} as SearchContextInterface);

export default SearchContext;