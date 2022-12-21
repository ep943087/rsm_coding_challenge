import { useEffect, useState } from "react";
import { BreweryModel } from "../models/RequestModels";
import BreweriesList from "./components/BreweriesList";

const LandingPage = () => {
  const [breweries, setBreweries] = useState<BreweryModel[]>([]);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries?by_city=philadelphia')
      .then((response) => response.json())
      .then((breweriesResponse: BreweryModel[]) => {
        setBreweries(breweriesResponse);
      })
      .catch((error) => {
        alert("Brewery API request failed.");
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <h1>Breweries</h1>
      <BreweriesList breweries={breweries} />
    </div>
  );
};

export default LandingPage;