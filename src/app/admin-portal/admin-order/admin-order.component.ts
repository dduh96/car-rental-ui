import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from "../../api/order.service";
import {AuthService} from "../../api/auth.service";
import {Order} from "../../model/order";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {OrderDetailDialogComponent} from "../dialogs/order-detail-dialog/order-detail-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit, AfterViewInit {
  public orderList: Order[] = [];

  displayedColumns: string[] = [
    "order_id", // todo abbreviated
    "car", // todo manufacturer + model (series)
    "date_of_booking",
    "date_of_rental",
    "date_of_return",
    "order_status",
    "view_details"
  ]

  /* todo
  *   only basic info in table, button "View Details" (maybe expandable?), in details: "Update Status"*/

  constructor(private orderService: OrderService, private dialog: MatDialog) {
    this.orderService.getAllOrders().subscribe(res => {

      this.orderList = res;
      const mockOrder = Object.assign({}, this.orderList[0] );
      mockOrder.orderId = "0";
      mockOrder.date_of_booking = "2022-05-02"
      this.orderList.push(mockOrder);

    });


  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }


  public openOrderDetailsDialog(order: Order){
    const dialogRef = this.dialog.open(OrderDetailDialogComponent, {
      data: order
    });

    dialogRef.afterClosed().subscribe(dialogRes => {
      if (dialogRes){
        window.location.reload();
      }
    })

  }

}
