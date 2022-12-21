import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BreweryModel } from "../models/RequestModels";
import GoogleMaps from 'google-map-react';

const BreweryDetailsPage = () => {
  const { breweryId } = useParams();

  const [brewery, setBrewery] = useState<BreweryModel | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.openbrewerydb.org/breweries/${breweryId}`)
      .then(response => response.json())
      .then(data => setBrewery(data))
      .catch(error => {
        alert('Brewery API request failed');
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [breweryId]);

  const getBreweryDetails = () => {
    if (!brewery) { return null }

    return (
      <div>
        <h1>{brewery.name}</h1>
        <div>
          <div>{brewery.street}</div>
          <div>{brewery.address_2}</div>
          <div>{brewery.address_3}</div>
          <div>{brewery.city}</div>
          <div>{brewery.state}</div>
          <div>{brewery.postal_code}</div>
        </div>
        <GoogleMaps
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY ?? ''}}
          defaultCenter={{ lat: 10, lng: 10 }}
          defaultZoom={1}
          options={{ scrollwheel: false }}
          style={{ width: '100%', height: '300px' }}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    );
  };

  const getLoadingMessage = () => {
    return (
      <div>Loading...</div>
    );
  };

  return (
    <div className="page">
      <Link to="/">&lt;&lt; Back to Breweries List</Link>
      {loading ? getLoadingMessage() : getBreweryDetails()}
    </div>
  );
};

export default BreweryDetailsPage;