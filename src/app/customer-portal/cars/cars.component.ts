import {Component, OnInit} from '@angular/core';
import {CarService} from "../../api/car.service";
import {Car} from "../../model/car";
import {formatDate} from '@angular/common';
import {InputSearch} from "./InputSearch";
import {Currency} from "../../model/currency";
import {CurrencyService} from "../../api/currency.service";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public cars: Car[] | undefined;
  public currency: Currency[] | undefined;

  public dateToday = formatDate(Date.now(), 'yyyy-MM-dd', 'en');
  public dateTodayPlusSeven = this.addSeven();

  public inputSearch: InputSearch = {
    selectedDateFrom: this.dateToday,
    selectedDateTo: this.dateTodayPlusSeven,
    selectedCurrencySymbol: Currency.SymbolEnum.Usd
  };

  constructor(private carService: CarService, private currencyService: CurrencyService) {
    this.loadCars()
    currencyService.getCurrencies().subscribe(res => this.currency = res);
  }

  public loadCars(){
    if(this.inputSearch.selectedCurrencySymbol != undefined){
      this.carService.getCars(this.inputSearch.selectedCurrencySymbol as Car.CurrencySymbolEnum).subscribe(res => {
        this.cars = res.filter(car => car.car_status == Car.CarStatusEnum.Available);
      });
    }
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

}
