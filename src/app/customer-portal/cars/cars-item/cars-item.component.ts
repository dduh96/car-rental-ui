import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../model/car";
import {inputSearch} from "../inputSearch";
import {Currency} from "../../../model/currency";

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  constructor() {
  }

  @Input('inputSearch') inputSearch!: inputSearch;
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
/*
  public test = this.car.price;
  public rateUsd = this.currencyTest.find(sym => sym == Currency.SymbolEnum.Usd)!.rate;
  public selectedRate = this.currencyTest.find(sym => sym == this.inputSearch.selectedCurrencySymbol)!.rate;
  public getPrice(): number {
    let rateUsd = this.currencyTest.find(sym => sym == Currency.SymbolEnum.Usd)!.rate;
    let selectedRate = this.currencyTest.find(sym => sym == this.inputSearch.selectedCurrencySymbol)!.rate;
    //USD-Preis / USD-Currency * Wunsch-Currency
    if (rateUsd != undefined && selectedRate != undefined)
      return this.car.price / rateUsd * selectedRate;
    else return -1;
  }*/
}












