import { Link } from "react-router-dom";
import { BreweryModel } from "../../models/RequestModels";

interface BreweriesListProps {
  breweries: BreweryModel[];
};

const BreweriesList = (props: BreweriesListProps) => {
  return (
    <div className="breweries-list">
      {props.breweries.map(brewery => (
        <div className="brewery-card" key={brewery.id}>
          <div className="brewery-card-header">
            <h4>{brewery.name}</h4>
          </div>
          <div className="brewery-card-content">
            <div>
              {brewery.brewery_type}
            </div>
            <div>
              <div>{brewery.street}</div>
              <div>{brewery.address_2}</div>
              <div>{brewery.address_3}</div>
              <div>{brewery.city}</div>
              <div>{brewery.state}</div>
              <div>{brewery.postal_code}</div>
            </div>
            <div>
              {brewery.website_url && (
                <div>
                  <a className="link" href={brewery.website_url} target="_blank" rel="noreferrer">Website</a>
                </div>
              )}
            </div>
          </div>
          <div className="brewery-card-footer">
            <Link className="link" to={`/brewery/${brewery.id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreweriesList;