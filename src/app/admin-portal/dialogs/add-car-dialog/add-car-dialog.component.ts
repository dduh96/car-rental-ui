import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CarService} from "../../../api/car.service";
import {Car} from "../../../model/car";
import {CarRequest} from "../../../model/carRequest";
import {ParseArgumentException} from "@angular/cli/models/parser";
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../api/order.service";
import {Order} from "../../../model/order";
import {Configuration} from "../../../configuration";

@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.css']
})
export class AddCarDialogComponent implements OnInit {
  public title: string = "Add a new Car";

  public carForm: FormGroup;

  // car fields
  public car_status: Car.CarStatusEnum = Car.CarStatusEnum.Available;
  public chassis_number: string = "asd";
  public manufacturer: string = "VW";
  public construction_year: string = "2022";
  public color: string = "black";
  public model: string = "audi";
  public model_series: string = "a6";
  public engine_fuel: string = "diesel";
  public engine_fuel_consumption: number = 10;
  public engine_performance: number = 110;
  public engine_type: string = "asd";
  public gear_type: string = "asda";
  public adblue: boolean = false;
  public seats: number = 3;
  public price: number = 12312; //todo issue with form: all fields overwritten with this
  public currency_symbol: Car.CurrencySymbolEnum = Car.CurrencySymbolEnum.Usd;
  public picture_link: string = "";

  public adBlueOptions = [true, false];

  constructor(public dialogRef: MatDialogRef<AddCarDialogComponent>, public carService: CarService) {
    this.carForm = new FormGroup({
      required: new FormControl('', [Validators.required]),
      controlChassisNumber: new FormControl('', [Validators.required]),
      controlManufacturer: new FormControl('', [Validators.required]),
      controlColor: new FormControl('', [Validators.required]),
      controlModel: new FormControl('', [Validators.required]),
      controlModelSeries: new FormControl('', [Validators.required]),
      controlEngineFuel: new FormControl('', [Validators.required]),
      controlEngineFuelConsumption: new FormControl('', [Validators.required, Validators.pattern(RegExp('^[0-9]*$'))]),
      controlEnginePerformance: new FormControl('', [Validators.required, Validators.pattern(RegExp('^[0-9]*$'))]),
      controlEngineType: new FormControl('', [Validators.required]),
      controlGearType: new FormControl('', [Validators.required]),
      controlAdBlue: new FormControl('', []), //todo make drop down
      controlSeats: new FormControl('', [Validators.required,  Validators.pattern(RegExp('^[0-9]*$'))]),
      controlPrice: new FormControl('', [Validators.required,  Validators.pattern(RegExp('^[0-9]*$'))]),
      controlPictureLink: new FormControl('', []),
    })
  }

  ngOnInit(): void {

  }

  public onDismiss() {
    this.dialogRef.close(false);
  }

  public onConfirm() {
    const carRequest: CarRequest = {
      car_status: this.car_status,
      chassis_number: this.chassis_number,
      manufacturer: this.manufacturer,
      construction_year: undefined,
      color: this.color,
      model: this.model,
      model_series: this.model,
      engine_fuel: this.engine_fuel,
      engine_fuel_consumption: this.engine_fuel_consumption,
      engine_performance: this.engine_performance,
      engine_type: this.engine_type,
      gear_type: this.gear_type,
      adblue: this.adblue,
      seats: this.seats,
      price: this.price,
      currency_symbol: this.currency_symbol,
      picture_link: this.picture_link
    };

    this.carService.createCar(carRequest).subscribe(res => {
      console.log(res);
      this.dialogRef.close(true);
    })


  }



}
