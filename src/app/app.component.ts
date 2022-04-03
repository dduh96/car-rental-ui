import { Component } from '@angular/core';
import {} from 'googlemaps';
import {MatDialog} from "@angular/material/dialog";
import {OrderLoginComponent} from "./customer-portal/order-login/order-login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental-ui';

  constructor(private dialogRef: MatDialog) {}

  openDialog(){
    this.dialogRef.open(OrderLoginComponent);
  }
}
