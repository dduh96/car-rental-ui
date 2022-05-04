import {Component, OnInit} from '@angular/core';
import {} from 'googlemaps';
import {MatDialog} from "@angular/material/dialog";
import {OrderLoginComponent} from "./customer-portal/order-login/order-login.component";
import {AdminLoginComponent} from "./admin-portal/admin-login/admin-login.component";
import {filter, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental-ui';
  isAdmin = sessionStorage.getItem('admin_token') != null;


  constructor( private dialog: MatDialog ) {

  }

  openOrderDialog(){
    this.dialog.open(OrderLoginComponent).afterClosed().subscribe( res => {
      if (res)
        window.location.reload();
    });
  }

  openAdminDialog(){
    this.dialog.open(AdminLoginComponent).afterClosed().subscribe( res => {
      if (res)
        window.location.reload();
    });
  }

}
