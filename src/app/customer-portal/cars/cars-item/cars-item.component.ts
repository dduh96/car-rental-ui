import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../model/car";
import {InputSearch} from "../InputSearch";
import {Currency} from "../../../model/currency";

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  public test = 0;
  constructor() {
  }

  @Input('inputSearch') inputSearch!: InputSearch;
  @Input('car') car!: Car;
  public visibilityBookCar = false;

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


  ngOnInit(): void {
  }


  public bookCar() {
    this.inputSearch.car_id = this.car.car_id;
    this.visibilityBookCar = true;
  }

  public getPrice():number {
    let rateUsd = this.currencyTest.find(sym => sym.symbol == Currency.SymbolEnum.Usd);
    let selectedRate = this.currencyTest.find(sym => sym.symbol == this.inputSearch.selectedCurrencySymbol);
    if (rateUsd != undefined && selectedRate != undefined)
      return Math.round(this.car.price / rateUsd.rate! * selectedRate.rate!*100)/100;
    else return -1;
  }
}












