import {Car} from "./car";

export function buildCar(
  {
    car_id= 1,
    car_status= "AVAILABLE",
    chassis_number= "W0L000051T2123456",
    manufacturer= "VW",
    construction_year= "null",
    color= "Red",
    model= "Arteon",
    model_series= "Coupé",
    engine_fuel= "Super",
    engine_fuel_consumption= 3.50,
    engine_performance= 218,
    engine_type= "Hybrid",
    gear_type= "automatic",
    adblue= false,
    seats= 5,
    price= 25000.0,
    currency_symbol= "USD",
    picture_link= "https=//assets.adac.de/image/upload/ar_16=9,c_fill,f_auto,g_auto,q_auto,w_600/v1/Autodatenbank/Fahrzeugbilder/im06116-1-vw-arteon.jpg"
  }:Partial<Car> = {}
): Car {
  return {
    car_id,
    car_status,
    chassis_number,
    manufacturer,
    construction_year,
    color,
    model,
    model_series,
    engine_fuel,
    engine_fuel_consumption,
    engine_performance,
    engine_type,
    gear_type,
    adblue,
    seats,
    price,
    currency_symbol,
    picture_link
  }
}
