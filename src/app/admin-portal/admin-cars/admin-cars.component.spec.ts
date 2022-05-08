import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarsComponent } from './admin-cars.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('AdminCarsComponent', () => {
  let component: AdminCarsComponent;
  let fixture: ComponentFixture<AdminCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarsComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarsComponent);
    component = fixture.componentInstance;
    component.pageReload = function (){}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
