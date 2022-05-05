import {OpeningHours} from "./openingHours";

export function buildOpeningHours(
  {
    opening_hours_id= 1,
    monday= "07.00 Uhr - 23.30 Uhr",
    tuesday= "07.00 Uhr - 23.30 Uhr",
    wednesday= "07.00 Uhr - 23.30 Uhr",
    thursday= "07.00 Uhr - 23.30 Uhr",
    friday= "07.00 Uhr - 23.30 Uhr",
    saturday= "08.00 Uhr - 20.00 Uhr",
    sunday= "08.00 Uhr - 23.00 Uhr"
  }:Partial<OpeningHours> = {}
): OpeningHours {
  return {
    opening_hours_id,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  }
}
