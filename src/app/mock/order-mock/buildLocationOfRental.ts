import {LocationOfRental} from "./locationOfRental";
import {buildOpeningHours} from "./buildOpeningHours";

export function buildLocationOfRental(
  {
    location_id= 1,
    opening_hours= buildOpeningHours(),
    location_name= "Airport Vienna",
    street_name= "Parkstrasse",
    street_number= "16",
    city_name= "Austria",
    postal_code= 1300,
    email= "airport-vienna@carrentalvienna.com",
    phone= "06602526284",
    latitude= "48.12037524536211",
    longitude= "16.563466629953894"
  }:Partial<LocationOfRental> = {}
): LocationOfRental {
  return {
    location_id,
    opening_hours,
    location_name,
    street_name,
    street_number,
    city_name,
    postal_code,
    email,
    phone,
    latitude,
    longitude
  }
}
