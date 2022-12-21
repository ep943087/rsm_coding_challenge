import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchContext from "../context/SearchContext";

const Header = () => {

  const {search, setSearch, searchText, setSearchText, isSearching } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearchTextChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText !== search) {
      setSearch(searchText);
      navigate('/');
    }
  };

  return (
    <div className="header">
      <Link to="/"><img height="50px" src="/open-brewery-logo.png" alt="logo" /></Link>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input placeholder="Search by City" onChange={handleSearchTextChanged} value={searchText} type="text" disabled={isSearching} />
        <input type="submit" value="Search" disabled={isSearching} />
      </form>
    </div>
  );
};

export default Header;