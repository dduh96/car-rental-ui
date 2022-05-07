import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../../api/order.service";
import {Order} from "../../../model/order";
import {AuthService} from "../../../api/auth.service";

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  public orderId: string | undefined;
  public order: Order | undefined;
  public price: string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService, private authService: AuthService) {
    if(sessionStorage.getItem('order_token') != undefined){
      // @ts-ignore
      this.orderService.configuration.credentials =  this.authService.getCredentialsForToken(sessionStorage.getItem('order_token'));
    }

    orderService.getOrderById(this.activatedRoute.snapshot.params["orderId"]).subscribe(res => {
      this.order = res

      if(res != undefined){
        let dateTo = new Date(res.date_of_return);
        let dateFrom = new Date(res.date_of_rental);
        let dateToInMs = dateTo.getTime();
        let dateFromInMs = dateFrom.getTime();
        let diffInMs = Math.abs(dateToInMs - dateFromInMs);
        let diff =  diffInMs / (1000 * 60 * 60 * 24) + 1;
        this.price = (res.car.price / 100 * Math.ceil(diff)).toFixed(2);
      }
    });
  }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params["orderId"];
  }

}
