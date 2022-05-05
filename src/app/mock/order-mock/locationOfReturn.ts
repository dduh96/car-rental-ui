import {OpeningHours} from "./openingHours";

export interface LocationOfReturn {
  location_id: number,
  opening_hours: OpeningHours,
  location_name: string,
  street_name: string,
  street_number: string,
  city_name: string,
  postal_code: number,
  email: string,
  phone: string,
  latitude: string,
  longitude: string
}
