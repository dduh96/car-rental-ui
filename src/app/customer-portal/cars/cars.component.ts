import {Component, OnInit} from '@angular/core';
import {CarService} from "../../api/car.service";
import {Car} from "../../model/car";
import {formatDate} from '@angular/common';
import {inputSearch} from "./inputSearch";
import {AuthService} from "../../api/auth.service";
import {LocationService} from "../../api/location.service";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public car: Car = {
    id: "123456",
    chassis_number: "28djq012831",
    manufacturer: "VW",
    construction_year: "2012",
    color: "black",
    model: "Golf",
    model_series: "6",
    engine_fuel: "Diesel",
    engine_fuel_consumption: 12,
    engine_performance: 6,
    engine_type: "oida keine ahnung",
    gear_type: "shift",
    adblue: true,
    seats: 5,
    price_in_doller_cent: 169.06,
    location_id: "Vienna"
  };
  public nrItems = [1, 2, 3, 4];
  public locations = [
    {value: 'Vienna', viewValue: 'Vienna'},
    {value: 'Salzburg', viewValue: 'Salzburg'}];
  public timeList = [
    {value: '6', viewValue: '06:00'},
    {value: '7', viewValue: '07:00'},
    {value: '8', viewValue: '08:00'},
    {value: '9', viewValue: '09:00'},
    {value: '10', viewValue: '10:00'},
    {value: '11', viewValue: '11:00'},
    {value: '12', viewValue: '12:00'},
    {value: '13', viewValue: '13:00'},
    {value: '14', viewValue: '14:00'},
    {value: '15', viewValue: '15:00'},
    {value: '16', viewValue: '16:00'},
    {value: '17', viewValue: '17:00'},
    {value: '18', viewValue: '18:00'},
    {value: '19', viewValue: '19:00'},
    {value: '20', viewValue: '20:00'},
    {value: '21', viewValue: '21:00'},
    {value: '22', viewValue: '22:00'},
  ]

  public dateToday = formatDate(Date.now(), 'yyyy-MM-dd', 'en');
  public dateTodayPlusSeven = this.addSeven();

  public inputSearch: inputSearch = {
    selectedLocation: this.locations[0].value,
    selectedTimeFrom: this.timeList[5].value,
    selectedDateFrom: this.dateToday,
    selectedTimeTo: this.timeList[5].value,
    selectedDateTo: this.dateTodayPlusSeven
  };


  constructor(private carService: CarService, private authService: AuthService, private locationService:LocationService) {
    carService.getCars(Car.CurrencySymbolEnum.Usd).subscribe(res => console.log(res));
    authService.loginOrder({
      order_id:"14aa3925-312c-462e-acf8-279d18e9a9c8",
      last_name:"Strasser"
    }).subscribe(res => console.log(res)); //todo: geschützt durch auth? - würde so keinen sinn machen, oder?
    locationService.getLocations().subscribe(
      res=> console.log(res));
  }

  ngOnInit(): void {

  }

  public addSeven(): string {
    let datePlusSeven = new Date();
    datePlusSeven.setDate(datePlusSeven.getDate() + 7);
    return formatDate(datePlusSeven, 'yyyy-MM-dd', 'en');
  }

  public onDateChangeFrom(date: string) {
    this.inputSearch.selectedDateFrom = formatDate(date, 'yyyy-MM-dd', 'en');
  }

  public onDateChangeTo(date: string) {
    this.inputSearch.selectedDateTo = formatDate(date, 'yyyy-MM-dd', 'en');
  }

  public searchCars() {

  }


  /* public getCars(){
     this.carService.getAllCars().subscribe(resCars => {
       this.cars = resCars;
     })
   }*/


}
