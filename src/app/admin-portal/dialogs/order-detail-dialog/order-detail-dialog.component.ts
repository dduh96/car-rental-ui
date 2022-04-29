import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrderService} from "../../../api/order.service";
import {Order} from "../../../model/order";
import {OrderRequest} from "../../../model/orderRequest";

@Component({
  selector: 'app-order-detail-dialog',
  templateUrl: './order-detail-dialog.component.html',
  styleUrls: ['./order-detail-dialog.component.css']
})
export class OrderDetailDialogComponent implements OnInit {
  public statusKeys = Object.values(Order.OrderStatusEnum);
  public selectedStatus: any;

  constructor(
    public dialogRef: MatDialogRef<OrderDetailDialogComponent>,
    private orderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public order: Order

  ) {
    this.selectedStatus = order.order_status;
  }

  ngOnInit(): void {
  }

  onDismiss() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    if (this.selectedStatus === "" || this.selectedStatus === undefined) {
      alert("Please select current order status");
      return;
    }

    const orderRequest: OrderRequest = {
      car_id: this.order.car.car_id,
      location_of_rental_id: this.order.location_of_rental.location_id!,
      location_of_return_id: this.order.location_of_return.location_id!,
      date_of_booking: this.order.date_of_booking,
      date_of_rental: this.order.date_of_rental,
      date_of_return: this.order.date_of_return,
      method_of_payment: this.order.method_of_payment,
      card_number: this.order.card_number,
      card_security_code: this.order.card_security_code,
      valid_until: this.order.valid_until,
      first_name: this.order.first_name,
      last_name: this.order.last_name,
      email: this.order.email,
      order_status: this.selectedStatus // todo undefined safety
    }

    this.orderService.updateOrderById(this.order.orderId, orderRequest).subscribe( res =>
      this.dialogRef.close(true)
    );

  }

}
