import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLoginComponent } from './order-login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Order} from "../../model/order";
import {buildOrder} from "../../mock/order-mock/buildOrder";

describe('OrderLoginComponent', () => {
  let component: OrderLoginComponent;
  let fixture: ComponentFixture<OrderLoginComponent>;

  let matDialogData: Order = buildOrder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderLoginComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: [matDialogData]},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
