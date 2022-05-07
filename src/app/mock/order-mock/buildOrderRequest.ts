import {OrderRequest} from "../../model/orderRequest";
import MethodOfPaymentEnum = OrderRequest.MethodOfPaymentEnum;
import {Order} from "../../model/order";
import OrderStatusEnum = Order.OrderStatusEnum;


export function buildOrderRequest(
  {
    car_id = 1,
    location_of_rental_id = 1,
    location_of_return_id= 1,
    date_of_booking = "01-01-2022",
    date_of_rental = "05-01-2022",
    date_of_return = "05-02-2022",
    method_of_payment = MethodOfPaymentEnum.DinersClub,
    card_number = "1111111111111111",
    card_security_code= "123",
    valid_until = "05-02-2028",
    first_name= "Maria",
    last_name= "Musterfrau",
    email= "test@test.com",
    order_status = OrderStatusEnum.Active
                                  }: Partial <OrderRequest> = {}
                                  ): OrderRequest {
  return {
    car_id,
    location_of_rental_id,
    location_of_return_id,
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
    order_status
  }
}
