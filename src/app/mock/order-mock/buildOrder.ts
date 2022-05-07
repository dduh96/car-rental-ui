import {Order} from "./order";
import {buildCar} from "./buildCar";
import {buildLocationOfRental} from "./buildLocationOfRental";
import {buildOpeningHours} from "./buildOpeningHours";
import {buildLocationOfReturn} from "./buildLocationOfReturn";
import {OrderRequest} from "../../model/orderRequest";

export function buildOrder (
  {
    orderId= BigInt(0),
    car= buildCar(),
    location_of_rental = buildLocationOfRental(),
    location_of_return= buildLocationOfReturn(),
    date_of_booking= "2022-04-02",
    date_of_rental= "2022-04-02",
    date_of_return= "2022-04-02",
    method_of_payment= "DINERS_CLUB",
    card_number= "string",
    card_security_code= "string",
    valid_until= "2022-04-02T22=33=39.658+00=00",
    first_name= "Nichil",
    last_name= "Strasser",
    email= "nichil@strasser.at",
    order_status = "CREATED",
    saga_status = "FINISHED"
  }: Partial <Order> = {}

): Order {
  return {
    orderId,
    car: car,
    location_of_rental: location_of_rental,
    location_of_return: location_of_return,
    date_of_booking,
    date_of_rental,
    date_of_return,
    method_of_payment,
    card_number,
    card_security_code,
    valid_until,
    first_name,
    last_name,
    email,
    order_status,
    saga_status
  }
}
