// @ts-ignore
import {Car} from "../../model/car";

export interface Car {
  car_id: number,
  car_status: Car.CarStatusEnum,
  chassis_number: string,
  manufacturer: string,
  construction_year: string,
  color: string,
  model: string,
  model_series: string,
  engine_fuel: string,
  engine_fuel_consumption: number,
  engine_performance: number,
  engine_type: string,
  gear_type: string,
  adblue: boolean,
  seats: number,
  price: number,
  currency_symbol: Car.CurrencySymbolEnum,
  picture_link: string
}
