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
    let dateFrom = new Date(this.inputSearch.selectedTimeFrom);

    let test = dateTo.valueOf()-dateFrom.valueOf();


    let rateUsd = this.currency?.find(sym => sym.symbol == Currency.SymbolEnum.Usd);
    let selectedRate = this.currency?.find(sym => sym.symbol == this.inputSearch.selectedCurrencySymbol);
    if (rateUsd != undefined && selectedRate != undefined)
      return (((this.car.price / rateUsd.rate! * selectedRate.rate!)/100)*test).toFixed(2);
    else return "";
  }

}












