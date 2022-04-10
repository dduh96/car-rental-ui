import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  public orderId: string | undefined;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params["orderId"];
  }

}
