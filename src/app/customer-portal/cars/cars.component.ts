import {Component, OnInit} from '@angular/core';
import {CarService} from "../../api/car.service";
import {Car} from "../../model/car";
import {formatDate} from '@angular/common';
import {InputSearch} from "./InputSearch";
import {AuthService} from "../../api/auth.service";
import {Currency} from "../../model/currency";
import {CurrencyService} from "../../api/currency.service";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  /**Mocking Backend**/
  public carsTest: Car[] = [{
    car_id: 1,
    car_status: Car.CarStatusEnum.Repair,
    chassis_number: "12i-23423412",
    manufacturer: "VW",
    construction_year: "2009",
    color: "black",
    model: "Golf",
    model_series: "6",
    engine_fuel: "Diesel",
    engine_fuel_consumption: 8,
    engine_performance: 12,
    engine_type: "type A",
    gear_type: "Automatic",
    adblue: true,
    seats: 6,
    price: 169.19,
    currency_symbol: Car.CurrencySymbolEnum.Usd,
    picture_link: "https://i.pinimg.com/originals/bf/07/14/bf07144f9a02225c7e058aa8d958d2af.png"
  },
    {
      car_id: 2,
      car_status: Car.CarStatusEnum.Repair,
      chassis_number: "12i-23423412",
      manufacturer: "VW",
      construction_year: "2009",
      color: "black",
      model: "Golf",
      model_series: "7",
      engine_fuel: "Diesel",
      engine_fuel_consumption: 8,
      engine_performance: 12,
      engine_type: "type A",
      gear_type: "Automatic",
      adblue: true,
      seats: 6,
      price: 169.19,
      currency_symbol: Car.CurrencySymbolEnum.Usd,
      picture_link: "https://i.pinimg.com/originals/bf/07/14/bf07144f9a02225c7e058aa8d958d2af.png"
    }, {
      car_id: 3,
      car_status: Car.CarStatusEnum.Repair,
      chassis_number: "12i-23423412",
      manufacturer: "VW",
      construction_year: "2009",
      color: "black",
      model: "Golf",
      model_series: "8",
      engine_fuel: "Diesel",
      engine_fuel_consumption: 8,
      engine_performance: 12,
      engine_type: "type A",
      gear_type: "Automatic",
      adblue: true,
      seats: 6,
      price: 169.19,
      currency_symbol: Car.CurrencySymbolEnum.Usd,
      picture_link: "https://i.pinimg.com/originals/bf/07/14/bf07144f9a02225c7e058aa8d958d2af.png"
    }];
  public currencyTest: Currency[] = [
    {
      symbol: Currency.SymbolEnum.Jpy,
      rate: 1.78
    },
    {
      symbol: Currency.SymbolEnum.Usd,
      rate: 1.45
    },
    {
      symbol: Currency.SymbolEnum.Eur,
      rate: 1.30
    }];





  public cars: Car[] | undefined;
  public currency: Currency[] | undefined;
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

  public inputSearch: InputSearch = {
    selectedLocation: "empty",
    selectedTimeFrom: this.timeList[5].value,
    selectedDateFrom: this.dateToday,
    selectedTimeTo: this.timeList[5].value,
    selectedDateTo: this.dateTodayPlusSeven,
    selectedCurrencySymbol: Currency.SymbolEnum.Usd
  };

  constructor(private carService: CarService, private currencyService: CurrencyService, private authService: AuthService) {
    carService.getCars(Car.CurrencySymbolEnum.Usd).subscribe(res => this.cars = res);
    currencyService.getCurrencies().subscribe(res => this.currency = res);

    /*authService.loginOrder({
      order_id: "14aa3925-312c-462e-acf8-279d18e9a9c8",
      last_name: "Strasser"
    }).subscribe(res => console.log(res));*/
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
