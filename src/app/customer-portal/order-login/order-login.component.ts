import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../api/order.service";
import {Order} from "../../model/order";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-order-login',
  templateUrl: './order-login.component.html',
  styleUrls: ['./order-login.component.css']
})

export class OrderLoginComponent implements OnInit {
  public viewOrderForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    ordernumber: new FormControl(''),
  });

  public order: Order | undefined;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  public viewOrder(){
      // Logic to update the user will go here, but for now, we'll just log the values
      console.log(
        this.viewOrderForm.controls['email'].value,
        this.viewOrderForm.controls['ordernumber'].value,
      )
  }
}
