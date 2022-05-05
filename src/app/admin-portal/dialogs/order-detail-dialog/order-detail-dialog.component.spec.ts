import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailDialogComponent} from './order-detail-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Order} from "../../../model/order";
import {buildOrder} from "../../../mock/order-mock/buildOrder";


describe('OrderDetailDialogComponent', () => {
  let component: OrderDetailDialogComponent;
  let fixture: ComponentFixture<OrderDetailDialogComponent>;
  let matDialogData: Order = buildOrder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDetailDialogComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: matDialogData}, // todo
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
