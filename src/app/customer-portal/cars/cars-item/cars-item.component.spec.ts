import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarsItemComponent} from './cars-item.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BookCarComponent} from "../book-car/book-car.component";
import {Car} from "../../../model/car";
import {CarService} from "../../../api/car.service";
import {InputSearch} from "../InputSearch";
import {Currency} from "../../../model/currency";

describe('CarsItemComponent', () => {
  let component: CarsItemComponent;
  let fixture: ComponentFixture<CarsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsItemComponent, BookCarComponent],
      imports: [HttpClientTestingModule],
      providers: [CarService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsItemComponent);
    component = fixture.componentInstance;
    const mockCar: Car = {
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
      price: 200,
      currency_symbol: Car.CurrencySymbolEnum.Usd,
      picture_link: "https://i.pinimg.com/originals/bf/07/14/bf07144f9a02225c7e058aa8d958d2af.png"
    }
    component.car = mockCar;

    const mockInputSearch: InputSearch = {
      selectedDateFrom: "this.dateToday",
      selectedDateTo: "this.dateTodayPlusSeven",
      selectedCurrencySymbol: Currency.SymbolEnum.Usd
    };

    component.inputSearch = mockInputSearch;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set visibility on true', () => {
    component.bookCar();
    expect(component.visibilityBookCar).toBeTruthy();
  });

  it('should calculate price',()=>{
    component.inputSearch.selectedDateFrom="2022-01-01";
    component.inputSearch.selectedDateTo="2022-01-02";
    component.car.price=20000;
    return expect(component.getPrice()).toBe("400.00");
  });

});
