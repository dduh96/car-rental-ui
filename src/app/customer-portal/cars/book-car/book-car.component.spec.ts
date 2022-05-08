import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { BookCarComponent } from './book-car.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {OrderService} from "../../../api/order.service";
import {of} from "rxjs";
import {Car} from "../../../model/car";
import {Order} from "../../../model/order";
import {buildOrder} from "../../../mock/order-mock/buildOrder";
import {buildOrderRequest} from "../../../mock/order-mock/buildOrderRequest";
import {OrderRequest} from "../../../mock/order-mock/orderRequest";

describe('BookCarComponent', () => {
  let component: BookCarComponent;
  let fixture: ComponentFixture<BookCarComponent>;
  let service: OrderService;
  let orderRequestMock : OrderRequest= buildOrderRequest();
  let orderMock: Order=buildOrder();
  const mockHttp = {
    request: jasmine.createSpy('request')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCarComponent ],
      providers:[BookCarComponent],
      imports: [ HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(OrderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close view when button clicked', function (){
    component.cancel();
    expect(component.visibility).toBeFalsy();
  });


  /**
   * weil SPEC HAS NO EXPECTATIONS
   *
   * vl hilft das? -> irgendwas mit weils async ist?
   * it('should display correct data', waitForAsync(() => {
   *     fixture.whenStable().then(() => {
   *       // expect
   *     });
   *  }));
   */
  it('should create order', fakeAsync(() => {
    mockHttp.request.and.returnValue(
      of(true)
    );

    service.createOrderUpdateCar(orderRequestMock).pipe().subscribe( progress =>{
        expect(progress).toEqual(orderMock);
      }
    )
  }));

});









