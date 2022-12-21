import { useEffect, useState, useContext } from "react";
import { BreweryModel } from "../models/RequestModels";
import BreweriesList from "./components/BreweriesList";
import SearchContext from "../context/SearchContext";

const LandingPage = () => {
  const [breweries, setBreweries] = useState<BreweryModel[]>([]);
  const { search, isSearching, setIsSearching } = useContext(SearchContext);

  useEffect(() => {
    setIsSearching(true);
    const encodedSearch = encodeURI(search);
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${encodedSearch}`)
      .then((response) => response.json())
      .then((breweriesResponse: BreweryModel[]) => {
        setBreweries(breweriesResponse);
      })
      .catch((error) => {
        alert("Brewery API request failed.");
        console.log(error);
      })
      .finally(() => {
        setIsSearching(false);
      });
  }, [search, setIsSearching]);

  return (
    <div className="page set-child-margins">
      <h1 className="center-text">Breweries</h1>
      {isSearching && <strong className="center-text">Loading...</strong>}
      {!isSearching && (
        <>
          <h2 className="center-text">{breweries.length} result&#40;s&#41; for &ldquo;{search}&rdquo;</h2>
          <BreweriesList breweries={breweries} />
        </>
      )}
    </div>
  );
};

export default LandingPage;