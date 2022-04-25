import {Component, OnInit} from '@angular/core';
import {} from 'googlemaps';
import {MatDialog} from "@angular/material/dialog";
import {OrderLoginComponent} from "./customer-portal/order-login/order-login.component";
import {AdminLoginComponent} from "./admin-portal/admin-login/admin-login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental-ui';
  isAdmin = sessionStorage.getItem('BearerToken') != null; // todo is that the right key?

  constructor( private dialogRef: MatDialog ) {  }

  openOrderDialog(){
    this.dialogRef.open(OrderLoginComponent);
  }
  openAdminDialog(){
    this.dialogRef.open(AdminLoginComponent);
  }
}
