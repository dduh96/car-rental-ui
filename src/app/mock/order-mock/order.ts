import {Car} from "./car";
import {LocationOfRental} from "./locationOfRental";
import {LocationOfReturn} from "./locationOfReturn";
// @ts-ignore
import {Order} from "../../model/order";

export interface Order {
  orderId: BigInt,
  car: Car,
  location_of_rental: LocationOfRental,
  location_of_return: LocationOfReturn,
  date_of_booking: string,
  date_of_rental: string,
  date_of_return: string,
  method_of_payment: Order.MethodOfPaymentEnum,
  card_number: string,
  card_security_code: string,
  valid_until: string,
  first_name: string,
  last_name: string,
  email: string,
  order_status: Order.OrderStatusEnum,
  saga_status: Order.SagaStatusEnum
}


