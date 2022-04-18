import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLoginComponent } from './order-login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('OrderLoginComponent', () => {
  let component: OrderLoginComponent;
  let fixture: ComponentFixture<OrderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderLoginComponent ],
      imports: [HttpClientTestingModule]
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
