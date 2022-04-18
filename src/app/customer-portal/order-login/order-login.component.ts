import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../api/order.service";
import {Order} from "../../model/order";
import {AuthService} from "../../api/auth.service";
import {GetOrder} from "./get-order";
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
  public getOrder: GetOrder = {
    givenLastname:'',
    givenOrderID:''
  }

  constructor(private orderService: OrderService, public authService:AuthService) { }

  ngOnInit(): void {
  }

  public viewOrder(){
      // Logic to update the user will go here, but for now, we'll just log the values
      console.log(
        this.getOrder.givenOrderID,
        this.getOrder.givenLastname
      )
    this.authService.loginOrder({
      order_id:this.getOrder.givenOrderID,
      last_name:this.getOrder.givenLastname
    }).subscribe(res => console.log(res));


  }
}
