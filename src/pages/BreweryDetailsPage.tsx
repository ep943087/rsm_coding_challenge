import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BreweryModel } from "../models/RequestModels";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import leaflet from 'leaflet';

const defaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [0, 0],
});

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

  const getMap = (brewery: BreweryModel) => {
    if (!brewery.latitude || !brewery.longitude) {
      return <div className="center-text error">Longitude and Latitude is invalid</div>;
    }
    const center: [number, number] = [parseFloat(brewery.latitude), parseFloat(brewery.longitude)];
    return (
      <MapContainer
        style={{ width: '100%', height: '300px', border: '1px solid black'}}
        zoom={12}
        center={center}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={defaultIcon}>
          <Popup>
            {brewery.name}
          </Popup>
        </Marker>
      </MapContainer>
    );
  };

  const getBreweryDetails = () => {
    if (!brewery) { return null }

    return (
      <div className="set-child-margins">
        <h1 className="center-text">{brewery.name}</h1>
        <div className="center-text">
          <div>{brewery.street}</div>
          <div>{brewery.address_2}</div>
          <div>{brewery.address_3}</div>
          <div>{brewery.city}</div>
          <div>{brewery.state}</div>
          <div>{brewery.postal_code}</div>
        </div>
        {getMap(brewery)}
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
      <Link className="link" to="/">&lt;&lt; Back to Breweries List</Link>
      {loading ? getLoadingMessage() : getBreweryDetails()}
    </div>
  );
};

export default BreweryDetailsPage;