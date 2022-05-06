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

    this.orderService.updateStatusById(this.order.orderId, this.selectedStatus).subscribe( _ =>
      this.dialogRef.close(true)
    );
  }

}
