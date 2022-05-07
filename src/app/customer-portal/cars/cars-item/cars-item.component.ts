import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../model/car";
import {InputSearch} from "../InputSearch";
import {Currency} from "../../../model/currency";
import {CurrencyService} from "../../../api/currency.service";

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {


  constructor(currencyService: CurrencyService) {
    currencyService.getCurrencies().subscribe(res => this.currency = res);
  }

  @Input('inputSearch') inputSearch!: InputSearch;
  @Input('car') car!: Car;
  public currency: Currency[] | undefined;
  public visibilityBookCar = false;

  ngOnInit(): void {
  }


  public bookCar() {
    this.inputSearch.car_id = this.car.car_id;
    this.visibilityBookCar = true;
  }

  public getPrice(): string {
    let dateTo = new Date(this.inputSearch.selectedDateTo);
    let dateFrom = new Date(this.inputSearch.selectedDateFrom);
    let dateToInMs = dateTo.getTime();
    let dateFromInMs = dateFrom.getTime();

    const diffInMs = Math.abs(dateToInMs - dateFromInMs);
    let diff =  diffInMs / (1000 * 60 * 60 * 24) + 1;

    return (this.car.price / 100 * Math.ceil(diff)).toFixed(2);
  }

}












