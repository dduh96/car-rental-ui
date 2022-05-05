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

  let matDialogData: Order = {
    orderId: "14aa3925-312c-462e-acf8-279d18e9a9c8",
    car: {
      car_id: 1,
      car_status: "AVAILABLE",
      chassis_number: "W0L000051T2123456",
      manufacturer: "VW",
      construction_year: "null",
      color: "Red",
      model: "Arteon",
      model_series: "Coupé",
      engine_fuel: "Super",
      engine_fuel_consumption: 3.50,
      engine_performance: 218,
      engine_type: "Hybrid",
      gear_type: "automatic",
      adblue: false,
      seats: 5,
      price: 25000.0,
      currency_symbol: "USD",
      picture_link: "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto,w_600/v1/Autodatenbank/Fahrzeugbilder/im06116-1-vw-arteon.jpg"
    },
    location_of_rental: {
      location_id: 1,
      opening_hours: {
        opening_hours_id: 1,
        monday: "07.00 Uhr - 23.30 Uhr",
        tuesday: "07.00 Uhr - 23.30 Uhr",
        wednesday: "07.00 Uhr - 23.30 Uhr",
        thursday: "07.00 Uhr - 23.30 Uhr",
        friday: "07.00 Uhr - 23.30 Uhr",
        saturday: "08.00 Uhr - 20.00 Uhr",
        sunday: "08.00 Uhr - 23.00 Uhr"
      },
      location_name: "Airport Vienna",
      street_name: "Parkstrasse",
      street_number: "16",
      city_name: "Austria",
      postal_code: 1300,
      email: "airport-vienna@carrentalvienna.com",
      phone: "06602526284",
      latitude: "48.12037524536211",
      longitude: "16.563466629953894"
    },
    location_of_return: {
      location_id: 2,
      opening_hours: {
        opening_hours_id: 2,
        monday: "09.00 Uhr - 23.30 Uhr",
        tuesday: "07.00 Uhr - 20.30 Uhr",
        wednesday: "07.00 Uhr - 23.30 Uhr",
        thursday: "07.00 Uhr - 23.30 Uhr",
        friday: "07.00 Uhr - 23.30 Uhr",
        saturday: "08.00 Uhr - 20.00 Uhr",
        sunday: "10.00 Uhr - 20.00 Uhr"
      },
      location_name: "City Vienna",
      street_name: "Stephansplatz",
      street_number: "6",
      city_name: "Austria",
      postal_code: 1300,
      email: "city-vienna@carrentalvienna.com",
      phone: "06602526285",
      latitude: "48.20852573292344",
      longitude: "16.374050059536025"
    },
    date_of_booking: "2022-04-02",
    date_of_rental: "2022-04-02",
    date_of_return: "2022-04-02",
    method_of_payment: "DINERS_CLUB",
    card_number: "string",
    card_security_code: "string",
    valid_until: "2022-04-02T22:33:39.658+00:00",
    first_name: "Nichil",
    last_name: "Strasser",
    email: "nichil@strasser.at",
    order_status: "CREATED"
  }


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
