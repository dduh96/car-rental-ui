import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailDialogComponent} from './order-detail-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Order} from "../../../model/order";
import {buildOrder} from "../../../mock/order-mock/buildOrder";
import {Car} from "../../../model/car";


describe('OrderDetailDialogComponent', () => {
  let component: OrderDetailDialogComponent;
  let fixture: ComponentFixture<OrderDetailDialogComponent>;
  let matDialogData: Order = buildOrder();
  const mockDialog = {
    close: () => {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDetailDialogComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: mockDialog},
        {provide: MAT_DIALOG_DATA, useValue: matDialogData},
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

  it('should close dialog onDismiss', function () {
    let spy = spyOn(component.dialogRef, 'close');
    component.onDismiss();
    expect(spy).toHaveBeenCalled();
  });

  it('should close dialog onConfirm when status selected', function () {
    component.selectedStatus = Car.CarStatusEnum.Available
    let spy = spyOn(component.dialogRef, 'close');
    component.onConfirm();
    fixture.detectChanges();
    fixture.whenStable().then( _ =>
      expect(spy).toHaveBeenCalled()
    );
  });

  it('should alert window onConfirm when no status selected', function () {
    let spy = spyOn(window, "alert");
    component.onConfirm();
    fixture.detectChanges();
    fixture.whenStable().then( _ =>
      expect(spy).toHaveBeenCalledWith("Please select current order status")
    );
  });


});
