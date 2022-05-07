import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CarsComponent} from './cars.component';
import {CarsItemComponent} from "./cars-item/cars-item.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarService} from "../../api/car.service";
import {Observable, of} from "rxjs";
import {Car} from "../../model/car";
import {buildCar} from "../../mock/order-mock/buildCar";
import {HttpEventType, HttpProgressEvent} from "@angular/common/http";

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let service: CarService;
  const mockHttp = {
    request: jasmine.createSpy('request')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsComponent, CarsItemComponent],
      providers: [CarService],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cars', fakeAsync(() => {
    mockHttp.request.and.returnValue(
      of(true)
    );
    service.getCarsByStatus(Car.CarStatusEnum.Available).pipe().subscribe( progress =>{
      expect(progress).toEqual([]);
      }
    )
  }));

  it('should set selectedDateFrom', ()=>{
    component.onDateChangeFrom("01/01/2022");
    expect(component.inputSearch.selectedDateFrom).toBe("2022-01-01");
  });

  it('should set selectedDateTo', ()=>{
    component.onDateChangeTo("02/02/2022");
    expect(component.inputSearch.selectedDateTo).toBe("2022-02-02");
  });
});
