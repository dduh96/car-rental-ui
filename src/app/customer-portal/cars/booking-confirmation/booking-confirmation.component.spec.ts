import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { BookingConfirmationComponent } from './booking-confirmation.component';
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {OrderService} from "../../../api/order.service";
import {Order} from "../../../model/order";
//import {Observable, of, Subject} from 'rxjs';
//import 'rxjs/add/observable/of';
import {buildOrder} from "../../../mock/order-mock/buildOrder";
import {of} from "rxjs";


describe('BookingConfirmationComponent', () => {
  let component: BookingConfirmationComponent;
  let fixture: ComponentFixture<BookingConfirmationComponent>;
  let service:OrderService;
  let activatedRoute: ActivatedRoute;
  let order: Order = buildOrder();
  const mockHttp = {
    request: jasmine.createSpy('request')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingConfirmationComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot:{paramMap: of( convertToParamMap( { userId: 1 } ) )}
          }
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(OrderService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });

 /* it('should create TEST', () => {
    activatedRoute.paramMap.pipe().subscribe(res =>
    {
      get: (key: string) => 'value1'
    });
    expect(component).toBeTruthy();
  });*/

});
