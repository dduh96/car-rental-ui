import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../api/car.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCarDialogComponent} from "../dialogs/add-car-dialog/add-car-dialog.component";
import {AuthService} from "../../api/auth.service";
import {OrderService} from "../../api/order.service";
import {Configuration} from "../../configuration";

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {
  public carList: Car[] = [];
  displayedColumns: string[] = ['car_id',
    'car_status',
    'chassis_number',
    'manufacturer',
    'construction_year',
    'color',
    'model',
    'model_series',
    'engine_fuel',
    'engine_fuel_consumption',
    'engine_performance',
    'engine_type',
    'gear_type',
    'adblue',
    'seats',
    'price',
  ];


  constructor(private carService: CarService, private dialog: MatDialog, private authService: AuthService) {
    carService.getCars(Car.CurrencySymbolEnum.Usd).subscribe( res =>
      this.carList = res);

    authService.loginAdmin({email: "admin", password: "admin123"}).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
  }

  public openAddCarDialog(){
    const dialogRef = this.dialog.open(AddCarDialogComponent, {
      panelClass: "col-lg-8",
      disableClose: false
    });

    dialogRef.afterClosed().subscribe( dialogRes => {
      if (dialogRes){
        window.location.reload();
      }
    });
  }

}
