import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from "../../api/order.service";
import {AuthService} from "../../api/auth.service";
import {Order} from "../../model/order";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {OrderDetailDialogComponent} from "../dialogs/order-detail-dialog/order-detail-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit, AfterViewInit {
  public orderList: Order[] = [];

  displayedColumns: string[] = [
    "order_id",
    "customer_name",
    "car",
    "date_of_booking",
    "order_status",
    "view_details"
  ]

  constructor(private orderService: OrderService, private dialog: MatDialog, private authService: AuthService, private router: Router) {
    if(authService.getAdminCredentials() != undefined) {
      // @ts-ignore
      this.orderService.configuration.credentials = authService.getAdminCredentials();
      this.orderService.getAllOrders().subscribe(res => {
        res.filter(order => order.saga_status == Order.SagaStatusEnum.Finished)
        this.orderList = res;
      });
    }

      });
    } 


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
        this.pageReload();
      }
    })

  }

  public pageReload() {
    this.router.navigate(['/']).then(_ => {
      this.pageReload();
    });
  }

}
