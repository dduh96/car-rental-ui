import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarDialogComponent } from './add-car-dialog.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {of} from "rxjs";
import {buildCar} from "../../../mock/order-mock/buildCar";

describe('AddCarDialogComponent', () => {
  let component: AddCarDialogComponent;
  let fixture: ComponentFixture<AddCarDialogComponent>;
  let mockCar = buildCar();
  const mockDialog = {
    close: () => {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarDialogComponent ],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: mockDialog},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarDialogComponent);
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

  it('should close dialog onConfirm when admin_token available', function () {
    sessionStorage.setItem("admin_token", "token");
    let spy = spyOn(component.dialogRef, 'close').and.returnValue();
    component.onConfirm();
    fixture.detectChanges();
    fixture.whenStable().then( res =>
      expect(spy).toHaveBeenCalled()
    );
  });

  it('should alert window onConfirm when admin_token unavailable', function () {
    let spy = spyOn(window, "alert");
    component.onConfirm();
    fixture.detectChanges();
    fixture.whenStable().then( res =>
      expect(spy).toHaveBeenCalledWith("Unable to create car. Please try logging in again")
    );
  });
});
