import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import {CarsItemComponent} from "./cars-item/cars-item.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsComponent, CarsItemComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatFormFieldModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
