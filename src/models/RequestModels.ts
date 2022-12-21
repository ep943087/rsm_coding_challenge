type StringOrNull = string | null;

export interface BreweryModel {
  id: string;
  name: string;
  brewery_type: string;
  street: StringOrNull;
  address_2: StringOrNull;
  address_3: StringOrNull;
  city: string;
  state: string;
  county_province: StringOrNull;
  postal_code: string;
  country: string;
  longitude: StringOrNull;
  latitude: StringOrNull;
  phone: StringOrNull;
  website_url: StringOrNull;
  updated_at: string;
  created_at: string; 
};