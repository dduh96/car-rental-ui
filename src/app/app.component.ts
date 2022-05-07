import {Component, OnInit} from '@angular/core';
import {} from 'googlemaps';
import {MatDialog} from "@angular/material/dialog";
import {OrderLoginComponent} from "./customer-portal/order-login/order-login.component";
import {AdminLoginComponent} from "./admin-portal/admin-login/admin-login.component";
import {filter, fromEvent, map, mergeMap, Subscription, timer} from "rxjs";
import {AuthService} from "./api/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental-ui';
  isAdmin = sessionStorage.getItem('admin_token') != null;
  private verifyStillAdminInterval = 180; // seconds



  constructor( private dialog: MatDialog, private authService: AuthService, private router: Router) {
    /*if(this.isAdmin){
      timer(0, this.verifyStillAdminInterval).pipe(
        map(_ => this.authService.handleAdminCredentialsInvalid())
      ).subscribe()
    }*/
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

  logout(){
    this.router.navigate(['./services']);
    sessionStorage.removeItem('admin_token');
    // todo: reload window
  }

}
