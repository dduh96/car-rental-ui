import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Router, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CarsComponent} from "./customer-portal/cars/cars.component";
import {LocationsComponent} from "./customer-portal/locations/locations.component";
import {CarsItemComponent} from "./customer-portal/cars/cars-item/cars-item.component";
import {BookCarComponent} from "./customer-portal/cars/book-car/book-car.component";
import {CustomerServiceComponent} from "./customer-portal/customer-service/customer-service.component";
import {OrderLoginComponent} from "./customer-portal/order-login/order-login.component";
import {BookingConfirmationComponent} from "./customer-portal/cars/booking-confirmation/booking-confirmation.component";
import {AdminLoginComponent} from "./admin-portal/admin-login/admin-login.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import {MDBRootModule} from "angular-bootstrap-md";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserTestingModule} from "@angular/platform-browser/testing";
import {RouterTestingModule} from "@angular/router/testing";

const routes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'booking/:id/:InputSearch',
    component: BookCarComponent
  },
  {
    path: 'confirmation/:orderId',
    component: BookingConfirmationComponent
  },
  {
    path: 'services',
    component: CustomerServiceComponent
  }
]

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CarsComponent,
        LocationsComponent,
        CarsItemComponent,
        BookCarComponent,
        CustomerServiceComponent,
        OrderLoginComponent,
        BookingConfirmationComponent,
        AdminLoginComponent
      ],
      imports: [
        BrowserTestingModule,
        RouterModule.forRoot(routes),
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
        AgmCoreModule.forRoot({
          apiKey: environment.GAPI_KEY,
          libraries: ['places']
        }),
        MatToolbarModule,
        ReactiveFormsModule,
        MatDialogModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pageReload = function () {};
    expect(app).toBeTruthy();
  });

  it(`should have as title 'car-rental-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.pageReload = function () {};
    expect(app.title).toEqual('car-rental-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('We got the car you need');
  });
});
