import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../../api/order.service";
import {Order} from "../../../model/order";

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  public orderId: string | undefined;
  public order: Order | undefined;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) {
    orderService.getOrderById(this.activatedRoute.snapshot.params["orderId"]).subscribe(res => this.order = res);
  }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params["orderId"];
  }

}
