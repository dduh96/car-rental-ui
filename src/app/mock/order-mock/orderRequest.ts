// @ts-ignore
import {OrderRequest} from "../../model/orderRequest";

export interface OrderRequest {
  car_id: number;
  location_of_rental_id: number;
  location_of_return_id: number;
  date_of_booking: string;
  date_of_rental: string;
  date_of_return: string;
  method_of_payment: OrderRequest.MethodOfPaymentEnum;
  card_number: string;
  card_security_code: string;
  valid_until: string;
  first_name: string;
  last_name: string;
  email: string;
  order_status: OrderRequest.OrderStatusEnum;
}
